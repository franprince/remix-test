import classnames from "classnames";
import Icon from "../icon/Icon";

interface SocialProps {
  socialNetworks: { name: "twitter" | "linkedin" | "github"; url: string }[];
  text: string;
  className: string;
}

const Social = (props: SocialProps) => {
  const { socialNetworks, text, className = "social" } = props;
  const classes = (element: string) => classnames(`${className}__${element}`);
  const isEven = (number: number) => number % 2 === 0;
  return (
    <div className={classes("container")}>
      <h4 className={classes("text")}>{text}</h4>
      <div className={classes("icons")}>
        {socialNetworks.map((platform, index) => (
          <Icon
            name={platform.name}
            url={platform.url}
            className="social"
            variable={isEven(index) ? "light" : "dark"}
          />
        ))}
      </div>
    </div>
  );
};

export default Social;
