import classNames from "classnames";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

interface IconProps {
  name: Extract<keyof IconsList, string>;
  url: string;
  className?: string;
  variable?: "dark" | "light";
}

type IconsList = {
  twitter: JSX.Element;
  github: JSX.Element;
  linkedin: JSX.Element;
}

const iconList: IconsList = {
  twitter: <Twitter />,
  github: <Github />,
  linkedin: <LinkedIn />,
};

const Icon = ({ name, url, variable = "light", className = 'icons' }: IconProps) => {
  const classes = (block: string, element: string, modifier?: string) => classNames(`${block}__${element}${modifier ? `--${modifier}` : ""}`);
  return (
    <div
      className={classNames(classes(className, "icon"), classes(className, "icon", variable))}
    >
      <a aria-label={name} href={url}>
        {iconList[name]}
      </a>
    </div>
  );
};

export default Icon;
