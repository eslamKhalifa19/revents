import React from "react";
import { Segment, Item, Icon, List, Button, Label } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { deleteEventInFirestore } from "../../../app/firestore/firestoreService";

export default function EventListItem({ event }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              {event.isCancelled && (
                <Label
                  style={{ top: "-40px" }}
                  ribbon="right"
                  color="red"
                  content="This event has been cancelled"
                />
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {format(event.date, "MMMM d, yyyy h:mm a")}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => deleteEventInFirestore(event.id)}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
