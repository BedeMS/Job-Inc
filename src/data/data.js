import companies from "./companies/companies";

// Loop through all the companies and get all the jobs
const jobs = [];
companies.forEach((el, i) => {
  if (el.jobs.length > 0) {
    el.jobs.forEach((job) => {
      job.company = el.name;
      job.logo = el.logo;
      job.companyId = el.id;
      jobs.push(job);
    });
  }
});

// Loop through and randomly get featured jobs
const featuredJobs = [];
for (let i = 0; i < 6; i++) {
  featuredJobs.push(jobs[Math.floor(Math.random() * jobs.length)]);
}

// Loop through and randomly get featured jobs
// let featuredCompanies = [];
// for (let i = 0; i < 3; i++) {
//   if (featuredCompanies.length < 1) {
//     featuredCompanies.push(
//       companies[Math.floor(Math.random() * companies.length)]
//     );
//   } else {
//     featuredCompanies.forEach(el => {
//       let newCompany = companies[Math.floor(Math.random() * companies.length)]
//       if(newCompany === el) {
//         return
//       } else {
//         featuredCompanies.push(newCompany)
//       }
//     })
//   }
// }

export default {
  jobs,
  featuredJobs,
  featuredCompanies: companies,
  companies,
};
