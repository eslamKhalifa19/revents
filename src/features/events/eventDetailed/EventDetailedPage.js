import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { useDispatch, useSelector } from "react-redux";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import {
  listenToEventFromFirestore,
  listenToEventsFromFirestore,
} from "../../../app/firestore/firestoreService";
import Loading from "../../../app/layout/Loading";
export default function EventDetailedPage({ match }) {
  const dispatch = useDispatch();
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const { loading } = useSelector((state) => state.async);

  useFirestoreDoc({
    query: () => listenToEventFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEventsFromFirestore([event])),
    dep: [match.params.id, dispatch],
  });

  if (loading || !event) return <Loading content="Loading event ..." />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event?.attendees} />
      </Grid.Column>
    </Grid>
  );
}
