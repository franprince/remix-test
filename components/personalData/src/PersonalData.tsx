import React from "react";
import classnames from "classnames";

interface PersonalDataProps {
  className?: string;
  name: string;
  location: string;
  jobTitle: string;
  availability: string;
  picture?: { alt: string; src: string };
}

const PersonalData = (props: PersonalDataProps) => {
  const {
    className = "personal-data",
    name,
    location,
    jobTitle,
    availability,
    picture = {
      alt: "profile picture",
      src: "https://franprince.dev/img/445f96b7-600.webp",
    },
  } = props;

  const classes = (element: string) => classnames(`${className}__${element}`);

  return (
    <div className={classes("container")}>
      <h2 className={classes("job-title")}>{jobTitle}</h2>
      <h1 className={classes("name")}>{name}</h1>
      <img
        className={classes("profile-picture")}
        src={picture.src}
        alt={picture.alt}
      />
      <div className={classes("location")}>{location}</div>
      <p className={classes("availability")}>{availability}</p>
    </div>
  );
};

export default PersonalData;
