import React, { useReducer, createContext, useEffect, useState } from "react";
import employerData, { createJobs, featuredArr } from "../data/data";
import { reducer } from "../reducers/companies.reducer";
import useFeatured from "../hooks/useFeaturedHook";

export const DataContext = createContext();
const initCompanies = employerData.companies;
const initJobs = createJobs(employerData.companies);
const initFeatured = featuredArr(initJobs);

export function DataProvider(props) {
  const [companies, dispatch] = useReducer(reducer, initCompanies);
  const [jobs, setJobs] = useState([]);
  const [featuredJobs, setFeatured, updateFeatured] = useFeatured(initFeatured);

  useEffect(() => {
    setJobs(createJobs(companies));
  }, [companies]);

  useEffect(() => {
    updateFeatured(jobs);
  }, [jobs]);

  return (
    <DataContext.Provider value={{ companies, jobs, featuredJobs, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
}
