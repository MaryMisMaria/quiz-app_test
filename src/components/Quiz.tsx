import React, { FC, useState } from 'react';
// material
import { Box, Button, Typography } from '@mui/material';
// map questions array
import { questions } from '../array/questions';
// components
import Answer from './Answer';
import QuizHeader from './QuizHeader';
import ProgressIndicator from './ProgresIndicator';

interface Answer {
  text: string;
  isCorrect: boolean;
}

const Quiz: FC = () => {
  const [score, setScore] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const question = questions[currentQuestionIndex];

  const handleAnswerClick = (answer: Answer) => {
    if (selectedAnswers[currentQuestionIndex]) return;

    setSelectedAnswers([...selectedAnswers, answer]);

    if (answer.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setSelectedAnswers([]);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <Box textAlign="center">
        <Typography sx={{ fontSize: { lg: 18, xs: 12 } }}>
          Your score: {score}/{questions.length}
        </Typography>
        <Button
          variant="contained"
          onClick={handleRestart}
          sx={{ mt: 5, backgroundColor: '#41948A' }}
        >
          Restart
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        maxWidth: 800,
        padding: '20px',
        border: '10px solid',
        borderColor: '#41948A',
      }}
    >
      <QuizHeader
        total={questions.length}
        question={question.question}
        currentIndex={currentQuestionIndex}
      />
      <Box sx={{ m: 4 }}>
        {question.answers?.map((answer, index) => (
          <Answer
            key={index}
            text={answer.text}
            isSelected={
              selectedAnswers[currentQuestionIndex]?.text === answer.text
            }
            isCorrect={
              selectedAnswers[currentQuestionIndex]?.text === answer.text
                ? answer.isCorrect
                : false
            }
            onClick={() => handleAnswerClick(answer)}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        onClick={handleNextQuestion}
        disabled={!selectedAnswers[currentQuestionIndex]}
        sx={{ m: '0px 32px', color: '#FFFFFF', backgroundColor: '#41948A' }}
      >
        Next
      </Button>
      <ProgressIndicator
        totalQuestions={questions.length}
        answers={selectedAnswers.map((answer) => ({
          isCorrect: answer.isCorrect,
        }))}
      />
    </Box>
  );
};

export default Quiz;
