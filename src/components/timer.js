
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Timer = () => {
  var axios = require('axios');
  const navigate=useNavigate();
  const location = useLocation();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  var deadline = "December, 31, 2022";
  useEffect(() => {
    const loadData = async () => {
      var config = {
        method: 'get',
        url: `http://127.0.0.1:8000/RC/time`,
        // no header required
    };

    const time = await axios(config)
    //   .catch(function (error) {
    //       console.log(error);
    //     });
    // console.log('time', time.data.end_time)
    deadline=time.data.end_time;
    const tx = Date.parse(deadline) - Date.now();
    // console.log("time.data.end_time: ",time.data.end_time);
    // console.log("time.data.start_time: ",time.data.start_time);
    // console.log("time.now: ", new Date().toISOString() );
    console.log("tx: ",tx/1000);
    // localStorage.setItem('h',2);
    }
    loadData();
  }, [location]);


  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => {clearInterval(interval);navigate("/");};
  }, []);

  return (
    <div className="timer">
       {days}:{hours}:{minutes}:{seconds}
    </div>
  );
};

export default Timer;