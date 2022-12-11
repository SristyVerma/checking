
import '../styles/globals.css'

import NavBar from '../components/navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp