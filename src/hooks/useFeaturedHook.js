import { useState } from "react";

export default (initialState) => {
  const [featured, setFeatured] = useState(initialState);

  //keep same featured jobs and update each job
  const updateFeaturedJobs = (jobs) => {
    const arr = featured.map((el) => {
      for (let i = 0; i < jobs.length; i++) {
        if (el.id === jobs[i].id) {
          return jobs[i];
        }
      }
      return el;
    });
    setFeatured(arr);
  };

  return [featured, setFeatured, updateFeaturedJobs];
};
