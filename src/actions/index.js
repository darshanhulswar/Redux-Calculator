import * as actionTypes from "./actionTypes";

function setInputs({ num, operation }) {
  return {
    type: actionTypes.SET_INPUTS,
    inputs: { num, operation },
  };
}

function clearInputs() {
  return {
    type: actionTypes.CLEAR_INPUTS,
  };
}

function evaluate() {
  return {
    type: actionTypes.EVALUATE,
  };
}

function square(value) {
  return {
    type: actionTypes.SQUARE,
    value: value,
  };
}

function abs(value) {
  return {
    type: actionTypes.ABSOLUTE,
    value: value,
  };
}

function sqrt(value) {
  return {
    type: actionTypes.SQUARE_ROOT,
    value: value,
  };
}

function sin(value) {
  return {
    type: actionTypes.SIN,
    value: value,
  };
}

function cos(value) {
  return {
    type: actionTypes.COS,
    value: value,
  };
}

function tan(value) {
  return {
    type: actionTypes.TAN,
    value: value,
  };
}

export { setInputs, clearInputs, evaluate, square, sqrt, abs, sin, cos, tan };
