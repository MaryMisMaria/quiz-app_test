import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import QuizHeader from '../components/QuizHeader';
import { QuestionProps } from '../types';

describe('QuizHeader Component', () => {
  const mockProps: QuestionProps = {
    total: 5,
    question: 'What is the capital of France?',
    currentIndex: 1,
  };

  it('renders the correct question number and total', () => {
    render(<QuizHeader {...mockProps} />);

    expect(screen.getByText(/Question 2 of 5/i)).toBeInTheDocument();
  });

  it('renders the correct question text', () => {
    render(<QuizHeader {...mockProps} />);

    expect(
      screen.getByText(/What is the capital of France\?/i),
    ).toBeInTheDocument();
  });

  it('renders the correct styles', () => {
    render(<QuizHeader {...mockProps} />);

    const questionText = screen.getByText(/What is the capital of France\?/i);
    const questionNumber = screen.getByText(/Question 2 of 5/i);

    expect(questionNumber).toHaveStyle('margin: 2px; text-align: center;');
    expect(questionText).toHaveStyle('margin: 2px; text-align: center;');
  });
});
