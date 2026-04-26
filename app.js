const GOAL_RATE = 150;

const snapshots = [
  {
    time: "08:15 AM",
    date: "Apr 25, 2026",
    shiftRemaining: "04:55",
    activePickers: 16,
    qualityRate: "99.5%",
    qualityNote: "Early shift accuracy is above target.",
    live: [
      ["TA", "Thomas A.", 148],
      ["LD", "Lauren D.", 145],
      ["JY", "Joe Y.", 139],
      ["KP", "Katie P.", 134],
      ["JW", "Joseph W.", 132],
      ["JB", "Josh F.", 130],
      ["OC", "Owen C.", 127],
      ["MB", "Mike B.", 124]
    ],
    shift: [
      ["TA", "Thomas A.", 146],
      ["LD", "Lauren D.", 143],
      ["JY", "Joe Y.", 138],
      ["KP", "Katie P.", 134],
      ["JW", "Joseph W.", 132],
      ["JB", "Josh F.", 129],
      ["OC", "Owen C.", 126],
      ["MB", "Mike B.", 123]
    ],
    improved: [["Katie P.", 8], ["Owen C.", 7], ["Mike B.", 5]],
    fire: ["Thomas A.", 11]
  },
  {
    time: "09:00 AM",
    date: "Apr 25, 2026",
    shiftRemaining: "04:10",
    activePickers: 17,
    qualityRate: "99.3%",
    qualityNote: "Accuracy remains stable as pace rises.",
    live: [
      ["LD", "Lauren D.", 162],
      ["TA", "Thomas A.", 160],
      ["JY", "Joe Y.", 154],
      ["KP", "Katie P.", 150],
      ["JW", "Joseph W.", 146],
      ["JB", "Josh F.", 144],
      ["OC", "Owen C.", 139],
      ["MB", "Mike B.", 136]
    ],
    shift: [
      ["TA", "Thomas A.", 153],
      ["LD", "Lauren D.", 151],
      ["JY", "Joe Y.", 145],
      ["KP", "Katie P.", 141],
      ["JW", "Joseph W.", 139],
      ["JB", "Josh F.", 136],
      ["OC", "Owen C.", 132],
      ["MB", "Mike B.", 129]
    ],
    improved: [["Katie P.", 12], ["Owen C.", 10], ["Mike B.", 8]],
    fire: ["Lauren D.", 15]
  },
  {
    time: "09:45 AM",
    date: "Apr 25, 2026",
    shiftRemaining: "03:25",
    activePickers: 18,
    qualityRate: "99.1%",
    qualityNote: "One exception reviewed; no trend issue.",
    live: [
      ["TA", "Thomas A.", 170],
      ["LD", "Lauren D.", 168],
      ["JY", "Joe Y.", 164],
      ["KP", "Katie P.", 158],
      ["JW", "Joseph W.", 153],
      ["JB", "Josh F.", 150],
      ["OC", "Owen C.", 145],
      ["MB", "Mike B.", 142]
    ],
    shift: [
      ["TA", "Thomas A.", 160],
      ["LD", "Lauren D.", 157],
      ["JY", "Joe Y.", 153],
      ["KP", "Katie P.", 146],
      ["JW", "Joseph W.", 143],
      ["JB", "Josh F.", 140],
      ["OC", "Owen C.", 137],
      ["MB", "Mike B.", 134]
    ],
    improved: [["Katie P.", 15], ["Owen C.", 13], ["Mike B.", 10]],
    fire: ["Thomas A.", 18]
  },
  {
    time: "10:24 AM",
    date: "Apr 25, 2026",
    shiftRemaining: "02:45",
    activePickers: 18,
    qualityRate: "99.2%",
    qualityNote: "Accuracy stays visible beside speed.",
    live: [
      ["TA", "Thomas A.", 174],
      ["LD", "Lauren D.", 172],
      ["JY", "Joe Y.", 171],
      ["KP", "Katie P.", 165],
      ["JW", "Joseph W.", 160],
      ["JB", "Josh F.", 158],
      ["OC", "Owen C.", 153],
      ["MB", "Mike B.", 151]
    ],
    shift: [
      ["TA", "Thomas A.", 169],
      ["LD", "Lauren D.", 164],
      ["JY", "Joe Y.", 162],
      ["JW", "Joseph W.", 159],
      ["KP", "Katie P.", 153],
      ["JB", "Josh F.", 150],
      ["OC", "Owen C.", 147],
      ["MB", "Mike B.", 145]
    ],
    improved: [["Katie P.", 18], ["Owen C.", 15], ["Mike B.", 12]],
    fire: ["Thomas A.", 22]
  },
  {
    time: "11:10 AM",
    date: "Apr 25, 2026",
    shiftRemaining: "01:59",
    activePickers: 18,
    qualityRate: "99.0%",
    qualityNote: "Supervisor review flags no repeat errors.",
    live: [
      ["JY", "Joe Y.", 181],
      ["TA", "Thomas A.", 178],
      ["LD", "Lauren D.", 175],
      ["KP", "Katie P.", 169],
      ["JW", "Joseph W.", 166],
      ["JB", "Josh F.", 161],
      ["OC", "Owen C.", 157],
      ["MB", "Mike B.", 152]
    ],
    shift: [
      ["TA", "Thomas A.", 173],
      ["LD", "Lauren D.", 168],
      ["JY", "Joe Y.", 167],
      ["JW", "Joseph W.", 162],
      ["KP", "Katie P.", 158],
      ["JB", "Josh F.", 153],
      ["OC", "Owen C.", 150],
      ["MB", "Mike B.", 147]
    ],
    improved: [["Katie P.", 20], ["Owen C.", 18], ["Mike B.", 14]],
    fire: ["Joe Y.", 24]
  },
  {
    time: "12:00 PM",
    date: "Apr 25, 2026",
    shiftRemaining: "01:09",
    activePickers: 17,
    qualityRate: "99.4%",
    qualityNote: "Late-shift pace remains clean.",
    live: [
      ["TA", "Thomas A.", 188],
      ["LD", "Lauren D.", 182],
      ["JY", "Joe Y.", 179],
      ["JW", "Joseph W.", 170],
      ["KP", "Katie P.", 168],
      ["JB", "Josh F.", 162],
      ["OC", "Owen C.", 158],
      ["MB", "Mike B.", 155]
    ],
    shift: [
      ["TA", "Thomas A.", 178],
      ["LD", "Lauren D.", 172],
      ["JY", "Joe Y.", 170],
      ["JW", "Joseph W.", 166],
      ["KP", "Katie P.", 161],
      ["JB", "Josh F.", 156],
      ["OC", "Owen C.", 152],
      ["MB", "Mike B.", 149]
    ],
    improved: [["Katie P.", 22], ["Owen C.", 19], ["Mike B.", 16]],
    fire: ["Thomas A.", 26]
  }
];

let currentIndex = 3;
let timer = null;

const els = {
  timeLabel: document.getElementById("timeLabel"),
  dateLabel: document.getElementById("dateLabel"),
  avgRate: document.getElementById("avgRate"),
  goalRate: document.getElementById("goalRate"),
  topRate: document.getElementById("topRate"),
  topPickerLabel: document.getElementById("topPickerLabel"),
  activePickers: document.getElementById("activePickers"),
  shiftRemaining: document.getElementById("shiftRemaining"),
  liveRace: document.getElementById("liveRace"),
  shiftRace: document.getElementById("shiftRace"),
  podium: document.getElementById("podium"),
  improvedList: document.getElementById("improvedList"),
  firePicker: document.getElementById("firePicker"),
  fireChange: document.getElementById("fireChange"),
  qualityRate: document.getElementById("qualityRate"),
  qualityNote: document.getElementById("qualityNote"),
  backBtn: document.getElementById("backBtn"),
  playBtn: document.getElementById("playBtn"),
  nextBtn: document.getElementById("nextBtn"),
  resetBtn: document.getElementById("resetBtn"),
  timelineSlider: document.getElementById("timelineSlider"),
  snapshotLabel: document.getElementById("snapshotLabel")
};

els.timelineSlider.max = String(snapshots.length - 1);

function average(rows) {
  return Math.round(rows.reduce((sum, row) => sum + row[2], 0) / rows.length);
}

function renderRankList(container, rows, maxValue) {
  container.innerHTML = rows.map((row, index) => {
    const [code, name, value] = row;
    const width = Math.max(7, Math.round((value / maxValue) * 100));
    return `
      <li class="rank-row">
        <span class="rank-number">${index + 1}</span>
        <span class="picker-name"><span class="picker-code">${code}</span>${name}</span>
        <span class="bar-track">
          <span class="bar-fill" style="width:${width}%"></span>
          <span class="goal-line"></span>
        </span>
        <span class="rank-value">${value}</span>
      </li>
    `;
  }).join("");
}

function renderPodium(rows) {
  const podiumRows = [...rows].sort((a, b) => b[2] - a[2]).slice(0, 3);
  const classes = ["first", "second", "third"];
  els.podium.innerHTML = podiumRows.map((row, index) => `
    <div class="podium-card ${classes[index]}">
      <span class="medal">${index + 1}</span>
      <span class="podium-name">${row[1]}</span>
      <strong class="podium-rate">${row[2]}</strong>
      <small>LPH avg</small>
    </div>
  `).join("");
}

function renderImproved(rows) {
  els.improvedList.innerHTML = rows.map((row, index) => `
    <li><span>${index + 1}</span><span>${row[0]}</span><strong>+${row[1]}%</strong></li>
  `).join("");
}

function renderSnapshot(index) {
  currentIndex = (index + snapshots.length) % snapshots.length;
  const snapshot = snapshots[currentIndex];
  const topLive = [...snapshot.live].sort((a, b) => b[2] - a[2])[0];
  const maxValue = Math.max(...snapshot.live.map(row => row[2]), ...snapshot.shift.map(row => row[2]), GOAL_RATE);

  els.timeLabel.textContent = snapshot.time;
  els.dateLabel.textContent = snapshot.date;
  els.avgRate.textContent = average(snapshot.live);
  els.goalRate.textContent = GOAL_RATE;
  els.topRate.textContent = topLive[2];
  els.topPickerLabel.textContent = `${topLive[1]} - lines / hour`;
  els.activePickers.textContent = snapshot.activePickers;
  els.shiftRemaining.textContent = snapshot.shiftRemaining;
  els.qualityRate.textContent = snapshot.qualityRate;
  els.qualityNote.textContent = snapshot.qualityNote;
  els.firePicker.textContent = snapshot.fire[0];
  els.fireChange.textContent = `+${snapshot.fire[1]}%`;
  els.timelineSlider.value = String(currentIndex);
  els.snapshotLabel.textContent = `Snapshot ${currentIndex + 1} of ${snapshots.length}`;

  renderRankList(els.liveRace, snapshot.live, maxValue);
  renderRankList(els.shiftRace, snapshot.shift, maxValue);
  renderPodium(snapshot.shift);
  renderImproved(snapshot.improved);
}

function step(delta) {
  renderSnapshot(currentIndex + delta);
}

function setPlaying(shouldPlay) {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  if (shouldPlay) {
    timer = setInterval(() => step(1), 1400);
    els.playBtn.textContent = "Pause";
    els.playBtn.title = "Pause timeline";
  } else {
    els.playBtn.textContent = "Play";
    els.playBtn.title = "Play timeline";
  }
}

els.backBtn.addEventListener("click", () => step(-1));
els.nextBtn.addEventListener("click", () => step(1));
els.resetBtn.addEventListener("click", () => {
  setPlaying(false);
  renderSnapshot(0);
});
els.playBtn.addEventListener("click", () => setPlaying(!timer));
els.timelineSlider.addEventListener("input", event => {
  setPlaying(false);
  renderSnapshot(Number(event.target.value));
});

renderSnapshot(currentIndex);
