import React, { useState } from "react";
import style from "./home.module.css";

const CalendarPicker = () => {
  const [value, onChange] = useState();
  console.log("date", value);
  return (
    <div>
      <input
        className={style.dateTime}
        type="date"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default CalendarPicker;
