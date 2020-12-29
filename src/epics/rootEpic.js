import { ofType, combineEpics } from "redux-observable";
import { ajax } from "rxjs/ajax";
import {
  switchMap,
  map,
  startWith,
  debounceTime,
  catchError,
} from "rxjs/operators";
import { from, of } from "rxjs";
import {
  SET_SEARCH_VALUE,
  GET_USERS,
  START_LOADING,
} from "../constants/constants";

const fetchUsersEpic = (action$) =>
  action$.pipe(
    ofType(SET_SEARCH_VALUE),
    debounceTime(500),
    switchMap((action) =>
      from(
        ajax.getJSON(
          `https://api.github.com/search/users?q=${
            action.payload === "" ? "''" : action.payload
          }`
        )
      ).pipe(
        map((response) => ({
          type: GET_USERS,
          payload: response.items,
        })),
        catchError((error) => {
          console.log("error: ", error);
          return of(error);
        }),
        startWith({ type: START_LOADING })
      )
    )
  );

export const rootEpic = combineEpics(fetchUsersEpic);
