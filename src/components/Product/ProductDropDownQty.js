import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductDropDownQty() {
  const [material, setMaterial] = React.useState("");

  const handleChange = (event) => {
    setMaterial(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select value={material} onChange={handleChange}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
