import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCourses } from '../api/newCourses';
import { Course } from '../types/Course';

type Courses = {
  courses: Course[],
  loading: boolean,
  error: string,
};

const initialState: Courses = {
  courses: [],
  loading: false,
  error: '',
};

export const init = createAsyncThunk('courses/fetch', () => {
  return getCourses();
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase(init.fulfilled, (state, action) => {
      return {
        ...state,
        courses: action.payload.courses,
        loading: false,
        error: '',
      };
    });

    builder.addCase(init.rejected, (state) => {
      return {
        ...state,
        error: 'Error',
        loading: false,
      };
    });
  },
});

export default coursesSlice.reducer;
export const { actions } = coursesSlice;
