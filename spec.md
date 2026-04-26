# Picker Performance Dashboard Sample Spec

## Purpose

Build a static web sample that turns the picker-board proposal image into an interactive live dashboard prototype. The sample should be credible enough to show someone the concept without needing backend systems, warehouse integrations, or a build step.

## Source Inspiration

- Proposal image: `assets/picker-board-proposal.png`
- Existing concept: a warehouse picker performance board with real-time KPIs, current-hour rankings, shift-long rankings, top pickers, improvement callouts, and motivational messaging.

## Target User

- Primary: warehouse leadership or supervisors evaluating whether the board is useful.
- Secondary: operations stakeholders who need to understand how the display changes over a shift.

## Experience Requirements

- The first screen should be the dashboard, not a landing page.
- The layout should resemble an operational wallboard: dense, readable, high contrast, and designed for quick scanning.
- The proposal image should be available as a reference panel, but the main web page should be a live recreation, not only the image.
- The sample should run as plain static HTML/CSS/JS by opening `index.html`.

## Data Requirements

Use realistic sample data bundled in `app.js`.

Each timeline snapshot should include:

- timestamp
- average pick rate
- goal pick rate
- top pick rate
- active picker count
- remaining shift time
- current-hour picker rankings
- full-shift picker rankings
- top three picker cards
- most improved picker list
- on-fire picker callout

## Timeline Controls

The sample should allow a presenter to:

- step backward one snapshot
- play or pause the timeline
- step forward one snapshot
- scrub with a range slider
- reset to the first snapshot

## KPI Rules

- Live Race should use current-hour lines/hour.
- Shift Race should use full-shift average lines/hour.
- The goal line should be 150 LPH.
- Color should distinguish current momentum from shift consistency.
- Quality and safety should be present as guardrails so the board does not look like speed-only pressure.

## Visual Direction

- Dark operational display.
- White headline text.
- Yellow brand/accent color.
- Blue for current-hour bars.
- Green for shift-average bars.
- Orange for urgent or on-fire callouts.
- Compact KPI cards and bar rankings.

## Non-Goals

- No backend integration.
- No authentication.
- No production data ingestion.
- No charting library dependency.
- No build tooling.

## Success Criteria

- Opening `index.html` shows a polished live dashboard.
- The controls visibly change the KPI values and rankings over time.
- The sample makes it clear that `assets/picker-board-proposal.png` is the proposal image.
- The project can be shared as a folder without installing dependencies.

