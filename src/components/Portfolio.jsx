import React, { useEffect, useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
import vrStore from '../assets/portfolio/mern/vr-store.png'
import supportTicket from '../assets/portfolio/mern/support-ticket-app.png'
import githubFinder from '../assets/portfolio/react/github-finder.png'
import marketPlace from '../assets/portfolio/react/marketplace.png'
import cvCreater from '../assets/portfolio/react/cv-creater.png'
import feedbackApp from '../assets/portfolio/react/feedback-app.png'
import shoesStore from '../assets/portfolio/react/shoes-store.png'
import weatherApp from '../assets/portfolio/javascript/weather-app.png'
import keyCodeGenrator from '../assets/portfolio/javascript/keycode-genrator.png'
import battelShip from '../assets/portfolio/javascript/battel-ship.png'
import bookLibary from '../assets/portfolio/javascript/book-libary.png'
import rockPaperScissor from '../assets/portfolio/javascript/rock-paper-scissor-game.png'
import calculator from '../assets/portfolio/javascript/calculater.png'


const ShowProtfolio = ({portfolio}) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-20">
      <AnimatePresence>
          {portfolio.map(({ id, src, name, code, demo }) => (
              <motion.div 
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              variants = {{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
              }}
              transition={{delay: Number(id) / 10, when: "beforeChildren", staggerChildren: 0.3,}}
            className="shadow-md shadow-gray-600 rounded-lg p-1">
              <div className="text-sm text-center pb-2 text-gray-400 font-medium">{name}</div>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-48"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={demo} target='_blank' rel="noreferrer">
                  Demo
                </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target='_blank' rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </motion.div>
                     
          ))}
      </AnimatePresence>
    </div>
  )
}



const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([])
  const [styleIsAtive, setStyleIsActive] = useState('mern')

  const allPortfolios = {
     portfolioMern : [
    {
      id: 1,
      src: vrStore,
      name: 'VR-Store',
      demo: 'https://vrstore31999.herokuapp.com/',
      code: 'https://github.com/u31999/VR-Store'
    },
    {
      id: 2,
      src: supportTicket,
      name: 'Support Ticket App',
      demo: 'https://support-tickets-mern-app.herokuapp.com/',
      code: 'https://github.com/u31999/Support-Tickets-app'
    },

  ],
   portfolioReact : [
     {
      id: 1,
      src: githubFinder,
      name: 'Github Finder App',
      demo:'https://github-finder-r1btvc999-u31999.vercel.app/',
      code: 'https://github.com/u31999/github-finder'
    },
    {
      id: 2,
      src: marketPlace,
      name: 'Marketplace App',
      demo: 'https://home-marketplace-lake.vercel.app/',
      code: 'https://github.com/u31999/home-marketplace'
    },
    {
      id: 3,
      src: cvCreater,
      name: 'CV-Creater App',
      code: 'https://github.com/u31999/cv-creater',
      demo: 'https://u31999.github.io/cv-creater/'
    },
    {
      id: 4,
      src: feedbackApp,
      name: 'Feedback App',
      code: 'https://github.com/u31999/feedback-app',
      demo: 'https://imaginative-empanada-2d4182.netlify.app/'
    },
    {
      id: 5,
      src: shoesStore,
      name: 'Shoes Store',
      code: 'https://github.com/u31999/shoes-store',
      demo: 'https://u31999.github.io/shoes-store/'
    },
  ],

 portfolioVanila : [
    {
      id: 1,
      src: weatherApp,
      name: 'Weather App',
      demo: 'https://u31999.github.io/weatherApp/',
      code: 'https://github.com/u31999/weatherApp'
    },
    {
      id: 2,
      src: keyCodeGenrator,
      name: 'Keycode Genrator',
      code: 'https://github.com/u31999/keycode-genrater',
      demo: 'https://u31999.github.io/keycode-genrater/'
    },
    {
      id: 3,
      src: battelShip,
      name: 'Classic Battle-Ship Game',
      demo: 'https://u31999.github.io/classic-battel-ship-game/',
      code: 'https://github.com/u31999/classic-battel-ship-game'
    },
    {
      id: 4,
      src: bookLibary,
      name: 'Book Libary',
      demo: 'https://u31999.github.io/book-libary-2-/',
      code: 'https://github.com/u31999/book-libary-2-'
    },
    {
      id: 5,
      src: calculator,
      name: 'Basic Calculater',
      code: 'https://github.com/u31999/calculater',
      demo: 'https://u31999.github.io/calculater/'
    },
    {
      id: 6,
      src: rockPaperScissor,
      name: 'Rock-Paper-Scissor Game',
      code: 'https://github.com/u31999/ROCK-PAPER-SCISSORS',
      demo: 'https://u31999.github.io/ROCK-PAPER-SCISSORS/'
    },
  ]

  }

  const activeStyle = 'inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white'
  const notActiveStyle = 'inline-block border border-white rounded hover:border-blue-200 text-blue-500 hover:bg-gray-200 py-1 px-3'

  useEffect(()=> {
    if(portfolio.length <= 0) setPortfolio(allPortfolios.portfolioMern)
  }, [portfolio, allPortfolios.portfolioMern])

  const handleSubmit = (styleState, theNewPortofolio) => {
    
    setPortfolio(theNewPortofolio)

    if(styleState === 'mern') setStyleIsActive('mern')
    if(styleState === 'react') setStyleIsActive('react')
    if(styleState === 'vanila') setStyleIsActive('vanila')
   
  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-full pt-20"
>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>

          <ul className="flex">
            <li className="mr-3">
              <button className={styleIsAtive === 'mern' ? activeStyle : notActiveStyle}
                onClick={()=> handleSubmit('mern', allPortfolios.portfolioMern)}>
                MERN Stack</button>
            </li>
            <li className="mr-3">
              <button className={styleIsAtive === 'react' ? activeStyle : notActiveStyle}
              onClick={()=> handleSubmit('react', allPortfolios.portfolioReact)}>
              React</button>
            </li>
            <li className="mr-3">
              <button className={styleIsAtive === 'vanila' ? activeStyle : notActiveStyle}
              onClick={()=> handleSubmit('vanila', allPortfolios.portfolioVanila)}>Vanila JS</button>
            </li>
        </ul>
          
        </div> 

        <ShowProtfolio portfolio={portfolio}/>   

      </div>
    </div>
  );
};

export default Portfolio;
