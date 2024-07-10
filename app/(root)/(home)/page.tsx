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

          draw();
        });
      } catch (err) {
        console.error('Error accessing audio stream:', err);
      }
    }

    function draw() {
      const canvas = canvasRef.current;
      const canvasCtx = canvas?.getContext('2d');
      if (!canvas || !canvasCtx) return;

      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;

      function drawVisualizer() {
        analyser.getByteFrequencyData(dataArray);

        if (canvasCtx) {
          canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

          const barWidth = (WIDTH / bufferLength) * 2.5;
          let barHeight;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            canvasCtx.fillStyle = `rgb(${barHeight + 100},50,50)`;
            canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
            x += barWidth + 1;
          }
        }

        animationId = requestAnimationFrame(drawVisualizer);
      }

      drawVisualizer();
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
      <canvas ref={canvasRef} className="" width="800" height="400"></canvas>
    </div>
  );
}
