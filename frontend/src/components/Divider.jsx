
import React from "react";
import "./Divider.css";

function Divider({ vertical = false }) {
  const className = vertical
    ? "b-example-divider b-example-vr"
    : "b-example-divider";
  return <div className={className} role="separator" />;
}

export default Divider;
