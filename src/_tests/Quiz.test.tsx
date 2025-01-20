import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
// components
import Quiz from '../components/Quiz';
// array
import { questions } from '../array/questions';

describe('Quiz Component', () => {
  it('renders the QuizHeader and first question', () => {
    render(<Quiz />);

    expect(
      screen.getByText(`Question 1 of ${questions.length}`),
    ).toBeInTheDocument();

    expect(screen.getByText(questions[0].question)).toBeInTheDocument();
  });

  it('renders answers for the current question', () => {
    render(<Quiz />);

    questions[0].answers.forEach((answer) => {
      expect(screen.getByText(answer.text)).toBeInTheDocument();
    });
  });

  it('allows selecting an answer and increments the score if correct', () => {
    render(<Quiz />);

    const correctAnswer = questions[0].answers.find((a) => a.isCorrect);
    const answerElement = screen.getByText(correctAnswer!.text);

    fireEvent.click(answerElement);

    expect(answerElement).toHaveStyle('background-color: green');
  });

  it('does not increment the score for incorrect answers', () => {
    render(<Quiz />);

    const incorrectAnswer = questions[0].answers.find((a) => !a.isCorrect);
    const answerElement = screen.getByText(incorrectAnswer!.text);

    fireEvent.click(answerElement);

    expect(answerElement).toHaveStyle('background-color: red');
  });

  it('navigates to the next question when Next is clicked', () => {
    render(<Quiz />);

    const correctAnswer = questions[0].answers.find((a) => a.isCorrect);
    fireEvent.click(screen.getByText(correctAnswer!.text));

    fireEvent.click(screen.getByText('Next'));

    expect(
      screen.getByText(`Question 2 of ${questions.length}`),
    ).toBeInTheDocument();
    expect(screen.getByText(questions[1].question)).toBeInTheDocument();
  });

  it('displays the score and a restart button at the end', () => {
    render(<Quiz />);

    questions.forEach((question, index) => {
      const correctAnswer = question.answers.find((a) => a.isCorrect);
      fireEvent.click(screen.getByText(correctAnswer!.text));

      if (index < questions.length - 1) {
        fireEvent.click(screen.getByText('Next'));
      }
    });

    expect(
      screen.getByText(`Your score: ${questions.length}/${questions.length}`),
    ).toBeInTheDocument();

    const restartButton = screen.getByText('Restart');
    expect(restartButton).toBeInTheDocument();

    fireEvent.click(restartButton);

    expect(screen.getByText('Question 1 of')).toBeInTheDocument();
  });
});
