import { Link as link, NavLink as navlink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(link, navlink)`
  margin-top: 20px;
  display: flex;
  justify-self: center;
  padding: 10px 80px;
  ${(props) => props.border || "border: 2px var(--primary-base) solid;"}
  border-radius: 6px;
  color: ${(props) => props.color || "var(--primary-base)"};
  align-items: center;
  &:hover {
    background-color: var(--primary-shade);
    border: var(--primary-shade);
    color: var(--white);
  }

  &:active {
    scale: 1.5;
  }
`;
function Link({ children, ...rest }) {
  return <StyledLink {...rest}>{children}</StyledLink>;
}
function NavLink({ children, ...rest }) {
  return <StyledLink {...rest}>{children}</StyledLink>;
}

export { Link, NavLink };
