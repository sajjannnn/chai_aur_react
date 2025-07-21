import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className ="w-full h-screen duration-200"
    style={{background : color}}    
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-14 inset-x-0 px-2">
        <div className='fixed flex flex-wrap
        justify cneter gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
        
          <button 
          onClick ={ () => setColor("red")}  // onlick m function de skte but setcolor() gives return nut setcolor don't ,for paramter
          //         ()  these braces is act as function so used with that particular index       
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{backgroundColor : "red"}}
          >Red</button>
            <button
             onClick ={ () => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white"
          style={{backgroundColor : "yellow"}}
          >yellow</button>
            <button
             onClick ={ () => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white"
          style={{backgroundColor : "green"}}
          >Green</button></div>
      </div>


    </div>
    

  )
}

export default App
