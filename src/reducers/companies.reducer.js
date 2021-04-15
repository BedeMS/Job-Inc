// save job, add job, edit, remove
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.map((el) => {
        if (el.name === "Job Inc") {
          job.company = el.name;
          job.logo = el.logo;
          job.companyId = el.id;
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
      return state.map((el) =>
        el.id === action.companyId
          ? el.jobs.map((el) =>
              el.id === action.id ? { ...el, saved: !el.saved } : el
            )
          : el
      );
    case "FOLLOW":
      return state.map((el) =>
        el.id === action.id ? { ...el, follow: !el.follow } : el
      );
    default:
      return state;
  }
};
