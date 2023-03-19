import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lesson } from '../types/Lesson';

type ActualLesson = {
  actualLesson: Lesson | null,
};

const initialState: ActualLesson = {
  actualLesson: null,
};

const actualLessonSlice = createSlice({
  name: 'actaulLesson',
  initialState,
  reducers: {
    setActualLesson: (state, action: PayloadAction<Lesson>) => {
      return {
        ...state,
        actualLesson: action.payload,
      };
    },
  },
});

export default actualLessonSlice.reducer;
export const { actions } = actualLessonSlice;
