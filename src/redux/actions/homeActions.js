import cookie from 'react-cookies'
import superagent from 'superagent';

let API = process.env.REACT_APP_API;
//https://videogame-marketplace.herokuapp.com
export const getHomePage = homeInfo => {
  return dispatch => {
    superagent
      .get(`https://videogame-marketplace.herokuapp.com/games`)
      .then(res => {
        dispatch(onpageload(res.body.results
        ));
      })
      .catch(err => console.error(err));
  };
};


const onpageload = homeInfo => ({
  type: 'OnPageLoad',
  payload: homeInfo,
});
