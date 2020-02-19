import { LOGIN, LOGIN_ERROR, ADDPLANETS } from "./type";
import starWarApi from "../server/starWarApi";
import history from "../utils/history";

export const login = data => {
  return (dispatch) => {
    starWarApi
      .get(`/people?search=` + data.username)
      .then(response => {
        if (response.data.count) {
          const people = response.data.results;

          const userData = people.filter(
            p => p.name === data.username && p.birth_year === data.password
          );

          if (userData.length) {
            dispatch({ type: LOGIN });
            history.push("/search");
          } else {
            dispatch({type: LOGIN_ERROR});
          }
        } else {
          dispatch({type: LOGIN_ERROR});
        }
      })
      .catch(error => console.log(error));
  };
};

export const getPlanet = data => {
  return (dispatch) => {
    starWarApi
      .get(`/planets/?search=` + data)
      .then(response => {
        dispatch({ type: ADDPLANETS, payload: response.data });
      })
      .catch(error => console.log(error));
  };
};