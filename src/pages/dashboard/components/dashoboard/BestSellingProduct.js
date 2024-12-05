import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const BestSellingProduct = () => {
  const [showBy, setShowBy] = useState("");
  const [catBy, setCatBy] = useState("");
  const [brandBy, setBrandBy] = useState("");
  const [searchBy, setSearchBy] = useState("");
  
  // const handleChange = (event) => {
  //   setShowBy(event.target.value);
  //   setCatBy(event.target.value);
  //   setBrandBy(event.target.value);
  //   setSearchBy(event.target.value);
  // };
  return (
    <>
      <div className="row cardFilters mb-3">
        <div className="col-md-3">
          <h4>POR PRODUTO</h4>
          <FormControl size="small" className="w-100">
          <Select
            displayEmpty
            value={showBy}
            className="W-100"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) => setShowBy(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
        </div>
        <div className="col-md-3">
          <h4>POR CATEGORIA</h4>
          <FormControl size="small" className="w-100">
          <Select
            displayEmpty
            value={catBy}
            className="W-100"
            inputProps={{ "aria-label": "Without label" }}
            id="demo-simple-select-helper"
            onChange={(e) => setCatBy(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
        </div>

        <div className="col-md-3">
          <h4>POR MARCA</h4>
          <FormControl size="small" className="w-100">
          <Select
            displayEmpty
            value={brandBy}
            className="W-100"
            inputProps={{ "aria-label": "Without label" }}
            id="demo-simple-select-helper"
            onChange={(e) => setBrandBy(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
        </div>
        <div className="col-md-3">
          <h4>POR PREÇO</h4>
          <FormControl size="small" className="w-100">
          <Select
            displayEmpty
            value={searchBy}
            className="W-100"
            inputProps={{ "aria-label": "Without label" }}
            id="demo-simple-select-helper"
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default BestSellingProduct;
