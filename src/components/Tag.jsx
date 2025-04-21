import styled from "styled-components";

const StyledTag = styled.p`
  display: inline-block;
  padding: 2.5px 2px;
  border: 2px transparent solid;
  border-radius: 10px;
  background-color: var(--grey-tint);
  color: var(--primary-shade);
  margin: 5px;
  /* font-size: 20px; */
`;

function Tag({ children }) {
  return <StyledTag>{children}</StyledTag>;
}

export default Tag;
