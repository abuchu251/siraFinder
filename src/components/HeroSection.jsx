import { FiSearch } from "react-icons/fi";
import { HiChevronDown, HiOutlineSearch } from "react-icons/hi";
import styled from "styled-components";
import Navbar from "./navbar";
import HeroCardSmall from "./HeroCardSmall";
const FullHero = styled.section`
  background-color: alice#0a6f97;
  width: 100dvw;
  height: 100dvh;
  padding: 2rem 0;
`;
const Hero = styled.div`
  width: 80dvw;
  margin: 0 auto;
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const H1 = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 0.1px;
  margin-bottom: 10px;
`;
const InputWrapper = styled.div`
  padding: 9px 10px;
  height: max-content;
  border: 2px white solid;
  border-radius: 2rem;
  /* display: flex; */
  /* justify-content: space-between; */
  background-color: #fff;
  position: relative;
  display: inline-block;
  padding-right: 8rem;
`;
const Select = styled.select`
  all: unset;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 10px;
  background-color: transparent;
  border: none;
  margin: 0 0 10px 20px;
  border-right: 1px solid;
  width: 4rem;
  &:active {
    border: none;
  }
`;
const Option = styled.option`
  border: none;
`;
const Input = styled.input`
  all: unset;
  padding-left: 10px;
  padding-right: 15px;
`;
const HightlightedText = styled.span`
  color: #0a6f97;
`;
const Button = styled.button`
  width: 5rem;

  /* width: max-content; */
  color: white;
  position: absolute;
  transform: translateY(-50%);
  background-color: #0a6f97;
  right: -2px;
  top: 50%;
  padding: 10px;
  border: 0px #0a6f97 solid;
  border-radius: 9999px;

  /* background-color: alice#0a6f97; */
`;
const Image = styled.img`
  width: 40vw;
  border: 2px #fff solid;
  border-radius: 20px;
`;

function HeroSection() {
  return (
    <FullHero>
      <Navbar />
      <Hero>
        <div style={{ position: "relative" }}>
          <H1>
            Find Your <HightlightedText>Dream Job Today!</HightlightedText>
          </H1>

          <p>
            connecting Talent with Opportunity. Your Gateway to Career Suceess
          </p>
          <InputWrapper>
            {/* <Input list="country" /> */}
            <Select>
              <HiChevronDown />
              <Option value="">Please select your country</Option>
              <Option value="et">🇪🇹 ethiopia</Option>
              <Option value="india">🇮🇳 India</Option>
              <Option value="us">united states</Option>
            </Select>
            <Input placeholder="Job title, company" />
            <Button>
              <FiSearch />
              Search
            </Button>
          </InputWrapper>
          {/* <HeroCardSmall bgColor="black" /> */}
        </div>
        <div style={{ position: "relative" }}>
          <Image src="../../public/Hero.jpeg" />
          <HeroCardSmall right="-10%" top="100%" bgColor="#1d4a5c" />
        </div>
      </Hero>
    </FullHero>
  );
}

export default HeroSection;
