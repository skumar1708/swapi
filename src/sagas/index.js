import { put, takeLatest, all, call, select } from 'redux-saga/effects';
import { AppActions, postLogin, postLogout, setPlanets } from "../actions";
import { baseAPIResource } from "../utils/apiHelper";


// function* fetchNews() {

//   const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
//     .then(response => response.json());

//   yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });
// }

export function* doLoginAndGetData(action) {
  try {
    const { username, password } = action.payload;
    const response = yield call(baseAPIResource.get, `people/?search=${username}`);
    const results = response.data.results;
    const userData = results.length ? results.filter(user => {
      const { name, birth_year } = user;
      return (birth_year == password) && (name.toLowerCase() == username.toLowerCase());
    }) : [];
    const isValidUser = userData.length;

    if (!isValidUser) {
      alert("Invalid credentials");
    } else {
      sessionStorage.setItem("userData", JSON.stringify(userData));
      sessionStorage.setItem("isLoggedIn", true);
      yield put(postLogin(userData));

      // yield put(newHistory.push("/planets"));
    }
  } catch (e) {
    console.log("Login error: ", e);
  }
}

function* doLogout() {
  try {
    sessionStorage.setItem("isLoggedIn", false);
    yield put(postLogout());
  } catch (e) {
    console.log("Logout error: ", e);
  }
}

export function* searchPlanets(action) {
  try {
    let searchCount = JSON.parse(sessionStorage.getItem("search-count")) || 0;
    const isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
    const lastSearch =  JSON.parse(sessionStorage.getItem("last-search"));
    let delta = ((Date.now() - lastSearch))/60000;

    debugger;
    if(!isLoggedIn && (searchCount % 15) == 0 && (delta < 1)) {
      const { history } = action.payload;
      alert("Only 15 search in a min allowed for guest user, please login or come back later.");
      history.push("/login");
    } else {
      const { param } = action.payload;
      const response = yield call(baseAPIResource.get, `planets/?search=${param}`);
      const results = response.data.results;
      yield put(setPlanets(results));
      sessionStorage.setItem("search-count", ++searchCount);
      sessionStorage.setItem("last-search", Date.now());
    }
  } catch (e) {
    console.log("Planets search API error: ", e);
  }
}

function* actionWatcher() {
  yield takeLatest(AppActions.LOGIN_CLICKED, doLoginAndGetData);
  yield takeLatest(AppActions.LOGOUT_CLICKED, doLogout);
  yield takeLatest(AppActions.GET_PLANETS, searchPlanets);
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}