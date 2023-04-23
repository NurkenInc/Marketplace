import React, { useState, useEffect } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const ToggleModeButton = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(true)

  const handleToggleTheme = () => setIsLightMode((isLight) => !isLight)

  
  useEffect(() => {
    const mode = isLightMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', mode)
    localStorage.theme = mode;
  }, [isLightMode])

  return (
    <button 
      className='p-3.5 rounded-[50%]'
      onClick={handleToggleTheme}  
    >
      {
        isLightMode ?
        <BsFillMoonStarsFill /> :
        <BsFillSunFill />
      }
    </button>
  )
}

export default ToggleModeButton
