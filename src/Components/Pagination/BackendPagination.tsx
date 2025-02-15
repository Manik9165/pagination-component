import React from "react";

const BackendPagination: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h4 style={{ fontSize: "28px", margin: "0" }}>
        Backend Pagination Component
      </h4>
      <p style={{ fontSize: "14px" }}>
        Here for each page button, we will make an API call.
      </p>
    </div>
  );
};

export default BackendPagination;
