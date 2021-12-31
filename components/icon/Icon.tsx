import classNames from "classnames";
import React from "react";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

interface IconProps {
  name: "twitter" | "linkedin" | "github";
  url: string;
  className: string;
}

const iconList = {
  twitter: <Twitter />,
  github: <Github />,
  linkedin: <LinkedIn />,
};

const Icon = ({ name, url, className }: IconProps) => {
  const classes = (element: string) => classNames(`${className}__${element}`);
  return (
    <a aria-label={name} href={url} className={className}>
      {iconList[name]}
    </a>
  );
};

export default Icon;
