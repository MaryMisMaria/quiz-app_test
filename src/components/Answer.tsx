import React, { FC } from 'react';
// material
import { Box } from '@mui/material';
// types
import { AnswerProps } from '../types';

const Answer: FC<AnswerProps> = ({ text, isSelected, isCorrect, onClick }) => {
  const backgroundColor = isSelected
    ? isCorrect
      ? 'green'
      : 'red'
    : 'lightgray';

  const boxShadow = isSelected ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none';

  return (
    <Box
      onClick={onClick}
      sx={{
        boxShadow,
        color: 'black',
        padding: '10px',
        backgroundColor,
        margin: '5px 0',
        cursor: 'pointer',
        borderRadius: '4px',
        '&:hover': { opacity: 0.8 },
      }}
    >
      {text}
    </Box>
  );
};

export default Answer;
