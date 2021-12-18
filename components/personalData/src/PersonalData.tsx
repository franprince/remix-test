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
      <div className={classes("location__container")}>
        <div className={classes("location_icon")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
          </svg>
        </div>
        <div className={classes("location__text")}>
          <p>{location}</p>
        </div>

      </div>
      <div className={classes("availability")}>
        <p>{availability}</p>
      </div>
    </div>
  );
};

export default PersonalData;
