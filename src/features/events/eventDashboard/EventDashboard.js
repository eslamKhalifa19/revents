import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useDispatch, useSelector } from "react-redux";
import EventListItemPlaceholder from "./EventListPlaceholder";
import EventFilters from "./EventFilters";
import {
  dataFromSnapshot,
  getEventsFromFirestore,
} from "../../../app/firestore/firestoreService";
import { listenToEvents } from "../eventActions";
import {
  asyncActionsError,
  asyncActionsFinish,
  asyncActionsStart,
} from "../../../app/async/asyncReducer";
export default function EventDashboard() {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  useEffect(() => {
    dispatch(asyncActionsStart());
    const unsubscribe = getEventsFromFirestore({
      next: (snapshot) => {
        dispatch(
          listenToEvents(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        );
        dispatch(asyncActionsFinish());
      },
      error: (error) => dispatch(asyncActionsError(error)),
      complete: () => console.log("YOu will never see this message"),
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
