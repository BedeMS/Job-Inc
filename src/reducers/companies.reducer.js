// save job, add job, edit, remove
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.map((el) => {
        if (el.name === "Job Inc") {
          el.jobs.push(action.job);
          return el;
        }
        return el;
      });
    // case "EDIT":
    //   return ;
    case "REMOVE":
      return state.map((el) =>
        el.id === action.companyId
          ? el.jobs.filter((el) => el.id !== action.id)
          : el
      );

    case "SAVE":
      const newData = state.map((el) => {
        if (el.id === action.companyId) {
          const jobs = el.jobs.map((job) =>
            job.id === action.id ? { ...job, saved: !job.saved } : job
          );

          return { ...el, jobs: jobs };
        }
        return el;
      });
      return newData;

    case "FOLLOW":
      return state.map((el) =>
        el.id === action.id ? { ...el, follow: !el.follow } : el
      );
    default:
      return state;
  }
};
