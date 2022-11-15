import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App({ initialTime }) {
  let hourT = useRef();
  let [hour, setHour] = useState();
  let minT = useRef();
  let [minute, setMinute] = useState();
  let secT = useRef();
  let [second, setSecond] = useState();
  console.log('runnin');

  useEffect(() => {
    let date = new Date(initialTime);
    setSecond(date.getSeconds() % 60);
    console.log('runnin');

    secT.current = setInterval(() => {
      setSecond((seconds) => (seconds + 3) % 360);
      console.log('runnin');
    }, 1000);

    hourT.current = setInterval(() => {
      setHour((hour) => (hour + 3) % 360);
      console.log('runnin');
    }, 2000);

    minT.current = setInterval(() => {
      setHour((min) => (min + 3) % 360);
      console.log('runnin');
    }, 2000);

    return () => {
      clearInterval(secT);
    };
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div id="clock">
        <div>change</div>

        <div id="hour" style={{ transform: `rotate(${hour}deg)` }}></div>
        <div id="min" style={{ transform: `rotate(${minute}deg)` }}></div>

        <div id="sec" style={{ transform: `rotate(${second}deg)` }}></div>
        <div class="item" id="i12">
          12
        </div>
        <div class="item" id="i1">
          1
        </div>
        <div class="item" id="i2">
          2
        </div>
        <div class="item" id="i3">
          3
        </div>
        <div class="item" id="i4">
          4
        </div>
        <div class="item" id="i5">
          5
        </div>
        <div class="item" id="i6">
          6
        </div>
        <div class="item" id="i7">
          7
        </div>
        <div class="item" id="i8">
          8
        </div>
        <div class="item" id="i9">
          9
        </div>
        <div class="item" id="i10">
          10
        </div>
        <div class="item" id="i11">
          11
        </div>
      </div>
    </div>
  );
}
