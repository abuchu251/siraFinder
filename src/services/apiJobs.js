export const getAllJobs = async function () {
  try {
    const res = await fetch("http://localhost:3000/jobs");
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    throw new Error(`couldn't load jobs: ${err.message}`);
  }
};
export const getJobById = async function (id) {
  const res = await fetch(`http://localhost:3000/jobs/${id}`);
  const data = await res.json();
  console.log(data);
};
getJobById("job_003");
