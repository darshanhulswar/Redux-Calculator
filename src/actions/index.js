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
    result: value * value,
    input: `${value}^${2} = ${value * value}`,
  };
}

function abs(value) {
  return {
    type: actionTypes.ABSOLUTE,
  };
}

function sqrt(value) {
  return {
    type: actionTypes.SQUARE_ROOT,
    result: Math.sqrt(value),
    input: `√${value}`,
  };
}

function sin(value) {
  return {
    type: actionTypes.SIN,
    result: Math.sin(value),
    input: `sin(${value}) = ${Math.sin(value)}`,
  };
}

function cos(value) {
  return {
    type: actionTypes.COS,
    result: Math.cos(value),
    input: `cos(${value}) = ${Math.cos(value)}`,
  };
}

function tan(value) {
  return {
    type: actionTypes.TAN,
    result: Math.tan(value),
    input: `tan(${value}) = ${Math.tan(value)}`,
  };
}

export { setInputs, clearInputs, evaluate, square, sqrt, abs, sin, cos, tan };
