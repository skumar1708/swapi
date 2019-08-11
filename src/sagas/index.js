import { put, takeLatest, all, call } from 'redux-saga/effects';
import { AppActions, postLogin, postLogout, setPlanets } from "../actions";
import { baseAPIResource } from "../utils/apiHelper";
import { createBrowserHistory } from 'history';

const newHistory = createBrowserHistory();

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
    debugger;
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
    const { param } = action.payload;
    const response = yield call(baseAPIResource.get, `planets/?search=${param}`);
    const results = response.data.results;
    yield put(setPlanets(results));
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