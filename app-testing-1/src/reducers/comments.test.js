import commentsReducer from './comments';
import { SAVE_COMMENT } from '../actions/actionTypes';

it('Handle actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    }
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['new comment']);
})

it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: 'SDFGD' });
    expect(newState).toEqual([]);
})