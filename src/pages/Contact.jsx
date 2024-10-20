// import { Form } from "../components/form/Form";
import Footer from "../components/Footer";
import Form from "../components/form/Form";
// import { BackgroundLines } from "../components/ui/BackgroundLines";

const Contact = () => {
  return (
    <>
    <div id="contact-section" className="py-10 bg-neutral-950 playwrite-gb-s-regular ">
    <div className="text-center t">
  <p className="mt-4 py-1 text-lg bg-gradient-to-r from-purple-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
    If you find my work interesting
  </p>
  <h1 className="text-4xl font-bold bg-gradient-to-r py-4 from-purple-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
    Feel free to reach out!
  </h1>
</div>

    <Form />
    <Footer />
    </div>
   
      {/* <BackgroundLines>
      <div className="min-h-screen px-10 py-10 text-red-900 relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">If you find my work interesting</h1>
          <p className="mt-4 text-lg">Feel free to reach out!</p> 
         
       

        </div>
      </BackgroundLines> */}
    </>
  );
};

export default Contact;



