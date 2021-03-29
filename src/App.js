import React from "react";

import "./App.css";

import JobPostElement from "./JobPostElement";

// DATA
import data from "./data";
console.log(data);

function App() {
  return (
    <div className="App">
      <JobPostElement arrayOfJobs={data} />
    </div>
  );
}

export default App;
