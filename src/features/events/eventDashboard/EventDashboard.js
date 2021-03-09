import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useSelector } from "react-redux";
export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  /*function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleUpdateEvent(updateEvent) {
    setEvents(
      events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
    );
    selectEvent(null);
  }
*/
  function handleDeleteEvent(eventId) {
    //setEvents(events.filter((evt) => evt.id !== eventId));
  }
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>EventFilters</h2>
      </Grid.Column>
    </Grid>
  );
}
