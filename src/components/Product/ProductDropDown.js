import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductDropDownMaterial() {
  const [material, setMaterial] = React.useState("");

  const handleChange = (event) => {
    setMaterial(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select value={material} onChange={handleChange}>
          <MenuItem value={"Aluminium"}>Aluminium</MenuItem>
          <MenuItem value={"Carbon"}>Carbon</MenuItem>
          <MenuItem value={"Steel"}>Steel</MenuItem>
          <MenuItem value={"Wood"}>Wood</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
