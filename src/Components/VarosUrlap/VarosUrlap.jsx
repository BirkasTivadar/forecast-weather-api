import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function VarosUrlap({ updateVaros }) {
  const [varos, setVaros] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateVaros(varos);
  };

  const handleVarosChange = (event) => {
    setVaros(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="m-5">
      <FormGroup>
        <Label for="varosInput">Város</Label>
        <Input
          type="text"
          name="varos"
          id="varosInput"
          placeholder="Város"
          value={varos}
          onChange={handleVarosChange}
        />
      </FormGroup>
      <Button type="submit">Lekérdez</Button>
    </Form>
  );
}
