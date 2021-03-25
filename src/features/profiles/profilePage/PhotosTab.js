import React, { useState } from "react";
import { Button, Card, Grid, Header, Tab, Image } from "semantic-ui-react";

export default function PhototsTab({ profile, isCurrentUser }) {
  const [editMode, setEditMode] = useState(false);

  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header floated="left" icon="user" content={`Photots`} />
          {isCurrentUser && (
            <Button
              onClick={() => setEditMode(!editMode)}
              floated="right"
              basic
              content={editMode ? "Cancel" : "Add Photo"}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <p>Photo widget will go here</p>
          ) : (
            <Card.Group>
              <Card>
                <Image src={"/assets/user.png"} />
                <Button.Group fluid widths={2}>
                  <Button basic color="green" content="Main" />
                  <Button basic color="red" icon="trash" />
                </Button.Group>
              </Card>
            </Card.Group>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
}
