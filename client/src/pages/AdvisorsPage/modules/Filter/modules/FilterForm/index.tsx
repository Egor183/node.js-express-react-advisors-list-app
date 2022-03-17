import { Button } from "@mui/material";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import RadioGroup from "../../../../../../components/RadioGroup";
import RadioButton from "../../../../../../components/RadioGroup/modules/RadioButton";
import CheckBoxGroup from "../../../../../../components/CheckBoxGroup";
import CheckBox from "../../../../../../components/CheckBoxGroup/modules/CheckBox";

import styles from "./styles.module.css";

const FilterForm: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <Field
          name="status"
          component={RadioGroup}
          type="radio"
          label="Status"
          id="1"
        >
          <RadioButton value="both" label="Both" />
          <RadioButton value="online" label="Online" />
          <RadioButton value="offline" label="Offline" />
        </Field>
      </div>
      <div className={styles.checkBoxContainer}>
        <CheckBoxGroup label="Languages" id="2">
          <Field
            name="English"
            component={CheckBox}
            type="checkbox"
            label="English"
          />
          <Field
            name="Spanish"
            component={CheckBox}
            type="checkbox"
            label="Spanish"
          />
          <Field
            name="France"
            component={CheckBox}
            type="checkbox"
            label="France"
          />
          <Field
            name="German"
            component={CheckBox}
            type="checkbox"
            label="German"
          />
        </CheckBoxGroup>
      </div>

      <Button
        type="submit"
        startIcon={<FilterAltRoundedIcon />}
        variant="contained"
      >
        Filter
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "FilterForm",
})(FilterForm);