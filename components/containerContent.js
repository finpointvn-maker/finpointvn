import Container from "./container";

export default function ContainerContent(props) {
  return <Container className="px-5">{props.children}</Container>;
}
