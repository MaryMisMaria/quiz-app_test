import React, { FC } from 'react';
// material
import { Typography } from '@mui/material';
// types
import { QuestionProps } from '../types';

const QuizHeader: FC<QuestionProps> = ({ total, question, currentIndex }) => {
  return (
    <>
      <Typography sx={{ m: 2, textAlign: 'center' }}>
        Question {currentIndex + 1} of {total}
      </Typography>
      <Typography sx={{ m: 2, textAlign: 'center' }} variant="h6">
        {question}
      </Typography>
    </>
  );
};

export default QuizHeader;
