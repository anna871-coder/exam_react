import React, {useState, useEffect} from "react"
import LoadingMask from "./LoadingMask"

const Subscription = ({close, hotel}) => {
  
const [loading, setLoading] = useState(false);
const [value, setValue] = useState("");
const [response, setResponse]= useState(null);
const [showSub, setShowSub] = useState(false)

const submitForm=()=>{
  setLoading(true)
  fetch("api/hotels/subscribe", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: value, hotel: hotel})
  }).then(res=>setResponse(true))
  .catch(err=>setResponse(false))
  .finally(()=>{setTimeout(close, 5000);
           setLoading(false)})
}
return(
  <div>
    
      {response===true && <p>Subscribed</p>}
      {response=== false && <p>Oops, something happened</p>} 
    {loading && <LoadingMask/>}
      
   { !loading && !response && 
    <div>
      <button onClick={()=>setShowSub(true)}>{`Request more info about ${hotel}`}</button>
      {showSub && <div><input onChange={e=>setValue(e.target.value)}/>
        <button disabled={!(value.includes("@")&& value.includes("."))} onClick={submitForm}>Submit</button>
        </div>} </div>
          }
  </div>
)};

export default Subscription;