import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '@my-workspace/ui-waterpark';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});