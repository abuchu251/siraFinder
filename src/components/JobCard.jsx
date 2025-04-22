import { HiBookmark, HiOutlineBookmark } from "react-icons/hi2";
import styled from "styled-components";
import Tag from "./Tag";
import SalaryRange from "./SalaryRange";
import getTimeAgo from "../utils/getTimeAgo";
import { Link } from "./Link";
import { FaImage } from "react-icons/fa";
import Apply from "../pages/Apply";

const StyledDiv = styled.div`
  width: 20rem;
  margin: 1rem;
  padding: 15px;
  background-color: var(--white);
  border: 2px aliceblue solid;
  border-radius: 1rem;
`;
const LogoConatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
const P = styled.p`
  display: inline-block;
  font-size: 12px;
  font-weight: var(--weight-heading);
`;
const H3 = styled.h3`
  display: inline-block;
  text-align: center;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
function JobCard({
  id,
  title,
  description,
  type,
  salary,
  location,
  postedDate,
}) {
  return (
    <StyledDiv>
      <HiOutlineBookmark
        size={32}
        color="var(--primary-base)"
        style={{ display: "flex", justifySelf: "flex-end" }}
      />
      {/* <img src="#" alt="company-avatar" /> */}
      <LogoConatiner>
        <FaImage size={40} />
        <div>
          <H3>{title}</H3>
          <h4>{location}</h4>
        </div>
      </LogoConatiner>

      <Tag>{type}</Tag>
      <Description>{description}</Description>
      <Flex>
        <SalaryRange salary={salary}></SalaryRange>
        <P>{getTimeAgo(postedDate)}</P>
      </Flex>
      <Link to={`/jobs/${id}/apply`} onClick={<Apply />}>
        Apply Job
      </Link>
    </StyledDiv>
  );
}

export default JobCard;
