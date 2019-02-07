import * as utils from "../lib/utils.js";

export const getApiData = () => async dispatch => {
  let url = "https://swapi.co/api/people/";
  const payload = await utils.get(url);
  dispatch({
    type: "GETAPI",
    payload: payload.results
  });
};

export const selectPerson = payload => ({
  type: "SELECTPERSON",
  payload
});
