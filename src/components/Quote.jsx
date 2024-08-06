import React, { useState } from 'react';
import Loading from './Loading';

function Quote() {

    const [category,setCategory]= useState("Happiness");

    const [quote,setQuote] =useState({});

    const [isloading,setIsloading] = useState(false);

    const generateQuote = async() => {
        setIsloading(true);
        const url ="https://api.api-ninjas.com/v1/quotes?category=" + category ;
          const res= await fetch(url,{
            method: 'GET',
            headers: {'X-Api-Key': 'yUeKQGibnL4zXBE7CA5qMQ==XublC3woIHUETPE1',
               "content-type" : "application/json"
            },
            

          });
           
          const result = await res.json();
          console.log(result);
          setQuote(result[0]);
          setIsloading(false);
    }



  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      {
         isloading?(
            <Loading/>
         ):null
      }
      
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {isloading?null: (
            quote.quote)}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {isloading?null: (
        quote.author)}
        </p>
      </div>
     
      <div className="flex justify-between p-6 pt-0">
      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="Happiness">Happiness</option>
        <option value="Failure">Failure</option>
        <option value="Education">Education</option>
      </select>
        <button  onClick={generateQuote}
          className=" bg-zinc-600 select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Generate
        </button>
      </div>
    </div>
   

  )
}

export default Quote;
