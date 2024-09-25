import React, { useEffect,useState } from 'react'
import './display.css'
import Listitem from '../Listitem/Listitem.jsx'

const Display = (props) => {
  const [isdata, setisdata] = useState(true);
  useEffect(()=>{
    if(props.data.lenght!=0){
      if(isdata==true){
      setisdata((prev)=>!prev);
    }
    }else{
      setisdata((prev)=>prev);
    }

  },[props.data]);
  
  return (
    <div id="display_container">
        <div id="itemholder">
        {props.data.map((ele,index)=>{
          
          return (
            <>
          {ele!=undefined?<Listitem key={index} index={index} data={ele} arr={props.data} setdata={props.setdata}/>:""}
        
        </>
          );
        })}
        <h4>{isdata?"No Task To Do":""}</h4>
        {/* need to edit it after onwards */}
        </div>
    </div>
  )
}

// Display.defaultProps={
//   data:[]
// }

export default Display