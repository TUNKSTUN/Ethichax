import React from 'react';


const About = () => {


  return (
    <div className='xl:flex lg:flex sm:flex-col md:flex-col h-screen w-full bg-transparent  bg-gradient-to-tl from-stone-500 to-stone-100'>
    <div className='flex xl:w-1/4 sm:p-20 w-full lg:w-1/5 xl:h-full lg:h-full bg-transparent '/>
    <div className="flex xl:w-3/4 lg:w-4/5  flex-col text-start text-stone-900 font-mono p-10 items-start justify-center">
      <h1 className='xl:text-5xl text-4xl  font-bold drop-shadow-md  tracking-widest font-Epilogue'>About:</h1><br/>
      
      <p className='text-justify xl:w-2/3 lg:w-2/3 w-full xl:text-xl font-Epilogue text-md'>Welcome to my blog, where I share my passion for networks, clouds, and Spring tech. As a tech enthusiast, I love to explore the latest trends and technologies in these fields. Here, I provide easy-to-understand articles with practical tips and tricks for both beginners and experts. From network architecture to cloud security, and from Spring boot to microservices, I cover it all. I am grateful for your visit and I hope you'll enjoy exploring the endless possibilities of the digital world with me!</p>
    </div>
    </div>
  );
};

export default About;
