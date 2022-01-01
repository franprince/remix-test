interface TitleProps {
  title: string;
  className?: string;
}

const Title = (props: TitleProps) => {
  const { title, className = "title" } = props;
  return <h1 className={className}>{title}</h1>;
};

export default Title;
