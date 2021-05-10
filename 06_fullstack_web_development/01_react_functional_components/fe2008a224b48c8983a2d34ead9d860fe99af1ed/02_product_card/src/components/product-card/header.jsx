import React from "react";

const CardHeader = (props) => {
  return (
    <>
      <p>{props.names}</p>
      {props.platforms.map((logo, index) => {
        return <img key={index} src={logo.platform_logo.url} />;
      })}
      {props.addate}
    </>
  );
};

export default CardHeader;
