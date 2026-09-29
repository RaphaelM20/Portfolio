import useReveal from "../hooks/useReveal";

function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  const classes = ["reveal", visible && "is-visible", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;
