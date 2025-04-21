import useJobs from "./useJobs";
import JobCard from "../components/JobCard";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: calc(100dvh - 7.7rem);
  overflow: hidden;
`;
const JobsDisplay = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--white);
  overflow: auto;
`;
const Aside = styled.aside`
  height: 100%;
  background-color: yellow;
`;
function JobFind() {
  const { isLoading, error, jobs } = useJobs();
  if (isLoading) {
    return (
      <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>loading</h1>
    );
  }
  console.log(jobs);
  return (
    <Container>
      <Aside>this is mine</Aside>
      <JobsDisplay>
        {jobs.map(
          ({ title, description, type, salary, location, postedDate }) => (
            <JobCard
              title={title}
              description={description}
              type={type}
              salary={salary}
              location={location}
              postedDate={postedDate}
            />
          )
        )}
      </JobsDisplay>
    </Container>
  );
}

export default JobFind;
