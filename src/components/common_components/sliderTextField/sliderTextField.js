import React from "react";
import Button from "@mui/material/Button";

const SliderTextField = ({ data }) => {
  return (
    <div className="sliderTextField">
      <input type="text" placeholder="Your email address" />
      <Button className="bg-theme">{data}</Button>
    </div>
  );
};

export default SliderTextField;
