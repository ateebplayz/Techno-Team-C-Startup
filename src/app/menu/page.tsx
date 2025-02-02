"use client";
import React, {useEffect, useRef} from 'react';
import '../globals.css';
import { motion } from 'framer-motion';
import {RiArrowLeftCircleFill, RiArrowUpCircleFill} from 'react-icons/ri'
import { useRouter } from 'next/navigation'

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter()

  const statements: {
    col_1: Array<string>;
    col_2: Array<string>;
    col_3: Array<string>;
    col_4: Array<string>;
  } = {
    col_1: ['Fast Transportation', 'Ease of usage and carriage', 'Simple to use', 'Safety First', 'Eco Friendly', 'Noise-Free', 'Futuristic aesthetic'],
    col_2: ['Speeds upto 120km/h.', 'Made to be compact and anywhere.', 'One button for All.', 'Magnetic Safety Bands.', 'Electric Based Components.', 'Low Moving Parts.', 'Sleek Design and Colors.'],
    col_3: ['Used in Emergency Transportation', 'Digital Statistics', 'Connectivity', 'Collision Prevention'],
    col_4: ['Constant Monitoring', 'Cheap to Operate', 'Ease of Access', 'Emergency Control', 'Position Detection Sensors']
  }
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 4000)
  }, [])
  return (
    <div className="flex justify-center w-full flex-col font-main overflow-y-auto text-white">
      <div
        className={'fixed bottom-12 flex-col left-12 flex justify-center items-center rounded-full'}
      >
        <div
          onClick={() => {
            topRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={'transition duration-500 hover:scale-110 cursor-pointer active:scale-90 flex justify-center items-center flex-col bg-foreground rounded-full w-[64px] h-[64px]'}
        >
          <RiArrowUpCircleFill size={32} className={'font-bold'}/>
        </div>
        <div
          onClick={() => {
            router.push('/')
          }}
          className={'transition duration-500 hover:scale-110 cursor-pointer active:scale-90 flex justify-center items-center mt-4 flex-col bg-foreground rounded-full w-[64px] h-[64px]'}
        >
          <RiArrowLeftCircleFill size={32} className={'font-bold'}/>
        </div>
      </div>
      <div ref={topRef}/>
      <div className={'flex flex-row h-screen w-full'}>
        <div className={'flex flex-col p-24 pr-0 justify-start items-start w-5/12'}>
          {statements.col_1.map((statement, index) => (
            <motion.h1
              className={'text-9xl text-white mt-12'}
              key={index}
              initial={{translateX: '-150%', opacity: '0%'}}
              animate={{translateX: '0%', opacity: '100%'}}
              transition={{duration: 2, delay: 0.3 * index}}
            >
              {statement}
            </motion.h1>
          ))}
        </div>
        <div className={'flex flex-col p-24 pl-0 justify-start items-start w-7/12'}>
          {statements.col_2.map((statement, index) => (
            <motion.h1
              className={'text-9xl w-full text-end text-foreground mt-12'}
              key={index}
              initial={{translateX: '150%', opacity: '0%'}}
              animate={{translateX: '0%', opacity: '100%'}}
              transition={{duration: 2, delay: 0.3 * index}}
            >
              {statement}
            </motion.h1>
          ))}
        </div>
      </div>
      <div ref={scrollRef}/>
      <div className={'flex flex-row w-full justify-center items-stretch text-white'}>
        <motion.div
          initial={{opacity: '0%'}}
          animate={{opacity: '100%'}}
          transition={{duration: 2, delay: 5}}
          className={'flex flex-col p-24 pb-0 pr-0 justify-start items-start w-7/12'}
        >
          <h1 className={'text-9xl'}>Introducing <span className={'text-foreground'}>MIK</span> AI.</h1>
          <h1 className={'text-7xl'}>The <span className={'text-foreground'}>Future</span> Of Transportation.</h1>
          <p className={'text-5xl mt-8'}>
            <span className={'text-foreground'}>MIK</span> (Mobile Intelligence Kernel) is an advanced <span
            className={'text-foreground'}>AI</span> system designed to <span
            className={'text-foreground'}>control</span> the hover hoverboard, enabling <span
            className={'text-foreground'}>precise</span>, <span
            className={'text-foreground'}>real-time</span> adjustments based on the user’s <span
            className={'text-foreground'}>position</span>. It ensures <span
            className={'text-foreground'}>smooth</span>, <span
            className={'text-foreground'}>responsive</span> navigation by <span
            className={'text-foreground'}>constantly</span> analyzing movement <span
            className={'text-foreground'}>patterns</span> and optimizing <span
            className={'text-foreground'}>balance</span>, <span className={'text-foreground'}>speed</span>, and <span
            className={'text-foreground'}>stability</span> in mid-air. This allows users to experience effortless
            control with minimal input.<br/><br/>

            Beyond <span className={'text-foreground'}>individual</span> control, <span
            className={'text-foreground'}>MIK</span> facilitates <span
            className={'text-foreground'}>seamless</span> communication between <span
            className={'text-foreground'}>multiple</span> hoverboards. This <span
            className={'text-foreground'}>networked</span> intelligence enhances safety by preventing <span
            className={'text-foreground'}>collisions</span>, coordinating group <span
            className={'text-foreground'}>movements</span>, and optimizing <span className={'text-foreground'}>traffic flow</span> in
            crowded spaces. Its <span className={'text-foreground'}>adaptive</span> algorithms make hoverboarding not
            just <span className={'text-foreground'}>efficient</span> but also highly <span
            className={'text-foreground'}>intuitive</span>.<br/><br/>

            <span className={'text-foreground'}>MIK</span>: The <span className={'text-foreground'}>brain</span> behind
            the<span className={'text-foreground'}> hover</span>.
          </p>
        </motion.div>
        <div className={'flex flex-col p-24 pb-0 pl-0 justify-center items-center w-5/12'}>
          {statements.col_3.map((statement, index) => (
            <motion.h1
              className={'text-9xl w-full text-end text-foreground mt-12'}
              key={index}
              initial={{translateX: '150%', opacity: '0%'}}
              animate={{translateX: '0%', opacity: '100%'}}
              transition={{duration: 2, delay: (0.3 * index) + 4}}
            >
              {statement}.
            </motion.h1>
          ))}
        </div>
      </div>
      <div className={'flex flex-row  items-stretch justify-center w-full text-foreground'}>
        <div className={'flex flex-col p-24 pt-0 pr-0 justify-start items-start w-5/12'}>
          {statements.col_4.map((statement, index) => (
            <motion.h1
              className={'text-9xl w-full text-start text-white mt-12'}
              key={index}
              initial={{translateX: '-150%', opacity: '0%'}}
              animate={{translateX: '0%', opacity: '100%'}}
              transition={{duration: 2, delay: (0.3 * index) + 4}}
            >
              {statement}.
            </motion.h1>
          ))}
        </div>
        <motion.div
          initial={{opacity: '0%'}}
          animate={{opacity: '100%'}}
          transition={{duration: 2, delay: 5}}
          className={'flex flex-col p-24 pl-0 justify-center items-start w-7/12'}
        >
          <h1 className={'text-9xl w-full text-end'}>Safety <span className={'text-white'}>Refined</span>.</h1>
          <h1 className={'text-7xl w-full text-end'}>Advanced <span className={'text-white'}>Features</span> for <span
            className={'text-white'}>Ultimate</span> Protection.</h1>
          <p className={'text-5xl mt-8 w-full text-end'}>
            The <span className={'text-white'}>hover</span> hoverboard is equipped with <span className={'text-white'}>cutting-edge safety technologies</span> to
            ensure a <span className={'text-white'}>secure</span> ride at all times.
            <span className={'text-white'}>Magnetic</span> safety bands automatically <span
            className={'text-white'}>adjust</span> to the <span className={'text-white'}>rider’s</span> posture,
            providing <span className={'text-white'}>stability</span> even during <span
            className={'text-white'}>sudden</span>
            movements. The board’s <span className={'text-white'}>adaptive</span> balance system <span
            className={'text-white'}>constantly</span> monitors <span className={'text-white'}>terrain</span> and <span
            className={'text-white'}>wind</span> conditions, making
            <span className={'text-white'}>real-time</span> adjustments to prevent <span
            className={'text-white'}>tipping</span> or <span className={'text-white'}>loss of control</span>.<br/><br/>

            Integrated <span className={'text-white'}>collision</span> detection <span
            className={'text-white'}>sensors</span> work alongside <span className={'text-white'}>MIK</span>,
            predicting <span className={'text-white'}>obstacles</span> and <span
            className={'text-white'}>adjusting</span> the
            hoverboard’s path to <span className={'text-white'}>avoid accidents</span>. Emergency <span
            className={'text-white'}>auto-stabilizers</span> activate during <span
            className={'text-white'}>critical</span> situations,
            keeping the rider safe in unexpected scenarios.<br/><br/>

            Built to <span className={'text-white'}>protect</span>, designed for <span
            className={'text-white'}>confidence</span>.
          </p>
        </motion.div>
      </div>
      <div className={'w-full px-24 mt-12 mb-12 flex flex-row items-stretch justify-center'}>
        <div className={'w-5/12 flex flex-col justify-center items-center'}>
          <h1 className={'text-white w-full text-start text-8xl'}>Methods of <span
            className={'text-foreground'}>Communication</span></h1>
          <h1 className={'text-white w-full text-start text-6xl'}>3 Methods of Hover Hoverboard <span
            className={'text-foreground'}>Communication</span></h1>
        </div>
        <div className={'w-7/12 flex flex-col justify-center items-center'}>
          <div className={'w-full flex flex-col justify-end items-end pb-8 relative'}>
            <h1 className={'w-full text-end text-5xl'}>Method <span className={'text-foreground'}>One</span></h1>
            <h1 className={'w-full text-end text-7xl'}><span className={'text-foreground'}>Public</span> WiFi Networks
            </h1>
            <h1 className={'w-full text-end text-4xl'}>The first method of communication a hover hoverboard&lsquo;s MIK
              AI attempts is connecting to the nearest public WiFi&lsquo;s including the Starlink Network.</h1>
            <div className={'w-[32px] h-[32px] bg-foreground rounded absolute left-0 bottom-[-7%]'}/>
          </div>
          <div className={'w-full flex flex-col justify-end items-end border-y-[2px] border-y-foreground py-8'}>
            <h1 className={'w-full text-end text-5xl'}>Method <span className={'text-foreground'}>Two</span></h1>
            <h1 className={'w-full text-end text-7xl'}><span className={'text-foreground'}>Private</span> WiFi Networks
            </h1>
            <h1 className={'w-full text-end text-4xl'}>The user can choose to connect his own WiFi network to
              communicate with other hover hoverboards on the network. This is not recommended and should be rarely
              used.</h1>
          </div>
          <div className={'w-full flex flex-col justify-end items-end pt-8 relative'}>
            <div className={'w-[32px] h-[32px] bg-foreground rounded absolute left-0 top-[-7%]'}/>
            <h1 className={'w-full text-end text-5xl'}>Method <span className={'text-foreground'}>Three</span></h1>
            <h1 className={'w-full text-end text-7xl'}>The <span className={'text-foreground'}>Hover</span>Network
            </h1>
            <h1 className={'w-full text-end text-4xl'}>Each hover hoverboard always is connected to the main network of
              other hover hoverboard&lsquo;s. Primarily due to safety reasons this option can not be turned off or
              changed</h1>
          </div>
        </div>
      </div>
      <div className={'w-full px-24 mt-12 mb-12 flex flex-col items-center justify-center'}>
        <h1 className={'text-9xl'}>A <span className={'text-foreground'}>Video</span> Teaser.</h1>
        <video
          src={'https://amplyfy.ai/teaser.mp4'}
          height={2304}
          width={4096}
          controls={true}
          className={'border-[2px] w-full mt-8 focus:outline-none shadow-2xl h-auto border-foreground rounded-xl'}/>
      </div>
      <div className={'w-full px-24 mt-8 mb-12 min-h-[90vh] flex flex-row items-stretch justify-center'}>
        <div className={'w-7/12 flex flex-col justify-center items-center'}>
          <div className={'w-full flex flex-row mt-4 justify-center items-center'}>
            <input
              placeholder={'Full Name'}
              type="text"
              className={'w-1/2 mr-2 border-[1px] border-foreground rounded p-4 text-2xl placeholder-white focus:outline-none'}/>
            <input
              placeholder={'Email'}
              type="text"
              className={'w-1/2 ml-2 border-[1px] border-foreground rounded p-4 text-2xl placeholder-white focus:outline-none'}/>
          </div>
          <div className={'w-full flex flex-row mt-4 justify-center items-center'}>
            <input
              placeholder={'Primary Phone Number'}
              type="text"
              className={'w-1/2 mr-2 border-[1px] border-foreground rounded p-4 text-2xl placeholder-white focus:outline-none'}/>
            <input
              placeholder={'Secondary Phone Number'}
              type="text"
              className={'w-1/2 ml-2 border-[1px] border-foreground rounded p-4 text-2xl placeholder-white focus:outline-none'}/>
          </div>
          <div className={'w-full flex flex-row mt-4 justify-center items-center'}>
            <textarea
              placeholder={'Address'}
              className={'w-full h-48 border-[1px] border-foreground rounded p-4 text-2xl placeholder-white focus:outline-none'}/>
          </div>
          <div className={'w-full flex flex-row mt-4 justify-center items-center'}>
            <textarea
              placeholder={'Additional Comments (Medical History, Disablitity Etc.)'}
              className={'w-full h-48 border-[1px] border-foreground rounded p-4 text-2xl placeholder-white focus:outline-none'}/>
          </div>
          <div className={'w-full flex flex-row mt-4 justify-center items-center'}>
            <input
              placeholder={'How did you find us?'}
              type="text"
              className={'w-full border-[1px] border-foreground rounded p-4 text-2xl placeholder-white focus:outline-none'}/>
          </div>
        </div>
        <div className={'w-5/12 flex flex-col justify-center items-center'}>
          <h1 className={'text-white w-full text-center text-9xl'}>Pre-Order <span
            className={'text-foreground'}>Today</span></h1>
          <h1 className={'text-white w-full text-center text-7xl'}>Starting at $<span
            className={'text-foreground'}>2,499</span></h1>
          <button
            className={'px-32 mt-4 border-[1px] border-foreground rounded p-4 text-2xl text-white focus:outline-none bg-foreground transition duration-500 hover:opacity-50 active:scale-90'}>
            Submit Order
          </button>
          <p className={'text-white w-full text-center mt-4 text-xl'}>By clicking Submit Order you accept our <span
            className={'text-foreground'}>Terms of Services</span>.</p>
        </div>
      </div>
      <div className={'w-full px-24 min-h-[10vh] mt-12 mb-12 flex flex-col relative items-end justify-end'}>
        <h1 className={'text-[8rem] mb-0 w-full text-center'}>The <span
          className={'text-foreground text-[12rem]'}>Hover</span> Hoverboard.</h1>
        <p className={'text-2xl text-white mt-0 w-full text-center'}>Copyright CC 2025. ISL RR TEAM C. MADE BY ATEEB
          SOHAIL AND MARRIUM IJAZ KHAN. amnajunaid420@gmail.com</p>
      </div>
    </div>
  );
}