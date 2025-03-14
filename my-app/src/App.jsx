import React,{useState} from "react"
import './App.css'



function App() {

  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setbmi]=useState('');
  const [message,setMessage]=useState('');


  let calcBmi =(e)=>{

    e.preventDefault();
    if(weight===0 || height ===0){
      alert("Invalid Details")
    }
    else{
      let bmi=(weight/(height*height)*703);
      setbmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("you are under Weight");
      }
      else if(bmi>= 25 && bmi<=30){
        setMessage("Your weight is perfect");
      }
      else if (bmi>30){
        setMessage("you are over weight");
      }
    }
  }
    let reload=()=>{
      window.location.reload()
}
  return (
    <>
      <div>
        <div className='Container'>
          <h2>BMI calculator</h2>
          <form onSubmit={calcBmi}>
            <div id='lbl'>
              <label> Weights (Ibs)</label>
              <input type="text" placeholder='Enter your weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div id='lbl'>
              <label> Heights (In)</label>
              <input type="text" placeholder='Enter your height' value={height} onChange={(e)=>setHeight(e.target.value)} />
            </div>
            <div>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn' onClick={reload} type='submit'>Reload</button>
            </div>

            <div className='center'>
              <h2>your bmi is : {bmi}</h2>
              <p>{message}</p>
            </div>
          </form>

        </div>



      </div>
    </>
  )
}

export default App
