# Picker Dashboard Production Design

Date: 2026-04-27

## Purpose

Move the picker performance dashboard from a static simulation into a production feature inside the existing authenticated Laravel portal running on IIS/Windows Server. The production dashboard will pull live or near-live picker performance data from AS/400 through designed API endpoints, expose dashboard-ready data through Laravel, and support warehouse validation before rollout.

The current repository remains the visual prototype and input material. Its `spec.md`, `index.html`, `styles.css`, and `app.js` describe the demo behavior and expected data shape, but they are not a complete production requirements document.

## Recommended Approach

Use a Laravel Cached Live Adapter.

The browser will call Laravel portal endpoints every 15-60 seconds. Laravel will call the AS/400 API through a dedicated server-side adapter, normalize the data into a dashboard contract, and serve the wallboard from a short-lived cache or background refresh process. This keeps the dashboard as live as possible while protecting AS/400 from direct browser polling and repeated wallboard traffic.

The browser must never call AS/400 directly, and AS/400 credentials must never be exposed to frontend JavaScript.

## System Context

- Existing production environment: Laravel portal hosted on IIS/Windows Server.
- Authentication: already handled by the existing portal; the dashboard should not introduce a separate login flow.
- AS/400 integration: endpoints still need to be designed.
- Current data dictionary: incomplete and must be finalized through discovery.
- Current repo: static demo/prototype only, not the target production codebase.

## Stakeholders And Review Ownership

| Area | Primary Reviewer | Backup / Contributor | Approval Purpose |
|---|---|---|---|
| Warehouse workflow, dashboard usefulness, warehouse/zone/shift scope | Steve Ganon | Steve's assigned delegate | Confirms the board reflects real operations and should be deployed |
| AS/400 source data, data dictionary, field availability | Gary | Brian Bailey for picking-data discovery | Confirms what data exists, what is missing, and what AS/400 can expose |
| Picking metrics and missing data details | Brian Bailey | Gary | Confirms definitions for lines picked, picker identity, zones, timestamps, quality/errors |
| PHP/Laravel integration and API design | Lucas Edwards | Portal development team if assigned | Confirms endpoint design, Laravel service structure, caching, and auth assumptions |
| IIS/Windows production deployment | IIS/server owner, if separate | Lucas Edwards or IT admin | Confirms deployment path, environment config, logs, scheduled jobs, and permissions |
| Final implementation plan | Lucas Edwards, Gary, and Steve Ganon or delegate | Project owner | Confirms the plan is technically buildable and operationally correct before code work |

No implementation should begin until the requirements/data-contract document and implementation plan have been reviewed by the relevant owners for their sections.

## Discovery And Requirements Phase

The first production milestone is to create a formal requirements and data-contract document. This document will start from the demo's expected dashboard data and reconcile it against the AS/400 data that actually exists.

Discovery must answer:

| Topic | Decision Needed |
|---|---|
| Dashboard scope | Which warehouses, picking zones, departments, shifts, and screens are in scope |
| Picker identity | Which IDs/names are available and safe to display |
| Productivity metrics | How AS/400 defines lines picked, pick rate, shift average, and current-hour rate |
| Time windows | How to calculate current hour, shift-to-date, last 30 minutes, and remaining shift time |
| Quality/safety | Whether accuracy, exceptions, errors, or safety guardrails exist in AS/400 |
| Rankings | Whether top 3, live race, shift race, most improved, and on-fire can be calculated from available data |
| Refresh expectations | Target freshness, acceptable lag, and stale-data behavior |
| Data gaps | Whether to change AS/400/API output, change the dashboard, or defer a metric |

The requirements document must include a data-gap log. Each gap should identify the missing field or metric, the owner, the preferred resolution, and whether the fix belongs in AS/400, the API layer, Laravel calculation logic, or the dashboard UI.

## Data Expected By The Demo

The current demo expects the following dashboard data:

- Timestamp and display date.
- Average pick rate.
- Goal pick rate, currently 150 lines per hour.
- Top pick rate and picker label.
- Active picker count.
- Remaining shift time.
- Current-hour picker rankings.
- Shift-to-date picker rankings.
- Top three picker cards.
- Most-improved picker list.
- On-fire picker callout based on recent improvement.
- Quality guardrail percentage and note.

During discovery, each item must be marked as:

- Available directly from AS/400.
- Available after calculation from AS/400 fields.
- Requires AS/400/API enhancement.
- Requires UI change or removal.
- Deferred for a later phase.

## API And Data Contract Design

Use two related contracts.

### AS/400 API Contract

The AS/400 API contract is the source contract owned by the AS/400/API stakeholders. It should expose raw or lightly processed operational facts needed by the portal:

- Warehouse.
- Picking zone.
- Shift or shift window.
- Picker identifier and display-safe name.
- Pick timestamps or aggregated time windows.
- Picked line counts.
- Current activity status where available.
- Quality, exception, or error data where available.
- Source update timestamp.

The exact AS/400 endpoints and field names must be designed after Gary, Brian Bailey, Lucas Edwards, and Steve Ganon or delegate complete the data discovery review.

### Laravel Dashboard API Contract

The Laravel dashboard API is the browser-facing contract inside the existing portal. It should return dashboard-ready JSON so the frontend stays simple and AS/400 changes are isolated behind Laravel.

Likely endpoints:

| Endpoint | Purpose |
|---|---|
| `GET /api/picker-dashboard/scope-options` | Returns warehouses, zones, shifts, and valid dashboard filters |
| `GET /api/picker-dashboard/current?warehouse=&zone=&shift=` | Returns current KPIs, rankings, top pickers, improvement callouts, quality guardrail, timestamps, and display messages |
| `GET /api/picker-dashboard/health` | Returns API/cache freshness, AS/400 availability, last successful refresh, and stale status |

The dashboard response must include:

- `generated_at`
- `source_last_updated_at`
- `is_stale`
- `messages`
- Current scope values.
- KPI objects.
- Ranking arrays.
- Empty/error/stale state metadata.

## Dashboard Behavior

The production dashboard should preserve the wallboard-first experience from the demo while replacing simulated snapshots with live portal data.

| Area | Production Behavior |
|---|---|
| Refresh | Auto-refresh every 15-60 seconds, configurable by environment or portal setting |
| Filters/scope | Warehouse/zone/shift scope determined during discovery; wallboards may use saved/default scope |
| Loading state | Show a professional loading state before the first successful response |
| Stale state | Keep last good data visible, but clearly show when data is stale |
| Error state | Show a visible but non-alarming service message if AS/400/API data is unavailable |
| Empty state | If no active pickers or no current shift data exists, show an operational empty state instead of broken rankings |
| Metrics | Only show metrics AS/400 can support or stakeholders approve as calculated metrics |
| Data timestamp | Always show source freshness, not only browser refresh time |
| Authentication | Rely on existing portal auth; no separate dashboard login |

The demo timeline controls should be removed from the production wallboard unless stakeholders explicitly request a replay/training mode in a later phase.

## Deployment And Operations

Production deployment should happen inside the existing Laravel portal on IIS/Windows Server.

| Area | Requirement |
|---|---|
| Laravel integration | Controller/routes, service class for AS/400 adapter, dashboard view/component, config entries |
| IIS/Windows | Confirm PHP version, Laravel version, queue/scheduler support, app pool permissions, and environment variables |
| Caching/polling | Use short-lived cache or scheduled refresh so multiple wallboards do not overload AS/400 |
| Secrets | Store AS/400 API credentials in environment/config, never browser JavaScript |
| Logging | Log AS/400 latency, failures, stale-cache usage, and unexpected payloads |
| Monitoring | Provide health endpoint or log-based alerting for AS/400/API failures |
| Rollout | Start with one warehouse/zone pilot, validate with Steve Ganon or delegate, then expand |
| Fallback | Last-known-good display plus stale indicator; no blank wallboard during temporary AS/400 issues |
| Documentation | Requirements doc, endpoint contract, data-gap log, deployment checklist, reviewer signoff matrix |

## Testing Strategy

Testing should happen at three levels.

| Level | What To Verify |
|---|---|
| Data contract tests | AS/400 payload examples map correctly into the Laravel dashboard contract |
| Laravel tests | Endpoint validation, caching/stale behavior, error handling, auth assumptions, config-driven refresh |
| Browser/UI tests | Loading, live refresh, stale/error/empty states, responsive wallboard layout, warehouse/zone scope behavior |

Test fixtures should include normal, empty, stale, partial, and failed AS/400 responses.

## Review Gates

| Gate | Required Review |
|---|---|
| Requirements/data contract complete | Steve Ganon or delegate for workflow, Gary and Brian Bailey for AS/400 data, Lucas Edwards for API/Laravel feasibility |
| Data gap decisions complete | Steve Ganon or delegate approves metric changes; Gary and Lucas Edwards approve upstream feasibility |
| Implementation plan complete | Lucas Edwards, Gary, and Steve Ganon or delegate review the sections they own before code starts |
| Pilot deployment ready | Lucas Edwards/IT validates deployment; Steve Ganon or delegate validates operational display |
| Production rollout | Pilot signoff plus documented fallback and monitoring plan |

## Open Dependencies

- Final AS/400 data dictionary.
- Picking data details from Brian Bailey.
- AS/400 field and endpoint feasibility from Gary.
- Existing Laravel portal conventions from Lucas Edwards or the portal development team.
- IIS/Windows operational details, including scheduler/queue support and deployment ownership.
- Warehouse, zone, shift, and wallboard scope validation from Steve Ganon or delegate.

## Out Of Scope For This Design

- Building a standalone authentication system.
- Connecting browser JavaScript directly to AS/400.
- Implementing code inside the existing Laravel portal before the requirements/data contract and implementation plan are reviewed.
- Guaranteeing sub-second real-time updates.
- Adding unsupported metrics that cannot be sourced or approved during discovery.

## Next Step

After this design is reviewed, create the production requirements/data-contract document and then a detailed implementation plan. The implementation plan must include reviewer ownership by section and should not move into code until Lucas Edwards, Gary, and Steve Ganon or delegate have reviewed the relevant pieces.
