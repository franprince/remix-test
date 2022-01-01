import classNames from "classnames";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

interface IconProps {
  name: "twitter" | "linkedin" | "github";
  url: string;
  className?: string;
  variable: "dark" | "light";
}

const iconList = {
  twitter: <Twitter />,
  github: <Github />,
  linkedin: <LinkedIn />,
};

const Icon = ({ name, url, variable = "light", className = 'icons' }: IconProps) => {
  const classes = (block: string, element: string, modifier?: string) => classNames(`${block}__${element}${modifier ? `--${modifier}` : ""}`);
  return (
    <div
      className={
        classes(className, "icon") +
        " " +
        classes(className, "icon", variable)
      }
    >
      <a aria-label={name} href={url}>
        {iconList[name]}
      </a>
    </div>
  );
};

export default Icon;
