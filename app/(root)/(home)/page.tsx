'use client'

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let analyser: AnalyserNode;
    let dataArray: Uint8Array;
    let bufferLength: number;
    let animationId: number;

    function setupAudio() {
      if (!audioContext) return;

      try {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          const source = audioContext.createMediaStreamSource(stream);
          analyser = audioContext.createAnalyser();
          source.connect(analyser);
          analyser.fftSize = 256;
          bufferLength = analyser.frequencyBinCount;
          dataArray = new Uint8Array(bufferLength);

          drawVisualizer();
        });
      } catch (err) {
        console.error('Error accessing audio stream:', err);
      }
    }

    function drawVisualizer() {
      const canvas = canvasRef.current;
      const canvasCtx = canvas?.getContext('2d');

      if (!canvas || !canvasCtx) return;

      function draw() {
        analyser.getByteFrequencyData(dataArray);
        if (canvas) {
          
          const WIDTH = canvas.width;
          const HEIGHT = canvas.height;
          const centerX = WIDTH / 2;
          const centerY = HEIGHT / 2;
          const radius = 100;
          if (canvasCtx) {
            canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
            canvasCtx.beginPath();
    
            for (let i = 0; i < bufferLength; i++) {
              const angle = (i / bufferLength) * 2 * Math.PI;
              const distance = radius + dataArray[i] / 2;
              const x = centerX + distance * Math.cos(angle);
              const y = centerY + distance * Math.sin(angle);
    
              if (i === 0) {
                canvasCtx.moveTo(x, y);
              } else {
                const prevAngle = ((i - 1) / bufferLength) * 2 * Math.PI;
                const prevDistance = radius + dataArray[i - 1] / 2;
                const prevX = centerX + prevDistance * Math.cos(prevAngle);
                const prevY = centerY + prevDistance * Math.sin(prevAngle);
                canvasCtx.quadraticCurveTo(prevX, prevY, x, y);
              }
            }
    
            canvasCtx.closePath();
            canvasCtx.fillStyle = 'rgba(0, 0, 0, 0)';
            canvasCtx.fill();
            canvasCtx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            canvasCtx.stroke();
    
            animationId = requestAnimationFrame(draw);
          }
        }
        }


      draw();
    }

    setupAudio();

    return () => {
      if (audioContext) {
        audioContext.close();
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [audioContext]);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const startAudioContext = () => {
    if (!audioContext) {
      const newAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(newAudioContext);
      setIsStarted(true);
    } else {
      audioContext.resume().then(() => {
        setIsStarted(true);
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {!isStarted && (
        <button
          onClick={startAudioContext}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start
        </button>
      )}
      <canvas ref={canvasRef} className="" style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
}
