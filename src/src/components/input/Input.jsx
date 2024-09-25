import React,{useRef,useState} from 'react'
import './input.css'

const Input = (props) => {
  const [input_value, setinput_value] = useState("");
  const input = useRef(null);
  const handlechange = (e) => {
    setinput_value(e.target.value);
  }
  const handleclick=()=>{

    console.log(input.current.value);
    
  
    props.setdata((prevdata)=>{return [...prevdata,input.current.value];});
    setinput_value("");
    

  }
  const handlesubmit = (event) => {
    event.preventDefault();
    handleclick();
  }
  
  return (
    <div id="input">
      <form onSubmit={handlesubmit}>
        <div id="input_holder">
          <input type="text" value={input_value} id="add" onChange={handlechange} autoComplete="off" placeholder='Give Task...' ref={input}/>
        </div>
        <div id="feat">
            <div  onClick={handleclick}>Add</div>
        </div>
      </form>
    </div>
  )
}

export default Input