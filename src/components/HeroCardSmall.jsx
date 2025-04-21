import styled from "styled-components";

const Card = styled.div`
  width: 15rem;
  height: 40px;
  border: 2px transparent solid;
  border-radius: 1rem;
  background-color: ${(props) => props.bgColor || "#e3ebf1"};
  box-shadow: ${(props) => props.boxshadow || "0px 0px 50px 1px #e3ebf1"};
  position: absolute;
  transform: translate(-50%, -50%);
  right: ${(props) => props.right || "0px"};
  top: ${(props) => props.top || " 0"};
`;
function HeroCardSmall({ children, ...rest }) {
  return <Card {...rest}>{children}</Card>;
}

export default HeroCardSmall;
