# AgileRx — Mobile App Design Vision

**Purpose:** the strategic design philosophy for the mobile app, to be referenced **before designing or rebuilding any screen** — alongside `CLAUDE.md` (locked design tokens) and `mobile_ux_checklist.md` (per-screen review criteria). This file answers **"why is it structured this way"**; those two answer **"is this screen built correctly."**

---

## Core philosophy

> **"One patient, one context, one action at a time"** — not "one module, many steps, many details."

The app is currently organized around **modules** (MedsCheck, Minor Ailments, Vaccinations, Injections each as a separate entry point). But a busy pharmacist doesn't think *"I need to open MedsCheck"* — they think *"this patient is in front of me, what can I do for them?"* The architecture should follow how the pharmacist actually thinks, not how the backend happens to be organized.

---

## 1. Unified patient-first entry point

Instead of 4 separate module entry points that each start with "find a patient, then pick a service," build **one entry point**: search/select a patient once, then see **every available service for that patient in one place** (eligible MedsCheck, Minor Ailments options, due vaccinations, scheduled injections — whatever applies), rather than navigating to 4 different module pages to check each one separately.

## 2. Bottom navigation — 3 destinations, not more

- **Home** — pure triage: what's urgent, what's ready to act on right now. No activity history, no deep detail.
- **Patients** — the unified entry point described above.
- **Calendar** — appointments.

The floating **(+)** button is **"Quick start"** — a shortcut for starting a service *without* going through a patient search first (the exception case, not the default path).

## 3. One unified "Session Shell" for every clinical workflow

Every clinical session (MedsCheck, Minor Ailments, Vaccinations, Injections) must share the **exact same structural shell**:

- Same **step-tab** pattern.
- Same collapsible **Patient/Medications side panel**.
- Same **AI-draft** interaction pattern (violet chip, editable draft).
- Same **sign/record action button** conventions (full-strength teal for legally signed actions, lighter teal for "record and continue" actions).

**Why this is the single most important structural decision:** the pharmacist learns the shell once. Every new service afterward feels immediately familiar on first use, even if the clinical content is completely different — this is what actually reduces cognitive load at scale, far more than polishing any individual screen.

## 4. Home screen — exactly 3 elements, nothing more

- **One urgent card** (if applicable) — genuinely urgent only, red/amber per locked color meaning.
- **A single lightweight context line** (not a grid of stat cards) on mobile.
- **A short "ready to act on" list** (3 items max) + "View all" link.

No activity feed, no secondary stats, no extra sections on this screen. Anything else is **one tap away, not on Home**.

## 5. Money is always visible in the decision, never hidden

Since nearly every action ties to a real dollar value ($60 MedsCheck, $19 Minor Ailment, $8.50 flu shot, etc.), the **fee must be part of the visual decision for every actionable row** — name + fee + action together, not a detail buried behind a tap. This reflects the app's core value proposition (surfacing revenue the pharmacy would otherwise miss).

## 6. Safety and compliance signals always surface first, never buried

Red flags, formulary restrictions, high-severity drug interactions — these must **always be the first thing visible** when relevant, never nested inside a long list or requiring extra taps to discover. **Non-negotiable**, regardless of how any other layout decision plays out.

---

## Relationship to other reference files

- **`CLAUDE.md`** — locked colors, tone, brand rules, real-world clinical workflow requirements. Defines *what's allowed and what's clinically accurate*.
- **`mobile_ux_checklist.md`** — the tactical, per-screen review criteria (tap targets, hierarchy, navigation, etc.). Defines *is this screen built well*.
- **This file** — the overall shape the app should take. Defines *why the app is organized this way*. Consult this first when a **structural** (not just cosmetic) question comes up — e.g., "should this be its own page or merged with something else," "does this need its own entry point."

---

## Status

This is a **strategic direction, not yet implemented.** The current app is organized by module (per `CLAUDE.md`'s existing module list). Applying this vision is a larger restructuring effort than a typical single-screen fix — approach it **deliberately, one piece at a time** (e.g., start with the unified Patients entry point, or the Home screen simplification) rather than attempting it as one large rebuild, consistent with the **"one feature/screen at a time"** rule in `CLAUDE.md`.
