import cookie from 'react-cookies'
import superagent from 'superagent';

let API = process.env.REACT_APP_API;
//https://videogame-marketplace.herokuapp.com
export const userPostFetch = userInfo => {
  return dispatch => {
    superagent
      .post(`${API}/signup`)
      .send(userInfo)
      .then(res => {
        cookie.save('token', res.headers.token);
        dispatch(loginUser({
          ...res.body,
          token: res.headers.token
        }));
      })
      .catch(err => console.error(err));
  };
};

//       
//         // localStorage.setItem();

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});
