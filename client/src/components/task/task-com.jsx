import React, { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

const Task = ({
  task: { _id, description, completed },
  handleDelete,
  handleUpdate,
  token,
}) => {
  const [editTask, seteditTask] = useState({
    descriptionInner: description,
    completedInner: completed,
    edit: false,
  });

  const { edit, descriptionInner, completedInner } = editTask;

  const handleEditButton = () => {
    seteditTask({
      ...editTask,
      edit: !edit,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    seteditTask({ ...editTask, [name]: value });
  };

  const handleCheckBox = () => {
    seteditTask({
      ...editTask,
      completedInner: !completedInner,
    });
  };

  return (
    <div className="p-fluid p-grid">
      <div className="p-field p-col p-lg-9 p-md-7 p-sm-5">
        <InputText
          value={descriptionInner}
          name="descriptionInner"
          onChange={handleChange}
          readOnly={!edit}
          style={{
            border: edit ? "" : "none",
            fontWeight: "bold",
            fontSize: "1.3em",
          }}
        />
      </div>
      <div className="p-col p-lg-1 p-md-1 p-sm-1">
        <Checkbox
          inputId="binary"
          style={{
            marginTop: "5px",
          }}
          checked={completedInner}
          onChange={handleCheckBox}
          readOnly={!edit}
        />
      </div>
      <div className="p-col p-lg-1 p-md-2 p-sm-2">
        <Button
          icon="pi pi-pencil"
          value={_id}
          onClick={() => handleEditButton(_id)}
          label={edit ? "Discard" : "Edit"}
          className="p-button p-button-info"
          iconPos="right"
        />
      </div>
      <div className="p-col p-lg-1 p-md-2 p-sm-2">
        {edit ? (
          <Button
            label="Done"
            value={_id}
            icon="pi pi-check"
            onClick={() => {
              handleUpdate(descriptionInner, completedInner, _id, token);
              seteditTask({
                ...editTask,
                edit: !edit,
              });
            }}
            iconPos="right"
          />
        ) : (
          <Button
            icon="pi pi-times"
            value={_id}
            onClick={() => handleDelete(_id)}
            label="Delete"
            className="p-button p-button-danger"
            iconPos="right"
          />
        )}
      </div>
    </div>
  );
};

export default Task;
