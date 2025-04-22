import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "./Button";
import { HiChevronDown } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  /* gap: 1rem; */
`;
const Form = styled.form`
  /* background-color: yellow; */
  width: 75%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  row-gap: 1.5rem;
  column-gap: 2.5rem;
  position: relative;
`;

const TextArea = styled.textarea`
  width: 20rem;
  max-width: 30rem;
  height: 15rem;
  margin: 0.5rem 1rem;
  font-size: 16px;
  padding: 10px 2rem;
  border: 2px var(--grey-base) solid;
  border-radius: 2.5rem;
`;

const Input = styled.input`
  all: unset;
  width: 20rem;
  height: 2.5rem;
  margin: 0.5rem 0.5rem;
  padding: 5px 1.5rem;
  border: 2px var(--grey-base) solid;
  border-radius: 2.5rem;
`;

const File = styled.input.attrs({ type: "file" })`
  border-radius: 6px;
  font-size: inherit;
  &::file-selector-button {
    padding: 0.6rem 1.2rem;
    margin: 1rem;
    border-radius: 6px;
    border: none;
    color: var(--white);
    background-color: var(--primary-base);
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--primary-shade);
    }
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 20rem;
  margin: 0.5rem 1rem;
`;

const Select = styled.select`
  all: unset;
  width: 100%;
  height: 2.5rem;
  padding: 5px 1rem;
  border: 2px var(--grey-base) solid;
  border-radius: 2.5rem;
  color: grey;
  background-color: white;
  appearance: none;
`;

const ChevronIcon = styled(HiChevronDown)`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: gray;
`;

const StyledError = styled.div`
  color: red;
  font-size: 0.875rem;
  height: 1.25rem;
  margin-left: 1rem;
`;

function onSubmit(data) {
  console.log(data);
}

function ApplyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { searchParams, setSearchParams } = useSearchParams();
  // const job_id =
  console.log(searchParams);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FieldGroup>
          <label htmlFor="fullName">Full Name</label>:
          <Input
            id="fullName"
            placeholder="Enter your full name"
            {...register("fullName", { required: true })}
          />
        </FieldGroup>
        <StyledError>{errors.fullName && "This field is required"}</StyledError>
      </div>

      <div>
        <FieldGroup>
          <label htmlFor="email">Email</label>:
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </FieldGroup>
        <StyledError>{errors.email && "This field is required"}</StyledError>
      </div>

      <div>
        <FieldGroup>
          <label htmlFor="dateOfBirth">Date of birth</label>:
          <Input
            id="dateOfBirth"
            type="date"
            {...register("dateOfBirth", { required: true })}
          />
        </FieldGroup>
        <StyledError>
          {errors.dateOfBirth && "This field is required"}
        </StyledError>
      </div>

      <div>
        <FieldGroup>
          <label htmlFor="nationality">Nationality</label>:
          <SelectWrapper>
            <Select
              id="nationality"
              {...register("nationality", { required: true })}
            >
              <option value="">Select</option>
              <option value="American">American</option>
              <option value="Ethiopian">Ethiopian</option>
              <option value="Canadian">Canadian</option>
              <option value="German">German</option>
              <option value="Other">Other</option>
            </Select>
            <ChevronIcon size={24} />
          </SelectWrapper>
        </FieldGroup>
        <StyledError>
          {errors.nationality && "This field is required"}
        </StyledError>
      </div>

      <div>
        <FieldGroup>
          <label htmlFor="identificationType">ID Type</label>:
          <SelectWrapper>
            <Select
              id="identificationType"
              {...register("identificationType", { required: true })}
            >
              <option value="">Select</option>
              <option value="governmentIssuedID">Government ID</option>
              <option value="drivingLicense">Driver License</option>
              <option value="passport">Passport</option>
              <option value="Other">Other</option>
            </Select>
            <ChevronIcon size={24} />
          </SelectWrapper>
        </FieldGroup>
        <StyledError>
          {errors.identificationType && "This field is required"}
        </StyledError>
      </div>

      <div>
        <FieldGroup>
          <label htmlFor="Mobile">Phone</label>:
          <Input
            id="Mobile"
            type="number"
            placeholder="Enter phone number"
            {...register("Mobile", { required: true })}
          />
        </FieldGroup>
        <StyledError>{errors.Mobile && "This field is required"}</StyledError>
      </div>

      <div>
        <label htmlFor="coverLetter">Cover Letter</label>:
        <FieldGroup style={{ gridColumn: "2" }}>
          <TextArea
            id="coverLetter"
            placeholder="Write something..."
            {...register("coverLetter", { required: true })}
          />
        </FieldGroup>
        <StyledError>
          {errors.coverLetter && "This field is required"}
        </StyledError>
      </div>

      <div>
        <FieldGroup>
          <label htmlFor="resume">Resume</label>:
          <File id="resume" {...register("resume", { required: true })} />
        </FieldGroup>
        <StyledError>{errors.resume && "This field is required"}</StyledError>
        <FieldGroup>
          <label htmlFor="idPhoto">ID Card</label>:
          <File id="idPhoto" {...register("idPhoto", { required: true })} />
        </FieldGroup>
        <StyledError>{errors.idPhoto && "This field is required"}</StyledError>
      </div>

      <Button
        styler={"position:absolute;top:90%; right:10%;"}
        color="var(--white)"
        backgroundColor="var(--primary-base)"
      >
        Apply
      </Button>
    </Form>
  );
}

export default ApplyForm;
