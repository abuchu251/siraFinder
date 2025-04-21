import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";
import { HiOutlineDocumentText } from "react-icons/hi2";

const Nav = styled.nav`
  margin: 2rem auto;
  width: 80%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 50px 1px #e1e5e6;
`;
const Links = styled.div`
  display: flex;
  align-self: center;
  gap: 20px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: #1d4a5c;
    font-weight: 500;
    text-decoration: underline #1d4a5c;
    text-underline-offset: 7px;
    text-decoration-thickness: 3px;
  }
  &:active {
    font-weight: 400;
    color: #1d4a5c;
  }
`;
const Button = styled.button`
  height: max-content;
  padding: 5px;
  border-radius: 10px;
  border: 2px #27548a solid;
  &:hover {
    background-color: #1d4a5c;
    color: #fff;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo />
      <Links>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/jobs">Jobs</StyledNavLink>
        <StyledNavLink>Application Tracker</StyledNavLink>
        <StyledNavLink>Interview prep</StyledNavLink>
      </Links>
      <Button>
        <HiOutlineDocumentText />
        Resume Builder
      </Button>
    </Nav>
  );
}

export default Navbar;
