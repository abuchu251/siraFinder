import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 20px;
  display: flex;
  justify-self: center;
  padding: ${(props) => props.padding || "10px 80px"};
  border: 2px ${(props) => props.size || "var(--primary-base)"} solid;
  background-color: ${(props) =>
    props.backgroundColor || "var(--primary-shade)"};
  border-radius: 6px;
  color: ${(props) => props.color || "var(--primary-base)"};
  align-items: center;
  ${(props) => props.styler}
  &:hover {
    background-color: ${(props) => props.backColor || "var(--primary-shade)"};
    border: var(--primary-shade);
    color: var(--white);
  }
`;
function Button({ children, ...rest }) {
  console.log({ rest });
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
