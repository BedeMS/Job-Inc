import React, { creatContext, useReducer, createContext } from "react";
import employerData, { createJobs, featuredArr } from "../data/data";
import companiesReducer from "../reducers/companies.reducer";

export const DataContext = createContext();

export function DataProvider(props) {
  const [companies, dispatch] = useReducer(
    companiesReducer,
    employerData.companies
  );
  const jobs = createJobs(companies);
  const featuredJobs = featuredArr(jobs);

  return (
    <DataContext.Provider value={{ companies, jobs, featuredJobs, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
}
