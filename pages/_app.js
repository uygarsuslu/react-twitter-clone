import React, { useEffect, useLayoutEffect, useState } from 'react'

import '../styles/app.css'

import StoreContext from '../store'

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null)

  // virtual dom oluştuğunda çalışıyor
  useLayoutEffect(() => {
    const theme = localStorage.getItem("THEME") || "light"
    themeSet(theme)
  }, [])

  const changeTheme = theme => {
    themeSet(theme)
    localStorage.setItem("THEME", theme)
  }

  // sayfanın tamamen yüklenmesini bekliyor sonrasında çalışıyor
  useEffect(() => {
    if (!theme) return
    const $html = document.querySelector("html")
    $html.classList.remove("light")
    $html.classList.remove("dim")
    $html.classList.remove("dark")
    $html.classList.add(theme.toString())
  }, [theme])
  
  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}