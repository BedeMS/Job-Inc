import companies from "./companies/companies";

// Loop through all the companies and get all the jobs
export const createJobs = (arr) => {
  const jobs = [];
  arr.forEach((el, i) => {
    if (el.jobs.length > 0) {
      el.jobs.forEach((job) => {
        job.company = el.name;
        job.logo = el.logo;
        job.companyId = el.id;
        jobs.push(job);
      });
    }
  });
  return jobs;
};

// Loop through and randomly get featured jobs
export const featuredArr = (arr) => {
  const randomArr = [];
  for (let i = 0; i < 6; i++) {
    randomArr.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return randomArr;
};

const data = {
  companies,
};

export default data;
