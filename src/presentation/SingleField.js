import React, { Fragment } from "react";

const SingleField = ({ label, value }) => {
  return (
    <div className="border-gray-300 border-[1px] rounded-[10px] p-[10px]">
      <p className="text-[12px]">{label.toUpperCase()}</p>
      {!Array.isArray(value) ? (
        <p>{value}</p>
      ) : (
        value.map((data, i) => (
          <Fragment key={i}>
            <span className="ml-[5px]">{data}</span> <br />
          </Fragment>
        ))
      )}
    </div>
  );
};

export default SingleField;
