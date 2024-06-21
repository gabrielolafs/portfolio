import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Empty = () => {
  return (
    <>
      <OverlayTrigger
        placement="auto"
        overlay={
          <Tooltip id="tooltip-auto">This is additional information!</Tooltip>
        }
        flip
      >
        <p>Hover over me for info</p>
      </OverlayTrigger>
    </>
  );
};

export default Empty;
