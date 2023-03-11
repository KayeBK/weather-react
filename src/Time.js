import React from "react";

export default function Time(props) {
  return (
    <div>
      <div className="calendar">
        Last updated: {props.time} {props.calendar}
      </div>
    </div>
  );
}