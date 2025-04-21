import styled from "styled-components";

const StyledButton = styled.button`
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
function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
