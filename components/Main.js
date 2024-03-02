import { EvervaultCardDemo } from "./EvervaultCardDemo";
import Image from 'next/image';
import ServiceSection from "./ServiceCard";
import YourComponent from "./Buttons";
import { useState, useEffect } from 'react';





export default function Main() {
  const [displayedWord, setDisplayedWord] = useState('');
  const words = ['Lectures', 'Movies', 'Courses','LMS'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const typeLetter = () => {
      setDisplayedWord(words[wordIndex].substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex <= words[wordIndex].length) {
        timeout = setTimeout(typeLetter, 300); // Change letter every 0.1 seconds
      } else {
        timeout = setTimeout(() => {
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setDisplayedWord('');
        }, 1000); // Wait for 1 second before starting the next word
      }
    };

    typeLetter();

    return () => {
      clearTimeout(timeout);
    };
  }, [wordIndex]);


  return (
    <section className="text-gray-600 body-font ">
      <div className="max-w-5xl pt-24 pb-24 mx-auto">
        <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-black mt-0 mb-6">
        Secure Video Hosting
        </h1>
        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
        Bye-Bye Piracy: Boost Revenues for <span>{displayedWord}</span>
          
        </h2>
       
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
       
      </div>
      <ServiceSection/>

      <EvervaultCardDemo/>
     <YourComponent/>
      
     
    </section>
  );
}
