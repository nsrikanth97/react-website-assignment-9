import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "./jobsComponent";
import { useStateContext } from "../context/StateContext";
import { JobData } from "./job.data";

export function Jobs() {
  let [jobData, setJobData] = useState(JobData);
  const { loginState } = useStateContext();
  const [zipCodeArray] = useState(() => {
    const set = new Set<string>();
    JobData.forEach((item) => {
      set.add(item.zipcode);
    });
    return set;
  });
  const [stateArray] = useState(() => {
    const set = new Set<string>();
    JobData.forEach((item) => {
      set.add(item.state);
    });
    return set;
  });
  let navigate = useNavigate();
  useEffect(() => {
    if (!loginState) navigate("/login");
  });

  const zipCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const zipCode = e.currentTarget.value;
    jobData = JobData;
    setJobData(
      jobData.filter((data) => {
        return data.zipcode === zipCode;
      })
    );
  };
  const stateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const state = e.currentTarget.value;
    jobData = JobData;
    setJobData(
      jobData.filter((data) => {
        return data.state === state;
      })
    );
  };
  return (
    <div className="flex-fill">
      <h1 className="text-center">Start Your Search Now</h1>
      <div className="container-md container-fluid-sm">
        <div className="row">
          <div className="col-md-4 col-sm-3">
            <h3 className="text-secondary">Search Filters</h3>
            <div className="w-100">
              <h5>Zip code</h5>
              {Array.from(zipCodeArray).map((str) => {
                return (
                  <>
                    <div className="form-check" key={str}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={"flexRadioDefault" + str}
                        value={str}
                        onChange={zipCodeChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={"flexRadioDefault" + str}
                      >
                        {str}
                      </label>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="w-100">
              <h5>State</h5>
              {Array.from(stateArray).map((str) => {
                return (
                  <>
                    <div className="form-check" key={str}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={"flexRadioDefault" + str}
                        value={str}
                        onChange={stateChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={"flexRadioDefault" + str}
                      >
                        {str}
                      </label>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-md-8 col-sm-9 my-2">
            {jobData.map((item) => {
              return <JobCard {...item}></JobCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
