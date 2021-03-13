import { fetchSampleData } from "../../app/api/mockApi";
import {
  asyncActionsError,
  asyncActionsFinish,
  asyncActionsStart,
} from "../../app/async/asyncReducer";
import {
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  UPDATE_EVENT,
} from "./eventConstants";
export function loadEvents() {
  return async function (dispatch) {
    dispatch(asyncActionsStart());
    try {
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENTS, payload: events });
      dispatch(asyncActionsFinish());
    } catch (error) {
      dispatch(asyncActionsError(error));
    }
  };
}
export function createEvent(event) {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
}
