/**
 * Voice Interaction Scene
 * Animated audio visualizer (Canvas 2D frequency spectrum & sine wave),
 * microphone permission handling with Web Audio API,
 * speech recognition command handling, and voice synthesis feedback.
 */
export function initVoiceScene(container) {
  container.innerHTML = `
    <div class="voice-container">
      <div class="voice-hud-header">
        <div class="voice-badge">
          <span class="hud-blink-dot purple" id="voice-dot"></span>
          <span id="voice-status-title">VOICE INTERACTION CORE • STANDBY</span>
        </div>
        <div class="voice-mic-controls">
          <button class="btn primary small" id="voice-mic-toggle">Start Microphone</button>
          <button class="btn ghost small" id="voice-speak-demo-btn">Say Sample Phrase</button>
        </div>
      </div>

      <div class="voice-visualizer-wrapper">
        <canvas id="voice-canvas"></canvas>
        <div class="voice-transcript-overlay">
          <div class="voice-transcript-box">
            <span class="transcript-label">LIVE SPEECH TRANSCRIPT:</span>
            <p id="voice-transcript-text">"Click 'Start Microphone' or click any sample command below to test speech interaction."</p>
          </div>
          <div class="voice-response-box">
            <span class="response-label">ASSISTANT RESPONSE:</span>
            <p id="voice-response-text">Awaiting user vocal command.</p>
          </div>
        </div>
      </div>

      <div class="voice-command-dock">
        <span class="command-dock-title">Supported Vocal Commands:</span>
        <div class="command-chips">
          <button class="command-chip" data-cmd="Who is Mritunjay?">"Who is Mritunjay?"</button>
          <button class="command-chip" data-cmd="Show me your projects">"Show me your projects"</button>
          <button class="command-chip" data-cmd="Tell me about Smart Radar">"Tell me about Smart Radar"</button>
          <button class="command-chip" data-cmd="What are your core skills?">"What are your core skills?"</button>
          <button class="command-chip" data-cmd="How to contact you?">"How to contact you?"</button>
        </div>
        <p class="voice-privacy-notice">
          🔒 <strong>Local Processing:</strong> Speech recognition runs client-side via the browser's Web Speech API. Audio is never recorded, uploaded, or transmitted to any external server.
        </p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#voice-canvas');
  const ctx = canvas.getContext('2d');
  const micToggleBtn = container.querySelector('#voice-mic-toggle');
  const speakDemoBtn = container.querySelector('#voice-speak-demo-btn');
  const transcriptText = container.querySelector('#voice-transcript-text');
  const responseText = container.querySelector('#voice-response-text');
  const statusTitle = container.querySelector('#voice-status-title');
  const statusDot = container.querySelector('#voice-dot');
  const commandChips = container.querySelectorAll('.command-chip');

  let audioCtx = null;
  let analyser = null;
  let micStream = null;
  let recognition = null;
  let isListening = false;
  let animId = null;
  let width = 0, height = 0;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = Math.max(260, rect.height || 320);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize);

  // Speech Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      isListening = true;
      micToggleBtn.textContent = 'Stop Microphone';
      micToggleBtn.classList.add('danger');
      statusTitle.textContent = 'LISTENING FOR SPOKEN COMMANDS...';
      statusDot.className = 'hud-blink-dot green';
    };

    recognition.onresult = (e) => {
      let interim = '';
      let final = '';
      for (let i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          final += e.results[i][0].transcript;
        } else {
          interim += e.results[i][0].transcript;
        }
      }
      const spoken = final || interim;
      if (spoken) {
        transcriptText.textContent = `"${spoken}"`;
        if (final) {
          handleVoiceCommand(final);
        }
      }
    };

    recognition.onerror = (e) => {
      console.warn('Speech recognition error:', e.error);
      if (e.error === 'not-allowed') {
        transcriptText.textContent = 'Microphone permission was denied. You can still test voice synthesis using the sample command buttons below.';
        stopListening();
      }
    };

    recognition.onend = () => {
      if (isListening) {
        try { recognition.start(); } catch (err) { /* ignore */ }
      }
    };
  }

  async function startListening() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      micStream = stream;

      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioCtx.createMediaStreamSource(stream);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      if (recognition) {
        recognition.start();
      } else {
        transcriptText.textContent = 'SpeechRecognition API not available in this browser. Showing simulated audio frequencies.';
        isListening = true;
        micToggleBtn.textContent = 'Stop Microphone';
      }
    } catch (err) {
      console.warn('Mic access failed:', err);
      transcriptText.textContent = 'Microphone permission not granted. Use sample command buttons to test audio synthesis!';
    }
  }

  function stopListening() {
    isListening = false;
    if (micStream) {
      micStream.getTracks().forEach(t => t.stop());
      micStream = null;
    }
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
      analyser = null;
    }
    if (recognition) {
      try { recognition.stop(); } catch (e) { /* ignore */ }
    }
    micToggleBtn.textContent = 'Start Microphone';
    micToggleBtn.classList.remove('danger');
    statusTitle.textContent = 'VOICE INTERACTION CORE • STANDBY';
    statusDot.className = 'hud-blink-dot purple';
  }

  micToggleBtn.addEventListener('click', () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  });

  function handleVoiceCommand(cmd) {
    const text = cmd.toLowerCase();
    let reply = '';

    if (text.includes('who is') || text.includes('who are you') || text.includes('about')) {
      reply = 'Mritunjay is a Class 10 student passionate about creative coding, robotics, IoT, and embedded electronics.';
    } else if (text.includes('project') || text.includes('build')) {
      reply = 'Mritunjay has built 8 interactive builds including the Smart Radar System, Smart Agriculture, and LPG Safety Detector.';
    } else if (text.includes('radar')) {
      reply = 'The Smart Radar system sweeps 180 degrees using an ultrasonic sensor and micro servo, transmitting live coordinates to a custom HUD.';
    } else if (text.includes('skill')) {
      reply = 'Core skills include HTML, CSS, JavaScript, Python, C, C++, Arduino, Three.js, and IoT prototyping.';
    } else if (text.includes('contact') || text.includes('reach') || text.includes('email')) {
      reply = 'You can reach Mritunjay via GitHub at github.com/mritunjay20 or via the Contact form below.';
    } else {
      reply = `Received command: "${cmd}". How else may I assist you with exploring Mritunjay's work?`;
    }

    responseText.textContent = reply;
    speakReply(reply);
  }

  function speakReply(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1.0;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    }
  }

  commandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      transcriptText.textContent = `"${cmd}"`;
      handleVoiceCommand(cmd);
    });
  });

  speakDemoBtn.addEventListener('click', () => {
    const phrase = 'Welcome to Mritunjay\'s interactive 3D portfolio. Explore the avatar, projects, and robotics builds!';
    transcriptText.textContent = `"${phrase}"`;
    responseText.textContent = 'Speaking greeting message...';
    speakReply(phrase);
  });

  // Render Visualizer
  let simTime = 0;
  function draw() {
    ctx.clearRect(0, 0, width, height);
    simTime += 0.04;

    const centerY = height / 2;
    const barCount = 48;
    const barWidth = (width / barCount) * 0.7;
    const spacing = (width / barCount) * 0.3;

    let freqData = new Uint8Array(barCount);

    if (analyser && isListening) {
      const buffer = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(buffer);
      for (let i = 0; i < barCount; i++) {
        freqData[i] = buffer[Math.floor(i * (buffer.length / barCount))];
      }
    } else {
      // Simulated gentle breathing wave
      for (let i = 0; i < barCount; i++) {
        const val = Math.sin(simTime * 2 + i * 0.2) * 25 + Math.cos(simTime + i * 0.4) * 15 + 30;
        freqData[i] = Math.max(10, val);
      }
    }

    // 1. Draw glowing frequency bars
    for (let i = 0; i < barCount; i++) {
      const magnitude = (freqData[i] / 255) * (height * 0.38);
      const x = i * (barWidth + spacing) + spacing;

      const grad = ctx.createLinearGradient(0, centerY - magnitude, 0, centerY + magnitude);
      grad.addColorStop(0, '#c084fc');
      grad.addColorStop(0.5, '#8b5cf6');
      grad.addColorStop(1, '#38bdf8');

      ctx.fillStyle = grad;
      ctx.shadowColor = '#8b5cf6';
      ctx.shadowBlur = 10;
      ctx.fillRect(x, centerY - magnitude, barWidth, magnitude * 2);
    }
    ctx.shadowBlur = 0;

    // 2. Continuous center sine waveform
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < width; x += 4) {
      const wave = Math.sin(x * 0.03 + simTime * 3) * (isListening ? 22 : 8);
      const y = centerY + wave;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    animId = requestAnimationFrame(draw);
  }

  animId = requestAnimationFrame(draw);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      stopListening();
      window.removeEventListener('resize', resize);
    }
  };
}
