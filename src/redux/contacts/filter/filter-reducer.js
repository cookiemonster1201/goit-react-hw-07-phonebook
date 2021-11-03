import { createReducer } from '@reduxjs/toolkit';
import { updateFilter } from 'redux/contacts/filter/filter-actions';

export const filter = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});
