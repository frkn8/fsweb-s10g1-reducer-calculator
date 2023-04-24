import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  MEMORY_CLEAR,
  MEMORY_PLUS,
  MEMORY_READ,
  CLEAR_DISPLAY,
} from "./../actions";

export const initialState = {
  total: 100,
  operation: "*",
  memory: 100,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return Number(num1) + Number(num2);
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case MEMORY_PLUS:
      return { ...state, memory: state.total };

    case MEMORY_READ:
      return { ...state, total: state.memory };

    case MEMORY_CLEAR:
      return { ...state, memory: 0 };

    case CLEAR_DISPLAY:
      return { ...state, total: 0 };

    default:
      return state;
  }
};

export default reducer;