import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import { categoryData } from "../../../app/api/categoryOptions";
import DateInput from "../../../app/common/form/DateInput";
export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const validationScheme = Yup.object({
    title: Yup.string().required("You must provide a title"),
    category: Yup.string().required("You must provide a category"),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  return (
    <Segment clearing>
      <Formik
        validationSchema={validationScheme}
        initialValues={initialValues}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        <Form className="ui form">
          <Header sub color="teal" content="Event Details" />

          <TextInput name="title" placeholder="Event title" />
          <SelectInput
            name="category"
            placeholder="Event category"
            options={categoryData}
          />
          <TextArea name="description" placeholder="Description" rows={3} />
          <Header sub color="teal" content="Event Location Details" />

          <TextInput name="city" placeholder="City" />
          <TextInput name="venue" placeholder="Venue" />
          <DateInput
            name="date"
            placeholderText="Event date"
            timeFormat="HH:mm"
            showTimeSelect
            timeCaption="time"
            dateFormat="MMM d, yyy h:mm a"
          />

          <Button type="submit" floated="right" positive content="Submit" />
          <Button
            as={Link}
            to="/events"
            type="submit"
            floated="right"
            content="Cancel"
          />
        </Form>
      </Formik>
    </Segment>
  );
}
