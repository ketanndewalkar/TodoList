import "./list.css"
import React,{useState,useRef,defaultProps} from 'react';
import { MdDelete } from "react-icons/md";

const Listitem = (props) => {
  const input = useRef(null);
  const [ticked, setticked] = useState(false);
  const handlechange = (e) =>{
    console.log(e.target.checked);
    setticked(e.target.checked);
    
  }
  
  const handledelete = () =>{
    props.setdata((prev)=>{
      const newArr = [...prev];
      delete newArr[props.index]
      return newArr;
    });
    
  }
  
  return (
    <div id="item_menu">
        <div>
          <input id="checkbox" ref={input} onChange={handlechange} type="checkbox"/>
        </div>
          <p style={ticked?{textDecoration:"line-through"}:{textDecoration:"none"}}>{props.data}</p>
        <div id="delete" onClick={handledelete}>
          <MdDelete />
        </div>
    </div>
  );
}

Listitem.defaultProps = {
  data: "default",
}

export default Listitem

