import React from "react";

const JobPostElement = (props) => {
  return (
    <div style={{ marginTop: "90px" }}>
      {props.arrayOfJobs.map((item) => {
        return (
          <div key={item.id} className="jobOffert">
            <div className="logoContainer">
              <img src={item.logo} alt="Logo" />
            </div>
            <div className="aboutOffert">
              <h2 style={{ display: "inline" }}>{item.company}</h2>
              {item.new ? (
                <div
                  style={{
                    display: "inline",
                    marginLeft: "2%",
                    backgroundColor: "red",
                  }}
                >
                  NEW
                </div>
              ) : null}
              {item.featured ? (
                <div
                  style={{
                    display: "inline",
                    marginLeft: "2%",
                    backgroundColor: "grey",
                  }}
                >
                  FEATURED
                </div>
              ) : null}
              <h3>{item.position}</h3>
              <p
                style={{
                  display: "inline",
                }}
              >
                {item.postedAt}
              </p>
              <p
                style={{
                  display: "inline",
                  marginLeft: "2%",
                }}
              >
                {item.contract}
              </p>
              <p
                style={{
                  display: "inline",
                  marginLeft: "2%",
                }}
              >
                {item.location}
              </p>
            </div>
            <div className="techStackInfo">
              <button
                onClick={(e) => props.activeSearcher(e, item.role)}
                className="programmingLanguage"
              >
                {item.role}
              </button>
              <button
                onClick={(e) => props.activeSearcher(e, item.level)}
                className="programmingLanguage"
              >
                {item.level}
              </button>
              {item.languages.map((language) => {
                return (
                  <button
                    onClick={(e) => props.activeSearcher(e, language)}
                    className="programmingLanguage"
                    key={item.id + "_" + language}
                  >
                    {language}
                  </button>
                );
              })}
              {item.tools.map((tool) => {
                return (
                  <button
                    onClick={(e) => props.activeSearcher(e, tool)}
                    className="programmingLanguage"
                    key={item.id + "_" + tool}
                  >
                    {tool}
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
