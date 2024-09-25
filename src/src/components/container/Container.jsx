import React,{useState,useEffect} from 'react'
import './container.css';
import Input from '../input/Input.jsx';
import Display from '../Display/Display.jsx'

const Container = () => {
  const [data,setdata] = useState([]);
  useEffect(()=>{
    console.log(data,"done containner");
  },[data]);

  return (<>
    <div id="con">
    <h1>TODO List</h1>
      <Input data={data} setdata={setdata}/>
      <Display key={10} data={data} setdata={setdata}/>
      
    </div>
  </>
  )
}

export default Container