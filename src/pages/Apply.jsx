import Navbar from "../components/Navbar";
import ApplyForm from "../components/ApplyForm";
import StepNav from "../components/stepNav";
import styled from "styled-components";
const Container = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 8fr;
  gap: 1rem; */
`;
function Apply() {
  return (
    <>
      <Navbar />
      {/* <Container> */}
      {/* <StepNav /> */}
      <ApplyForm />
      {/* </Container> */}
    </>
  );
}

export default Apply;
