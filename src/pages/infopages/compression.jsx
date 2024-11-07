import React from "react";
import { useEffect, useRef, useState } from "react";


const Compression = (props) => {
    const {info} = props
    const canvasRef = useRef(null);
    const audioContextRef = useRef(null);
    const gainNodeRef = useRef(null);
    const analyserRef = useRef(null);
    const compressorRef = useRef(null);
    const oscillatorRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const [attack, setAttack] = useState(0.1);
    const [decay, setDecay] = useState(0.1);
    const [sustain, setSustain] = useState(0.5);
    const [release, setRelease] = useState(0.1);
    const [gainValue, setGainValue] = useState(0.1);  // Start with low gain
  
    useEffect(() => {
      // Initialize AudioContext, gain, compressor, and analyser
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      gainNodeRef.current = audioContextRef.current.createGain();
      compressorRef.current = audioContextRef.current.createDynamicsCompressor();
      analyserRef.current = audioContextRef.current.createAnalyser();
  
      // Set up audio node connections
      gainNodeRef.current.connect(compressorRef.current);
      compressorRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
  
      // Visualization setup
      const drawWaveform = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const bufferLength = analyserRef.current.fftSize;
        const dataArray = new Uint8Array(bufferLength);
  
        const render = () => {
          analyserRef.current.getByteTimeDomainData(dataArray);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
  
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#00f';
          ctx.beginPath();
  
          dataArray.forEach((value, i) => {
            const x = (i / bufferLength) * canvas.width;
            const y = (value / 128) * (canvas.height / 2);
            ctx.lineTo(x, y);
          });
  
          ctx.stroke();
          requestAnimationFrame(render);
        };
        render();
      };
  
      drawWaveform();
  
      return () => {
        // Close audio context on cleanup
        if (audioContextRef.current) audioContextRef.current.close();
      };
    }, []);
  
    // Handle parameter changes
    useEffect(() => {
      if (gainNodeRef.current && compressorRef.current) {
        gainNodeRef.current.gain.value = gainValue;
        compressorRef.current.attack.value = attack;
        compressorRef.current.release.value = release;
        // Additional compressor settings (decay and sustain)
      }
    }, [attack, decay, sustain, release, gainValue]);
  
    const startOscillator = () => {
        if (oscillatorRef.current) return; // Prevent multiple oscillators
      
        // Create a new oscillator
        const oscillator = audioContextRef.current.createOscillator();
        oscillator.type = 'sine';
        oscillator.connect(gainNodeRef.current);
        oscillator.start();
        oscillatorRef.current = oscillator; // Store the oscillator in the ref
      };
      
      const stopOscillator = () => {
        if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
          oscillatorRef.current = null; // Clear the ref to allow a new oscillator later
        }
      };
  
    const togglePlay = () => {
      if (isPlaying) {
        stopOscillator();
      } else {
        startOscillator();
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div>
        <canvas ref={canvasRef} width="600" height="200" />
        <button onClick={togglePlay}>{isPlaying ? 'Stop' : 'Play'}</button>
        <div>
          <label>Attack</label>
          <input type="range" min="0" max="1" step="0.01" value={attack} onChange={(e) => setAttack(parseFloat(e.target.value))} />
          <label>Decay</label>
          <input type="range" min="0" max="1" step="0.01" value={decay} onChange={(e) => setDecay(parseFloat(e.target.value))} />
          <label>Sustain</label>
          <input type="range" min="0" max="1" step="0.01" value={sustain} onChange={(e) => setSustain(parseFloat(e.target.value))} />
          <label>Release</label>
          <input type="range" min="0" max="1" step="0.01" value={release} onChange={(e) => setRelease(parseFloat(e.target.value))} />
          <label>Gain</label>
          <input type="range" min="0" max="1" step="0.01" value={gainValue} onChange={(e) => setGainValue(parseFloat(e.target.value))} />
        </div>
      </div>
    );
};

export default Compression;