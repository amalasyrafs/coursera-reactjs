import { act } from 'react-dom/test-utils';
import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
  switch (action.type) {
    default:
      return state;
  }
}