import React from 'react';
import aisum from '../assets/ai-sum.png'
import crypto from '../assets/crypto-app.png'
import blog from '../assets/blog.jpeg';


const Portfolio = () => {

  const portfolio = [
      {
        id: 1,
        src: blog,
        codeUrl: 'https://github.com/Piyushsinganjude/Blog-App'
      },
      {
        id: 2,
        src: crypto,
        codeUrl: 'https://github.com/Piyushsinganjude/Cryptoinfo_App'
      },
      {
        id: 3,
        src: aisum,
        codeUrl: 'https://github.com/Piyushsinganjude/AI_Summarizer'
      },
  ]
  
  const handleClick = (codeUrl) => {
    window.open(codeUrl, "_blank");
  };
  return(
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>  
         <div  className='max w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-x-gray-500'>Portfolio</p>
                <p className='py-6'>Check out my some work here</p>
            </div>
      
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
         {
              portfolio.map(({id,src,codeUrl})=>(
                <div key={id} className='shadow-md shadow-gry-600 rounded-lg'>
                <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleClick(codeUrl)}>Code</button>
            </div>
         </div>
              ))
            }
        
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
