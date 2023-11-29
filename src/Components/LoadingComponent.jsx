import React from "react";

const LoadingComponent = () => {
  return (
    <div
      className=" my-14 mx-auto "
      style={{ width: "40%", textAlign: "center" }}
    >
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm my-1"></span>
      <span className="loading loading-ring loading-md my-2"></span>
      <span className="loading loading-ring loading-lg my-3"></span>
      <span className="loading loading-ring loading- my-2"></span>
      <span className="loading loading-ring loading-sm my-1"></span>
      <span className="loading loading-ring loading-xs"></span>
    </div>
  );
};

export default LoadingComponent;
