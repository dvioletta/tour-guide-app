import React from "react";
import Attraction from "./Attraction";

const AttractionList = ({attractions}) => {
  if (!attractions) return null;

  const mappedAttractions = attractions.map((attraction, index) => {
    return <div className="attraction-container"> <Attraction key={index} attraction={attraction}/></div>
  })
  return (
    <div className = "attraction-list">
    {mappedAttractions}
    </div>
  )
}


export default AttractionList;
