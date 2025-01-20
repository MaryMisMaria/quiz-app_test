import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// components
import ProgressIndicator from '../components/ProgresIndicator';

describe('ProgressIndicator Component', () => {
  it('renders green indicators for correct answers', () => {
    render(
      <ProgressIndicator answers={[{ isCorrect: true }]} totalQuestions={1} />,
    );

    const indicator = screen.getByTestId('CheckCircleIcon');
    expect(indicator.closest('div')).toHaveStyle('background-color: green');
  });

  it('renders red indicators for incorrect answers', () => {
    render(
      <ProgressIndicator answers={[{ isCorrect: false }]} totalQuestions={1} />,
    );

    const indicator = screen.getByTestId('CancelIcon');
    expect(indicator.closest('div')).toHaveStyle('background-color: red');
  });
});
