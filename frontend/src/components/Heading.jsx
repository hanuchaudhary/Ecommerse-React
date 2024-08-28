import React from "react";

const Heading = ({ heading, subHeading }) => {
  return (
    <div>
      <h1 className="text-3xl capitalize font-semibold">{heading}</h1>
      <div className="subheading text-sm capitalize font-semibold text-zinc-400">
        {subHeading}
      </div>
    </div>
  );
};

export default Heading;
