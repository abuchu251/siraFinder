import styled from "styled-components";

const Currency = styled.p`
  display: inline-block;
  font-size: 24px;
  color: var(--primary-base);
  font-weight: var(--weight-heading);
`;
const Price = styled.p`
  display: inline-block;
  font-size: 20px;
  font-weight: var(--weight-heading);
`;
const Month = styled.p`
  display: inline-block;
  font-weight: var(--weight-heading);
  margin-left: 10px;
  font-size: 12px;
`;

function SalaryRange({ salary }) {
  const { min, max, currency } = salary;
  const curren = currency === "USD" ? "$" : currency;
  const modifiedMin =
    min.toString().length > 3 ? min.toString().slice(0, -3) : min;
  const modifiedMax =
    max.toString().length > 3 ? max.toString().slice(0, -3) : max;

  return (
    <div>
      <Currency>{curren}</Currency>{" "}
      <Price>
        {modifiedMin}K - {modifiedMax}K
      </Price>
      <Month>/Month</Month>
    </div>
  );
}

export default SalaryRange;
