import React, { useState } from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import EventForm from "../../features/events/eventForm/EventForm";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventDashboard} />
        <Route path="/event:id" component={EventDetailedPage} />
        <Route path="/createEvent" component={EventForm} />
      </Container>
    </>
  );
}
