import { runSaga } from "redux-saga";
import { setPlanets, postLogin } from "../actions";
import { searchPlanets, doLoginAndGetData } from './index';
import { baseAPIResource } from "../utils/apiHelper";

test("should load people and login in case of valid credentials", async () => {
    const dispatchedActions = [];
    const fakeValidCredentials = {payload: {username: "luke skywalker", password: "19BBY"}};
    const mockedPeople = {data: {results:[{name: "luke skywalker", birth_year: "19BBY"}]}};

    baseAPIResource.get = jest.fn(() => Promise.resolve(mockedPeople));

    const fakeStore = {
        dispatch: action => dispatchedActions.push(action)
    };

    await runSaga(fakeStore, doLoginAndGetData, fakeValidCredentials).done;

    expect(baseAPIResource.get.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(
        postLogin(mockedPeople.data.results),
    )
});

test("should load people and alert in case of invalid credentials", async () => {
    const dispatchedActions = [];
    const fakeInValidCredentials = {payload: {username: "luke skywalker", password: "19BBY"}};
    const mockedPeople = {data: {results:[]}};

    baseAPIResource.get = jest.fn(() => Promise.resolve(mockedPeople));
    window.alert = jest.fn(() => console.log("******* alert called with invalid user ********"));

    const fakeStore = {
        dispatch: action => dispatchedActions.push(action)
    };

    await runSaga(fakeStore, doLoginAndGetData, fakeInValidCredentials).done;

    expect(baseAPIResource.get.mock.calls.length).toBe(1);
    expect(window.alert.mock.calls.length).toBe(1);

});

test("should load and set the planets in case of success", async () => {

    const dispatchedActions = [];
    const fakeParam = {payload: {param: "ald"}};
    const mockedPlanets = {data: {results:[{name:"jupoitor"}]}};

    baseAPIResource.get = jest.fn(() => Promise.resolve(mockedPlanets));

    const fakeStore = {
        dispatch: action => dispatchedActions.push(action)
    };

    await runSaga(fakeStore, searchPlanets, fakeParam).done;

    expect(baseAPIResource.get.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(
        setPlanets(mockedPlanets.data.results),
    )
    
});

test("should load and shandle the error in case of failure", async () => {

    const dispatchedActions = [];
    const fakeParam = {payload: {param: "ald"}};
    const mockedPlanets = {data: {results:[{name:"jupoitor"}]}};

    baseAPIResource.get = jest.fn(() => Promise.reject());

    const fakeStore = {
        dispatch: action => dispatchedActions.push(action)
    };

    await runSaga(fakeStore, searchPlanets, fakeParam).done;

    expect(baseAPIResource.get.mock.calls.length).toBe(1);
    expect(dispatchedActions.length).toBe(0);
    
});
