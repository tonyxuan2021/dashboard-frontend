import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductDropDownColor() {
  const [material, setMaterial] = React.useState("");

  const handleChange = (event) => {
    setMaterial(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select value={material} onChange={handleChange}>
          <MenuItem value={"white"}>white</MenuItem>
          <MenuItem value={"Black"}>Black</MenuItem>
          <MenuItem value={"Blue"}>Blue</MenuItem>
          <MenuItem value={"Pink"}>Pink</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
