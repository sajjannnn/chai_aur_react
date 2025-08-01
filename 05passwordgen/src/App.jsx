// import { useRef } from "react"
import { useCallback, useState , useEffect ,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [count, setCount] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  ///use ref for copy
  const passwordRef = useRef(null)

 const passwordGen = useCallback( () => { 

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="1234567890"
    if(characterAllowed) str += "~!@#$%^&*()_+{}:?><"
   
    for(let i=1; i<length; i++){
      let char = Math.floor(Math.random()*str.length) +1
      pass += str.charAt(char)
     
    }
     setPassword(pass)

    }, [length,numberAllowed,characterAllowed,setPassword] )

  const copypasswordtoclip = useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])
  
    useEffect( () => {
      passwordGen()
    } , [length,numberAllowed,characterAllowed,passwordGen])


  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md
         rounded-lg py-2 px-4 my-10 text-orange-500 bg-gray-700'>
          <h1 className='text-white text-center my-3'>Password 
            Generator</h1>
          <div className='flex shadow
          rounded-lg overflow-hidden mb-4 '>
            <input
            type='text'
            value={password}
            className='outline-none w-full py-2 px-5'
            placeholder='Generate Password'
            readOnly
            ref={passwordRef}
            />
            <button 
            onClick={copypasswordtoclip}
            className='outline-none bg-blue-700 text-white
            px-3 py-0.5 shrink-0'
            >copy</button>
            

          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type ="range"
              min ={6}
              max={100}
              value ={length}
              className='cursor-pointer'
              onChange ={(e) =>{setLength(e.target.value)}}
              />
              <label>Length: {length}</label>

            </div>
            <div className='flex itmes-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked ={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div> <div className='flex itmes-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked ={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="characterInput">Character</label>
            </div>
          </div>
         </div>
    </>
  )
}

export default App
