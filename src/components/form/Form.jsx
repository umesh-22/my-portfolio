"use client";

import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { cn } from "../../lib/utils.js";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"




const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value, 
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields");
      
      // alert("Please fill all the fields!");
      return;
    }
  
    
    const publicKey = "HWShCNpVTbjaYwEhJ";
    const serviceId = "service_77zxbk6";
    const templateId = "template_y2m6p8a";
  
    emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          to_name: "Umesh",
          message: formData.message,
          to_email: formData.email,
         
        },
        publicKey 
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          toast.success("Message sent successfully");
          // alert("Message sent successfully!");
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error("Message failed to send", error.text);
          // alert("Message failed to send.");
        }
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
  
    console.log("Form submitted", formData);
    
  };
  
  // const isFormValid = formData.name && formData.email && formData.message;
  return (
    <div className="max-w-md w-full playwrite-gb-s-regular  mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-neutral-950">
      <h2 className="font-bold text-xl text-neutral-200 ">
        Connect with me
      </h2>

      <form className="my-2 x" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Name">Name</Label>
          <Input
            id="name"
            placeholder="Your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="Message"
            type="text"
            value={formData.message}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button 
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-blue-500 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>

      
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Form;
