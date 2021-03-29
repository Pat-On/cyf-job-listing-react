import React from "react";

const JobPostElement = (props) => {
  return (
    <div>
      {props.arrayOfJobs.map((item) => {
        return (
          <div key={item.id} className="jobOffert">
            <div className="logoContainer">
              <img src={item.logo} alt="Logo" />
            </div>
            <div className="aboutOffert">
              <h2>{item.company}</h2>
              <h3>{item.position}</h3>
              <p>{item.postedAt}</p>
              <p>{item.contract}</p>
              <p>{item.location}</p>
            </div>
            <div className="techStackInfo">
              {item.languages.map((languages) => {
                return (
                  <button
                    className="programmingLanguage"
                    key={item.id + "_" + languages}
                  >
                    {languages}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobPostElement;
