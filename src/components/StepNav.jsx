import styled from "styled-components";
import { NavLink } from "./Link";
const StyledUl = styled.ul`
  margin: 3rem auto;
  background-color: yellow;
`;
function StepNav() {
  return (
    <StyledUl>
      <NavLink border="border-bottom: 1px var(--primary-base) solid;">
        Personal
      </NavLink>
      <NavLink border="border-bottom: 1px var(--primary-base) solid;">
        Education
      </NavLink>
      <NavLink border="border-bottom: 1px var(--primary-base) solid;">
        Experience
      </NavLink>
      <NavLink border="border-bottom: 1px var(--primary-base) solid;">
        Skills
      </NavLink>
    </StyledUl>
  );
}

export default StepNav;
