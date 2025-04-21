import { Link as link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(link)`
  margin-top: 20px;
  display: flex;
  justify-self: center;
  padding: 10px 80px;
  border: 2px ${(props) => props.size || "var(--primary-base)"} solid;
  border-radius: 6px;
  color: ${(props) => props.size || "var(--primary-base)"};
  align-items: center;
  &:hover {
    background-color: var(--primary-shade);
    border: var(--primary-shade);
    color: var(--white);
  }
`;
function Link({ children, ...rest }) {
  return <StyledLink {...rest}>{children}</StyledLink>;
}

export default Link;
