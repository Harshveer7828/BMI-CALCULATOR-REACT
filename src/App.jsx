import { useState } from 'react'

import './App.css'

function App() {
  let [bmi, setBmi] = useState(0);
  let [message, setMessage] = useState("");
  let [height, setHeight] = useState(0);
  let [weight, setWeight] = useState(0);

  const calculate = (e)=>{
    e.preventDefault();
    // chacks the valid input from the user
    if(height  < 1 || weight < 1 ) 
    alert("please enter the valid input for height and weight");
    // calculate the bmi of the entered value of the weight and height

    else {
      let bmi = weight / Math.pow(height*0.3048,2);
      setBmi(bmi.toFixed(1));
      //message logic to check the underweight or not
      if(bmi < 25){
        setMessage("you are under weight ! weak go Gym");
      }
      else if(bmi >= 25 && bmi < 30){
        setMessage("you are healthy ! nice")
      }
      else setMessage("You are Overweight ! Gym jao")

      
    }

  }

  //reload function for reloading
  let reload = ()=>{
    window.location.reload();
  }

  return (
    <>
      <div className="main h-screen w-screen bg-[#f6f6f6] flex items-center justify-center">
        <form onSubmit={calculate} className="min-h-[40%] w-[80%] flex items-center flex-col bg-[#262626] py-4 rounded-lg xl:w-[20vw] lg:w-[20vw] md:w-[20vw] ">
          <h1 className="text-white font-light text-4xl font-['Katibeh']">BMI CALCULATOR</h1>
          <div className="inputs flex flex-col w-[80%]">  
            <label className="text-white font-['Katibeh'] text-2xl" htmlFor="weight">Your Weight :-</label>
            <input className="border-none py-2 px-2 rounded-md outline-none" type="number" step="any" placeholder='Enter your weight' onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div className="inputs flex flex-col w-[80%]">
            <label className="text-white font-['Katibeh'] text-2xl" htmlFor="weight">Your Height :-</label>
            <input className="border-none py-2 px-2 rounded-md outline-none" type="number" step="any" placeholder='Enter your height'  onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div className="message text-center">
            <h1 className="text-3xl font-['Katibeh'] text-white">You'r BMI is {bmi}</h1>
            <h4 className="text-2xl mt-[-0.5rem] font-['Katibeh'] text-white">{message}</h4>
          </div>
          <div className="buttons mt-6 text-center flex flex-col">
            <button type="submit" className='px-3 py-1 bg-[#888888] text-white rounded-md'>Submit</button>
          </div>
         
        </form>
      </div>
    </>
  )
}

export default App
