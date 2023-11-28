// src/components/Field/index.js
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, value, onChange, reset }) => {
  useEffect(() => {
    if (reset) {
      const input = document.querySelector(`[name=${name}]`);
      if (input) {
        input.value = '';
      }
    }
  }, [reset, name]);

  let component;

  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required
          value={value}
          onChange={onChange}
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required
          value={value}
          onChange={onChange}
        />
      );
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required
          value={value}
          onChange={onChange}
        />
      );
  }

  return (
    <div className="inputField">
      <label htmlFor={name}>{label}</label>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  reset: PropTypes.bool,
};

Field.defaultProps = {
  label: "",
  placeholder: "",
  type: FIELD_TYPES.INPUT_TEXT,
  name: "field-name",
  value: "",
  onChange: () => { },
  reset: false,
};

export default Field;
