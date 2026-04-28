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
const previousRanks = {
  live: new Map(),
  shift: new Map()
};

const helpItems = [
  {
    key: "averagePickRate",
    title: "Average Pick Rate",
    meaning: "Average productivity for the active picker group. It answers: how fast is the floor picking right now?",
    calculation: "For a fair production version, calculate this as total eligible picked lines divided by total eligible active picking hours for the selected warehouse, shift, and comparable picking area.",
    apiExample: {
      averageLinesPerHour: 157,
      activePickerCount: 14,
      goalLinesPerHour: 150,
      lastUpdated: "2026-04-28T10:15:30-04:00"
    },
    as400: [
      "INVITMP: count eligible pick-line records by PICKER, ITDTPK, ITBPTM/ITEPTM, ITPKST.",
      "PIKEMPP: join PICKER to PEMP for picker identity.",
      "BCPDOWN: subtract approved downtime if business rules allow it."
    ]
  },
  {
    key: "todaysGoal",
    title: "Today's Goal",
    meaning: "The target lines-per-hour rate used for KPI comparison and the dashed goal line in the rankings.",
    calculation: "The prototype uses 150 LPH. Production should decide whether the goal is global or varies by warehouse, shift, department, pick type, or zone.",
    apiExample: {
      goalLinesPerHour: 150,
      warehouseId: "WH1",
      shiftId: "2026-04-28-DAY",
      zone: "Aisle Pick"
    },
    as400: [
      "DPTINFP: DEPT, SAISLE, EAISLE, ACTIVE, RFPICK may help define zone-specific rules.",
      "May need a new Laravel configuration table if goals are business-defined rather than stored in AS/400."
    ]
  },
  {
    key: "topPickRate",
    title: "Top Pick Rate Today",
    meaning: "The highest shift-average pick rate among active eligible pickers.",
    calculation: "Find each picker's shiftLinesPerHour, then take the maximum value. The label shows the picker who currently owns that top rate.",
    apiExample: {
      topLinesPerHour: 191,
      topPicker: {
        pickerId: "123",
        pickerCode: "TA",
        displayName: "Thomas A."
      }
    },
    as400: [
      "INVITMP: PICKER, ITDTPK, ITBPTM/ITEPTM, ITPKST for completed pick lines.",
      "PIKEMPP: PEMP, PNAME for display name."
    ]
  },
  {
    key: "activePickers",
    title: "Active Pickers",
    meaning: "Number of pickers currently included in the dashboard population.",
    calculation: "Count distinct active picker IDs with eligible pick activity during the current shift or currently assigned picking window. Decide whether to exclude people on downtime, training, breaks, or non-picking work.",
    apiExample: {
      activePickerCount: 14,
      activePickerIds: ["101", "102", "103"]
    },
    as400: [
      "INVITMP: distinct PICKER values with current shift pick records.",
      "PIKEMPP: validate picker exists and get PNAME.",
      "BCPDOWN: may exclude or adjust employees with approved downtime."
    ]
  },
  {
    key: "shiftTime",
    title: "Shift Time",
    meaning: "Remaining scheduled time in the active shift.",
    calculation: "remainingShiftMinutes = shiftEnd - currentTime. The dashboard displays this as hours and minutes.",
    apiExample: {
      shiftStart: "2026-04-28T07:00:00-04:00",
      shiftEnd: "2026-04-28T15:30:00-04:00",
      currentTime: "2026-04-28T10:15:00-04:00",
      remainingShiftMinutes: 315
    },
    as400: [
      "Shift schedule source is not shown in the current schemas.",
      "Confirm with Bryan whether shift start/end comes from AS/400, Laravel config, or a new schedule table."
    ]
  },
  {
    key: "liveRace",
    title: "Live Race - Current Hour",
    meaning: "Current-hour leaderboard. This is the fast-moving race showing recent picker pace.",
    calculation: "currentHourLinesPerHour = eligible pick lines in the current clock hour or rolling 60-minute window divided by active picking time in that same window. Confirm which definition operations wants.",
    apiExample: {
      rankings: [
        {
          pickerId: "123",
          pickerCode: "TA",
          displayName: "Thomas A.",
          currentHourLines: 82,
          currentHourLinesPerHour: 164,
          rankCurrentHour: 1,
          previousRankCurrentHour: 3
        }
      ]
    },
    as400: [
      "INVITMP: ITDTPK plus ITBPTM/ITEPTM provide pick timestamps.",
      "INVITMP: PICKER identifies picker; ITPKST should define which rows count.",
      "PIKEMPP: PEMP and PNAME provide display identity."
    ]
  },
  {
    key: "shiftRace",
    title: "Shift Race - Total Today",
    meaning: "Full-shift leaderboard. This is the steadier ranking based on average performance across the shift so far.",
    calculation: "shiftLinesPerHour = total eligible pick lines this shift divided by active picking hours this shift. Approved downtime may reduce the denominator if that rule is adopted.",
    apiExample: {
      rankings: [
        {
          pickerId: "123",
          pickerCode: "TA",
          displayName: "Thomas A.",
          shiftLines: 512,
          shiftLinesPerHour: 169,
          activeMinutes: 182,
          rankShift: 1,
          previousRankShift: 2
        }
      ]
    },
    as400: [
      "INVITMP: count completed pick lines by PICKER for the shift date/time window.",
      "BCPDOWN: DTEMP, DTDATE, DTSTART, DTEND, APPROVAL can support downtime adjustments.",
      "DPTINFP/ITWSEC/ITWLOC: needed for fair zone grouping."
    ]
  },
  {
    key: "topThree",
    title: "Top 3 Pickers Today",
    meaning: "A podium view of the highest full-shift performers.",
    calculation: "Sort the full-shift ranking by shiftLinesPerHour descending and take the first three eligible pickers.",
    apiExample: {
      topThree: [
        { pickerId: "123", displayName: "Thomas A.", shiftLinesPerHour: 169 },
        { pickerId: "104", displayName: "Lauren D.", shiftLinesPerHour: 164 },
        { pickerId: "118", displayName: "Joe Y.", shiftLinesPerHour: 162 }
      ]
    },
    as400: [
      "Same source as Shift Race: INVITMP plus PIKEMPP.",
      "Confirm whether this podium should be overall or per zone."
    ]
  },
  {
    key: "mostImproved",
    title: "Most Improved",
    meaning: "Shows pickers whose current performance is most improved compared with their own historical baseline.",
    calculation: "improvementLinesPerHour = todayLinesPerHour - trailingAverageLinesPerHour. A trailing baseline could use the last 10 eligible shifts, but operations must approve the window.",
    apiExample: {
      mostImproved: [
        {
          pickerId: "205",
          displayName: "Katie P.",
          todayLinesPerHour: 153,
          trailingAverageLinesPerHour: 135,
          improvementLinesPerHour: 18
        }
      ]
    },
    as400: [
      "Historical pick-line detail: Bryan says current and previous year line-level history exists.",
      "Need confirmation whether historical source is INVITMP archive or another table.",
      "Use same zone/work-type rules when comparing historical averages."
    ]
  },
  {
    key: "onFire",
    title: "On Fire",
    meaning: "Momentum callout for the picker with the strongest recent surge.",
    calculation: "Use a short window such as last 15 or 30 minutes. Compare recent LPH to that picker's shift average or historical baseline.",
    apiExample: {
      onFire: {
        pickerId: "123",
        displayName: "Thomas A.",
        last15MinuteLinesPerHour: 188,
        momentumStatus: "on_fire"
      }
    },
    as400: [
      "INVITMP: ITDTPK and ITBPTM/ITEPTM support short-window line counts.",
      "Decide if the demo label remains last 30 min or changes to last15MinuteLinesPerHour."
    ]
  },
  {
    key: "qualityGuardrail",
    title: "Quality Guardrail",
    meaning: "Keeps quality visible beside speed so the dashboard does not encourage speed-only behavior.",
    calculation: "accuracyPercent can be calculated from audit/check results, but Bryan noted audits are sampled and not standardized across all warehouses. Treat as informational or supervisor-reviewed until standardized.",
    apiExample: {
      accuracyPercent: 99.2,
      errorCount: 1,
      qualityDisqualified: false,
      supervisorApproved: false
    },
    as400: [
      "QCPCHKL: QSPICKER, QPCKNAME, QPICKDT, QPICKTM, QCHKDT, QCHKTM.",
      "QCPCHKL: QCHKCODE likely identifies check result; need valid code definitions.",
      "QCPCHKL: QSDEPT and QSPIKTYP help separate department and pick type."
    ]
  }
];

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
  snapshotLabel: document.getElementById("snapshotLabel"),
  helpBtn: document.getElementById("helpBtn"),
  helpOverlay: document.getElementById("helpOverlay"),
  helpPanel: document.getElementById("helpPanel"),
  helpStep: document.getElementById("helpStep"),
  helpTitle: document.getElementById("helpTitle"),
  helpBody: document.getElementById("helpBody"),
  helpCloseBtn: document.getElementById("helpCloseBtn"),
  helpPrevBtn: document.getElementById("helpPrevBtn"),
  helpNextBtn: document.getElementById("helpNextBtn")
};

els.timelineSlider.max = String(snapshots.length - 1);

let helpActive = false;
let currentHelpIndex = 0;

function average(rows) {
  return Math.round(rows.reduce((sum, row) => sum + row[2], 0) / rows.length);
}

function getRankMovement(boardKey, code, newRank) {
  const oldRank = previousRanks[boardKey].get(code);

  if (!oldRank) {
    return { className: "", label: "" };
  }

  const delta = oldRank - newRank;

  if (delta > 0) {
    return { className: "moved-up", label: `UP ${delta}` };
  }

  if (delta < 0) {
    return { className: "moved-down", label: `DOWN ${Math.abs(delta)}` };
  }

  return { className: "", label: "" };
}

function renderRankList(container, rows, maxValue, boardKey) {
  const oldPositions = new Map(
    [...container.querySelectorAll(".rank-row")].map(row => [
      row.dataset.code,
      row.getBoundingClientRect().top
    ])
  );

  container.innerHTML = rows.map((row, index) => {
    const [code, name, value] = row;
    const width = Math.max(7, Math.round((value / maxValue) * 100));
    const movement = getRankMovement(boardKey, code, index + 1);
    const movementBadge = movement.label
      ? `<span class="movement-pill">${movement.label}</span>`
      : "";

    return `
      <li class="rank-row ${movement.className}" data-code="${code}">
        <span class="rank-number">${index + 1}</span>
        <span class="picker-name"><span class="picker-code">${code}</span><span class="picker-label">${name}</span>${movementBadge}</span>
        <span class="bar-track">
          <span class="bar-fill" style="width:${width}%"></span>
          <span class="goal-line"></span>
        </span>
        <span class="rank-value">${value}</span>
      </li>
    `;
  }).join("");

  rows.forEach((row, index) => previousRanks[boardKey].set(row[0], index + 1));

  container.querySelectorAll(".rank-row").forEach(row => {
    const oldTop = oldPositions.get(row.dataset.code);

    if (oldTop === undefined) {
      return;
    }

    const newTop = row.getBoundingClientRect().top;
    const offset = oldTop - newTop;

    if (offset === 0) {
      return;
    }

    row.style.transform = `translateY(${offset}px)`;
    row.style.transition = "none";
    row.getBoundingClientRect();

    requestAnimationFrame(() => {
      row.style.transform = "";
      row.style.transition = "";
    });
  });
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

  renderRankList(els.liveRace, snapshot.live, maxValue, "live");
  renderRankList(els.shiftRace, snapshot.shift, maxValue, "shift");
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

els.helpBtn.addEventListener("click", () => {
  if (helpActive) {
    closeHelp();
  } else {
    openHelp(0);
  }
});

els.helpCloseBtn.addEventListener("click", closeHelp);
els.helpOverlay.addEventListener("click", closeHelp);
els.helpPrevBtn.addEventListener("click", () => openHelp(currentHelpIndex - 1));
els.helpNextBtn.addEventListener("click", () => openHelp(currentHelpIndex + 1));

document.addEventListener("click", event => {
  if (!helpActive) {
    return;
  }

  const helpTarget = event.target.closest("[data-help]");
  if (!helpTarget) {
    return;
  }

  event.preventDefault();
  const index = helpItems.findIndex(item => item.key === helpTarget.dataset.help);
  if (index >= 0) {
    openHelp(index);
  }
});

document.addEventListener("keydown", event => {
  if (!helpActive) {
    return;
  }

  if (event.key === "Escape") {
    closeHelp();
  }

  if (event.key === "ArrowRight") {
    openHelp(currentHelpIndex + 1);
  }

  if (event.key === "ArrowLeft") {
    openHelp(currentHelpIndex - 1);
  }
});

function openHelp(index) {
  helpActive = true;
  currentHelpIndex = (index + helpItems.length) % helpItems.length;
  document.body.classList.add("help-active");
  els.helpBtn.setAttribute("aria-pressed", "true");
  els.helpOverlay.hidden = false;
  els.helpPanel.hidden = false;
  renderHelp();
}

function closeHelp() {
  helpActive = false;
  document.body.classList.remove("help-active");
  els.helpBtn.setAttribute("aria-pressed", "false");
  els.helpOverlay.hidden = true;
  els.helpPanel.hidden = true;
  document.querySelectorAll(".help-selected").forEach(node => node.classList.remove("help-selected"));
}

function renderHelp() {
  const item = helpItems[currentHelpIndex];
  document.querySelectorAll(".help-selected").forEach(node => node.classList.remove("help-selected"));
  const target = document.querySelector(`[data-help="${item.key}"]`);
  if (target) {
    target.classList.add("help-selected");
    target.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  els.helpStep.textContent = `${currentHelpIndex + 1} of ${helpItems.length}`;
  els.helpTitle.textContent = item.title;
  els.helpBody.innerHTML = `
    <h3>What this value means</h3>
    <p>${escapeHtml(item.meaning)}</p>
    <h3>How it is calculated</h3>
    <p>${escapeHtml(item.calculation)}</p>
    <h3>API shape</h3>
    <pre>${escapeHtml(JSON.stringify(item.apiExample, null, 2))}</pre>
    <h3>Likely AS/400 mapping</h3>
    <ul>${item.as400.map(line => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderSnapshot(currentIndex);
