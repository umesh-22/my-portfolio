import { useEffect, useState } from "react"
import Loading from "./components/Loading/Loading"
import HomePage from "./pages/HomePage"
// import { NamePage } from "./pages/Name/NamePage"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"

function App() {
  
  const [loading ,setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    
    return () => {
      clearTimeout(timer);
    };
  })
 
  return (
   <>
    {/* <HomePage />
      <Experience />
      <Skills />
      <Projects />
      <Contact /> */}
   
 
 
   {
    loading ? ( <Loading /> ): ( <>
      
      <HomePage />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>)
   }

   
  
   </>
  )
}

export default App
