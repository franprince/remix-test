import React from "react";
import classnames from "classnames";

interface PersonalDataProps {
  className: string;
  name: string;
  location: string;
  jobTitle: string;
}

const PersonalData = (props: PersonalDataProps) => {
  const { className, name, location } = props;
  const classes = (element: string) => classnames(`${className}--${element}`);
  return (
    <div>
      <h2 className={classes("job-title")}></h2>
      <h1 className={classes("name")}></h1>
      <img className={classes("profile-picture")} src="" alt="" />
      <div className={classes("location")}></div>
      <p className={classes("availability")}></p>
    </div>
  );
};

export default PersonalData;
