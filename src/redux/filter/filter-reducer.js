import { createReducer } from '@reduxjs/toolkit';
import { UPDATE_FILTER } from './filter-actionTypes';

export const filter = createReducer('', {
  [UPDATE_FILTER]: (_, { payload }) => payload,
});
