import '@/styles/globals.css'
import {useEffect} from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react'
import { IranYekan } from '@/styles/fonts'
function MyApp({Component, pageProps}) {
  const [colorMode, setColorMode] = React.useState('default-theme-color');
  const [modeType, setModeType] = React.useState(null);

  useEffect(() => {
    document.documentElement.classList.add(colorMode)
  }, [colorMode])
  const handleChangeColor = (colorModeSelected) => {
    if (colorModeSelected !== colorMode) {
      document.documentElement.classList.remove(colorMode)
      localStorage.setItem('theme', colorModeSelected)
      setColorMode(colorModeSelected);
    }

  };
  const handleChangeMode = (newMode) => {
    const mode = newMode ? "dark" : "light"
    setModeType(mode)
    if (mode === "light") {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }

    localStorage.setItem('mode', mode)
  }
  React.useEffect(() => {
    if ('theme' in localStorage) {
      setColorMode(localStorage.theme)
    } else {
      setColorMode('default-theme-color')
    }
    if (localStorage.mode === 'dark' || (!('mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setModeType("dark")
    } else {
      document.documentElement.classList.remove('dark')
      setModeType("light")
    }

  }, []);

  return <Component modeType={modeType} className={`${IranYekan.className} ${colorMode} font-sans `} handleChangeMode={handleChangeMode} handleChangeColor={handleChangeColor} {...pageProps}
                    colorMode={colorMode} />
}

export default MyApp
