import React,{useState,useEffect} from 'react'

const Screensize = () => {
    const [width,setwidth]=useState(window.innerWidth)
    const windowwidth=()=> setwidth(window.innerWidth)

    
    useEffect(()=>{
        window.addEventListener('resize',windowwidth)
    })
  return (
    <div>
      <p>your screen width is{width}</p>
    </div>
  )
}

export default Screensize
