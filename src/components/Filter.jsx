import React from "react";
import "../App.css";
import { Button } from "@mui/material";

function Filter(props) {
  return (
    <>
      <div className="filter-btns">
        <Button
          variant="outlined"
          type="button"
          className="filter-btn"
          aria-pressed={props.isPressed}
          onClick={() => props.setFilter(props.name)}
        >
          <span>{props.name}</span>
        </Button>
    
      </div>
    </>
  );
}

export default Filter;
