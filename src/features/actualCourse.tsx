import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const actualCourseSlice = createSlice({
  name: 'actaulCourse',
  initialState: '',
  reducers: {
    setActualCourse: (actualCourse, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export default actualCourseSlice.reducer;
export const { actions } = actualCourseSlice;
