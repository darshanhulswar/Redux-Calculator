import * as actionTypes from "../actions/actionTypes";

const initialState = {
  inputs: [], // Basic Inputs
  result: "",
  scientificCalculationInput: 0, // For scientific calculations like square(), sqrt(), sin(), cos(), etc...
  scientificCalculationResult: 0,
  calculationHistory: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_INPUTS:
      return {
        ...state,
        inputs: [
          ...state.inputs,
          { value: action.inputs.num, operation: action.inputs.operation },
        ],
      };

    case actionTypes.EVALUATE:
      let inputValues = state.inputs
        .map((inputObj) => `${inputObj.value}${inputObj.operation}`)
        .join("");

      const inputValuesExcludeEqual = inputValues
        .split("")
        .slice(0, inputValues.length - 1)
        .join("");

      // came up with this solution. not powerfull but 😶 ...
      const result = Number(eval(inputValuesExcludeEqual));
      const calculationHistory = `${inputValuesExcludeEqual}=${result}`;
      return {
        ...state,
        inputs: [],
        result: result,
        calculationHistory: [...state.calculationHistory, calculationHistory],
      };

    case actionTypes.CLEAR_INPUTS:
      return {
        ...state,
        inputs: [],
        result: "",
        scientificCalculationInput: 0,
        scientificCalculationResult: 0,
        calculationHistory: [],
      };

    case actionTypes.SQUARE:
      return {
        ...state,
        inputs: [],
        result: action.result,
        calculationHistory: [...state.calculationHistory, action.input],
      };

    case actionTypes.SQUARE_ROOT:
      return {
        ...state,
        result: action.result,
        calculationHistory: [
          ...state.calculationHistory,
          `${action.input} = ${action.result}`,
        ],
      };

    case actionTypes.SIN:
      return {
        ...state,
        result: action.result,
        calculationHistory: [
          ...state.calculationHistory,
          `${action.input} = ${action.result}`,
        ],
      };

    case actionTypes.COS:
      return {
        ...state,
        result: action.result,
        calculationHistory: [
          ...state.calculationHistory,
          `${action.input} = ${action.result}`,
        ],
      };

    case actionTypes.TAN:
      return {
        ...state,
        result: action.result,
        calculationHistory: [
          ...state.calculationHistory,
          `${action.input} = ${action.result}`,
        ],
      };

    default:
      return state;
  }
}

export default reducer;
