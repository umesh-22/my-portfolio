

const Footer = () => {
  return (
    <div className="text-white flex justify-between p-1 md:px-10 mt-10" >

<div className="flex cursor-pointer text-md md:text-xl">
<div className="flex space-x-4">
  <a
    href="mailto:your-uyadhav7@gmail.com?subject=Hiring Inquiry&body=Hello,%20I%20am%20interested%20in%20hiring%20you." 
   
    rel="noopener noreferrer"
    className="px-2 hover:text-blue-500 hover:dark:text-blue-500"
  >
    Hire Me
  </a>

  <a
    href="https://linkedin.com/in/umeshomprakash/" 
    target="_blank"
    rel="noopener noreferrer"
    className="px-2 hover:text-blue-500 hover:dark:text-blue-500"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/umesh-22" 
    target="_blank"
    rel="noopener noreferrer"
    className="px-2 hover:text-blue-500 hover:dark:text-blue-500"
  >
    GitHub
  </a>
</div>

</div>
<div className="flex cursor-pointer">

    <div className="">
    <p className="italianno-regular text-3xl md:text-4xl text-center text-blue-500 dark:text-blue-500">Umesh.</p>
    <p className="text-xs">All Rights Reserved</p>
    </div>
</div>

    </div>
  )
}

export default Footer