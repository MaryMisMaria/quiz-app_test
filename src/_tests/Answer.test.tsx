import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
// types
import { AnswerProps } from '../types';
// components
import Answer from '../components/Answer';

describe('Answer Component', () => {
  const mockOnClick = jest.fn();

  const defaultProps: AnswerProps = {
    text: 'Sample Answer',
    isSelected: false,
    isCorrect: false,
    onClick: mockOnClick,
  };

  it('renders the answer text correctly', () => {
    render(<Answer {...defaultProps} />);
    expect(screen.getByText('Sample Answer')).toBeInTheDocument();
  });

  it('applies the correct background color when not selected', () => {
    render(<Answer {...defaultProps} />);
    expect(screen.getByText('Sample Answer')).toHaveStyle(
      'background-color: lightgray',
    );
  });

  it('applies the correct background color when selected and correct', () => {
    render(<Answer {...defaultProps} isSelected={true} isCorrect={true} />);
    expect(screen.getByText('Sample Answer')).toHaveStyle(
      'background-color: green',
    );
  });

  it('applies the correct background color when selected and incorrect', () => {
    render(<Answer {...defaultProps} isSelected={true} isCorrect={false} />);
    expect(screen.getByText('Sample Answer')).toHaveStyle(
      'background-color: red',
    );
  });

  it('applies a shadow when selected', () => {
    render(<Answer {...defaultProps} isSelected={true} />);
    expect(screen.getByText('Sample Answer')).toHaveStyle(
      'box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)',
    );
  });

  it('does not apply a shadow when not selected', () => {
    render(<Answer {...defaultProps} />);
    expect(screen.getByText('Sample Answer')).toHaveStyle('box-shadow: none');
  });

  it('calls the onClick handler when clicked', () => {
    render(<Answer {...defaultProps} />);
    fireEvent.click(screen.getByText('Sample Answer'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
