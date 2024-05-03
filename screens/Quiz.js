import React, { useState, useEffect } from "react";
import { Alert, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Question from "../components/Question/Question";
import Answer from "../components/Answer/Answer";
import Progress from "../components/QuizProgress/QuizProgress";
import Score from "../components/Score/Score";
import checkAnswer from "../utils/checkAnswerUtils/checkAnswer";
import calculateScore from "../utils/scoreCalculator/scoreCalculator";
import calculateProgress from "../utils/calculateProgress/calculateProgress";
import { storeData } from "../utils/storageUtils/storeData";
import { shuffleAnswers } from "../utils/shuffleAnswersUtils.js/shuffleAnswers";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../styles/colors";
/**
 * Component to conduct a quiz based on the provided category URL.
 * Handles fetching quiz data, displaying questions, accepting answers, and calculating scores.
 * Allows navigation back to the home screen before and after completing the quiz.
 * @param {object} route - The route object containing category URL parameter.
 */
const Quiz = ({ route }) => {
  // Destructure categoryUrl from route params
  const { categoryUrl } = route.params;
  // State to store quiz questions
  const [questions, setQuestions] = useState([]);
  // State to track current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // State to store user's score for each question
  const [score, setScore] = useState([]);
  // State to track whether wrong answer alerts are shown for each question
  const [wrongAlertsShown, setWrongAlertsShown] = useState({});
  // State to track quiz completion
  const [completed, setCompleted] = useState(false);
  // Navigation hook to enable navigation actions
  const navigation = useNavigation();

  // Effect hook to fetch quiz data when component mounts or categoryUrl changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (categoryUrl) {
          const res = await fetch(categoryUrl);
          const data = await res.json();
          // Set fetched questions data and initialize score state
          setQuestions(data.results);
          setScore(Array(data.results.length).fill(0));
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchData();
  }, [categoryUrl]);

  // Function to handle user's answer selection
  const handleAnswerPress = (selectedAnswer) => {
    // Check if selected answer is correct
    const result = checkAnswer(questions, currentQuestionIndex, selectedAnswer);

    if (result.correct) {
      if (!wrongAlertsShown[currentQuestionIndex]) {
        // Calculate and update score state if answer is correct
        const updatedScore = calculateScore(
          questions,
          currentQuestionIndex,
          selectedAnswer,
          score
        );
        setScore(updatedScore);
      }

      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      if (currentQuestionIndex === questions.length - 1) {
        // If last question, save quiz result and mark as completed
        const category = questions && questions[0].category;
        const date = new Date().toISOString();
        storeData(score, category, date);
        setCompleted(true);
      } else {
        // Show correct answer alert for correct answer
        Alert.alert("Correct answer!", "Congratulations");
      }
    } else {
      // Show wrong answer alert for incorrect answer
      setWrongAlertsShown((prev) => ({
        ...prev,
        [currentQuestionIndex]: true,
      }));
      Alert.alert("Wrong answer :(", "Try again");
    }
  };

  // Function to navigate back to the home screen
  const goBack = () => {
    navigation.navigate("Home");
  };

  // Get the current question object based on current question index
  const currentQuestion = questions[currentQuestionIndex];
  // Calculate progress percentage based on current question index and total questions
  const progress = calculateProgress(currentQuestionIndex, questions.length);

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        {/* Render quiz components based on completion status */}
        {!completed ? (
          <>
            {/* Render question, progress, and answer components */}
            <Question question={currentQuestion && currentQuestion.question} />
            {currentQuestion && (
              <View key={`${currentQuestionIndex}-${currentQuestion.question}`}>
                <Progress progress={progress} />
                <Score score={score.filter((value) => value === 1).length} />
                {shuffleAnswers([
                  ...currentQuestion.incorrect_answers,
                  currentQuestion.correct_answer,
                ]).map((answer, i) => (
                  <Answer
                    key={`${currentQuestionIndex}-${answer}`}
                    answer={answer}
                    onPress={() => handleAnswerPress(answer)}
                  />
                ))}
              </View>
            )}
          </>
        ) : (
          <View style={globalStyles.container}>
            {/* Render completion message and score */}
            <Text style={globalStyles.title}>
              Congratulations! You have completed the quiz.
            </Text>
            <Text style={globalStyles.text}>
              Your score is {score.filter((value) => value === 1).length} /{" "}
              {questions.length}.
            </Text>
          </View>
        )}

        {/* Button to navigate back to the home screen */}
        <TouchableOpacity onPress={goBack} style={globalStyles.button}>
          <Text style={globalStyles.button.text}>Go Home</Text>
          <Feather name="arrow-right" size={20} color={colors.white} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Quiz;

