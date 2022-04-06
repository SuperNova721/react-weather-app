import React from "react";

export default function AdditionalInformation(props) {
    return (
    <div className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      {props.extraData[0]}
    </div>
    <div className="carousel-item">
      {props.extraData[1]}
    </div>
    <div className="carousel-item">
      {props.extraData[2]}
    </div>
  </div>
</div> );
};