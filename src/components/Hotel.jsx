import React from "react";
import {useState, useEffect} from "react";
import "./hotel.css"
import Subscription from "./Subscription";

const Hotel = ({name, city, stars}) => {
  const [shown, setShown] = useState(false)
  const [formShown, setFormShown] = useState(false);
  useEffect(() => {
    setTimeout(() => setFormShown(true), 10000);
  }, []);
return(
  <div className="hotels">
   <p>{name}</p>
    
    {!shown ? <button onClick={()=>setShown(true)}>Show more</button> : <div>{shown && <p>{`${city} (${stars})`}</p>}<button onClick={()=> setShown(false)}>Show less</button>
    <Subscription close={() => setFormShown(false)} hotel={name}/></div>}</div>
)
};

export default Hotel;