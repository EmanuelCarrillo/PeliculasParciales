import React, { memo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

const SelectField = (props) => {
  const valueKey = props.valueKey || "id";
  const labelKey = props.labelKey || "name";
  return (
    <FormControl fullWidth error={props.error}>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <Select
        disabled={props.disabled}
        variant={props.variant}
        value={props.value}
        defaultValue={props.defaultValue}
        id={props.id}
        label={props.label}
        onBlur={(event) =>
          props.onBlur &&
          props.onBlur({
            target: { value: event.target.value, name: props.name },
          })
        }
        onChange={(event) =>
          props.onChange &&
          props.onChange({
            target: { value: event.target.value, name: props.name },
          })
        }
      >
        {props.opciones?.length > 0 ? (
          props.opciones.map(({ ...op }, index) => {
            return (
              <MenuItem key={index} value={op[valueKey]}>
                {op[labelKey]}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem disabled={props.disabled} value="-1">
            Sin selección
          </MenuItem>
        )}
      </Select>
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  );
};

export default memo(SelectField);
