import cuid from "cuid";
import React, { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";

export default function EventForm({ setFormOpen, setEvents, createEvent }) {
  const initialValues = {
    title: "",
    catagory: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: "Bob",
      attendees: [],
      hostPhotoURL: "/assets/user.png",
    });
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content="Create new event" />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
            name="title"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            value={values.catagory}
            onChange={(e) => handleInputChange(e)}
            name="catagory"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
            name="description"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
            name="city"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
            name="venue"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
            name="date"
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => setFormOpen(false)}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
