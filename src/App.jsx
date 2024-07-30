import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  const red = () =>{
    setcolor("red")
  }

  const green = () =>{
    setcolor("green")
  }

  const yellow = () =>{
    setcolor("yellow")
  }

  const blue = () =>{
    setcolor("blue")
  }

  const orange = () =>{
    setcolor("orange")
  }

  return (
    
     <div className="w-screen h-screen duration-200" style={{backgroundColor:color}}>

       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-sm bg-slate-800 px-3 py-2 rounded-3xl '>
          <button onClick={red} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={green} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={yellow} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={blue} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={orange} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
        </div>
       </div>

     </div>
    
  )
}

export default App
