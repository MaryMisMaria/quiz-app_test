export interface AnswerProps {
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  onClick: () => void;
}

export interface ProgressIndicatorProps {
  answers: { isCorrect: boolean | null }[];
  totalQuestions: number;
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface QuestionProps {
  question: string;
  currentIndex: number;
  total: number;
}
