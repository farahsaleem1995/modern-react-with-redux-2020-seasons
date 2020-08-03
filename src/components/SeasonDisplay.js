import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach.",
    iconName: "sun",
  },
  winter: {
    text: "Burr, It is chilly.",
    iconName: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  // months is zero indexed : january(1) = 0
  // April(4) => month = 3, September(9) = 8
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SaesonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season} `}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i
        className={`season-display ${season} icon-right massive ${iconName} icon`}
      />
    </div>
  );
};

export default SaesonDisplay;
