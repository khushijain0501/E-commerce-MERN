import React, { useRef, useState,useEffect } from 'react'

const Countdown = ({type}) => {
    //const Ref=useRef(null);
    const [days,setDays]=useState(0);
    const [hours,setHours]=useState(0);
    const [mins,setMins]=useState(0);
    const [sec,setSec]=useState(0);
    const deadline= type==="banner" ? Date.now()+(5*1000*60*60*24 + 167635):Date.now()+(16*1000*60*60*24 + 10663275);

    const getRemaining=(e)=>{
        const time=deadline-Date.now();
        setDays(Math.floor(time/(1000*60*60*24)));
        setHours(Math.floor(time/(1000*60*60))%24);
        setMins(Math.floor(time/1000/60)%60);
        setSec(Math.floor(time/(1000))%60);
    }
    useEffect(() => {
        const interval=setInterval(()=>getRemaining(deadline),1000);
        return ()=>clearInterval(interval);
    }, []);
  return (
    <div className='flex  items-center gap-3 '>
        <div className={`flex flex-col justify-center items-center ${type==="banner"?"w-12 h-12 bg-white p-1 rounded-3xl":""}`}>
            {type==="todays" && <div className='text-xs'>Days</div>}
            <div className={`text-xl ${type==="banner"?"text-sm":""} font-bold `}>{days<10?"0"+days:days}</div>
            {type==="banner" && <div className='text-[9px]'>Days</div>}
        </div>
        <div className={`flex flex-col justify-center items-center ${type==="banner"?"w-12 h-12 bg-white p-1 rounded-3xl":""}`}>
        {type==="todays" && <div className='text-xs'>Hours</div>}
            <div className={`text-xl ${type==="banner"?"text-sm":""} font-bold`}>{hours<10?"0"+hours:hours}</div>
            {type==="banner" && <div className='text-[9px]'>Hours</div>}
        </div>
        <div className={`flex flex-col justify-center items-center ${type==="banner"?"w-12 h-12 bg-white p-1 rounded-3xl":""}`}>
        {type==="todays" && <div className='text-xs'>Minutes</div>}
            <div className={`text-xl ${type==="banner"?"text-sm":""} font-bold`}>{mins<10?"0"+mins:mins}</div>
            {type==="banner" && <div className='text-[9px]'>Mins</div>}
        </div>
        <div className={`flex flex-col justify-center items-center ${type==="banner"?"w-12 h-12 bg-white p-1 rounded-3xl":""}`}>
        {type==="todays" && <div className='text-xs'>Seconds</div>}
            <div className={`text-xl ${type==="banner"?"text-sm":""} font-bold`}>{sec<10?"0"+sec:sec}</div>
            {type==="banner" && <div className='text-[9px]'>Secs</div>}
        </div>
    </div>
  )
}

export default Countdown
