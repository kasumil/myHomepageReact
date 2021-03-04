import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'login/CHANGE_INPUT'; // 액션
const INITIAL_FORM = 'login/INITIAL_FORM';

export const changeInput = createAction(CHANGE_INPUT,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
); // 액션함수
export const inintialForm = createAction(INITIAL_FORM, form => form);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: ''
  },
  login: {
    username: '',
    password: '',
  }
} // 초기 값

const login = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다.
      }),
    [INITIAL_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
)

export default login;