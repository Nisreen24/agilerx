# AgileRx — Mobile UX Checklist

**Purpose:** the tactical, per-screen review criteria. Run this checklist against **every** screen before considering it "done." This file answers **"is this screen built well?"**

- **`CLAUDE.md`** defines *what's allowed and clinically accurate* (locked tokens, colors, tone, workflow requirements).
- **`mobile_app_design_vision.md`** defines *why the app is shaped the way it is* (structure, entry points, session shell).
- **This file** defines *whether a given screen is built correctly* (the mechanics below).

> How to use: copy the checklist into the build/review notes for a screen, tick each item, and record any deliberate exceptions with a one-line reason. An unchecked item is either a fix or an explicit, justified exception — never silently skipped.

---

## 1. Mobile-first layout
- [ ] Designed **single-column, smallest-screen-first**; wider breakpoints are additive, not a shrunk desktop layout.
- [ ] No horizontal page scroll at 360–390px width. Wide content (tables, long rows) becomes **stacked cards**, not a side-scrolling table.
- [ ] Multi-column / list+side-panel layouts **stack in order of importance** (most actionable content first) on narrow screens.
- [ ] Content clears the fixed top bar and the floating bottom nav (adequate top/bottom padding; nothing hidden behind either).
- [ ] Respects safe-area insets (notch / home indicator) top and bottom.

## 2. Tap targets & spacing
- [ ] Every interactive element is **≥ 44×44px**.
- [ ] Generous spacing between adjacent tap targets — no mis-tap risk on primary actions.
- [ ] Primary actions sit within comfortable **thumb reach** (lower half of the screen where possible).
- [ ] **No interaction depends on hover.** Everything works on a single tap.

## 3. Navigation
- [ ] Uses the shared **bottom nav pattern** (never a shrunk sidebar). Per the vision: **Home · Patients · Calendar** + floating **(+) Quick start**.
- [ ] Active destination is unmistakably marked (filled/ink active state, muted inactive).
- [ ] Secondary destinations live in a **bottom sheet**, grouped logically — never one long flat list.
- [ ] **No duplicate entry points** to the same queue/list without a precise, distinct label explaining the difference.
- [ ] Back / close is always reachable one-handed.

## 4. Visual hierarchy
- [ ] One clear primary action per screen — visually dominant, not competing with equal-weight CTAs.
- [ ] Type hierarchy is obvious at a glance (title → section → body → meta), using the locked type scale.
- [ ] Scannable in ~2 seconds: a busy pharmacist can find the next action without reading everything.
- [ ] Deadlines / financially time-sensitive items get **strong, distinct emphasis** — not the same treatment as a routine stat card.

## 5. Color-to-meaning (locked, from CLAUDE.md)
- [ ] **Red / strong warning** used *only* for genuinely urgent or error states (same-day deadline, closing clinical window, hard error).
- [ ] **Amber** = routine "needs action" / worth-a-second-look — not urgent.
- [ ] **Neutral gray/beige** = routine informational (e.g., "eligible again in 30 days" is informational, never red/orange).
- [ ] **Teal/green** is the single primary action color. **Blue** stays a trust/secondary accent.
- [ ] The same badge color never carries two different meanings on one screen.
- [ ] **Violet/purple gradient** appears *only* on AI-draft indicators — nowhere else.
- [ ] No new hex/gradient/shadow/font introduced; if the screen seems to need one, it's flagged as a question, not invented.

## 6. Money visibility (vision §5)
- [ ] Every actionable clinical row shows **name + fee + action together** — the fee is part of the decision, never buried behind a tap.
- [ ] Fees use tabular figures and are legible at a glance.

## 7. Safety & compliance signals (vision §6 — non-negotiable)
- [ ] Red flags, formulary restrictions, and high-severity interactions are the **first thing visible** when relevant — never nested or requiring extra taps.
- [ ] Severity is visually tiered: high = red/urgent (most prominent), moderate = amber, minor = muted/low-priority.

## 8. AI-generated content (from CLAUDE.md)
- [ ] AI-drafted fields are **visually distinct** from human-entered data (violet chip / subtle tint — not identical styling).
- [ ] Every AI draft is **editable/overridable in one tap** — never forced as-is.
- [ ] AI content is **never silently auto-submitted**; there's an explicit confirm step.

## 9. Session shell consistency (vision §3)
- [ ] Clinical sessions reuse the **same shell**: same step-tab pattern, same collapsible Patient/Medications panel, same AI-draft pattern.
- [ ] Sign/record buttons follow convention: **full-strength teal** = legally signed action; **lighter teal** = "record & continue."
- [ ] Nothing in the shell is re-invented per module; only the clinical content inside changes.

## 10. Lists that can scale
- [ ] Any list that could grow (patients, claims, activity, queues) has **search / filter / sort from day one** — not designed only for 3–5 sample rows.
- [ ] Filters/sort controls are reachable and thumb-friendly (horizontal pill scroll is fine; keep active state clear).

## 11. States (design alongside the happy path, not after)
- [ ] **Empty state** designed (clear, encouraging, with the next action).
- [ ] **Loading state** designed (skeleton/placeholder, no layout jump).
- [ ] **Error state** designed (plain-language message + recovery action).

## 12. Content & tone
- [ ] Button/action labels are **specific**, never generic ("Start MedsCheck Annual", not "New Assessment").
- [ ] Patient-facing / counselling text avoids clinical jargon (describe symptoms in plain language per CLAUDE.md).
- [ ] Event/activity items are visually differentiated by type (icon or subtle per-category color), not a flat wall of same-weight text.

## 13. Accessibility
- [ ] Text contrast meets AA in **both light and dark**.
- [ ] All controls are keyboard/focus reachable with a visible focus ring.
- [ ] Icons that carry meaning have text labels or `aria-label`s.
- [ ] Honors `prefers-reduced-motion` (animations degrade gracefully).

## 14. Token & cross-file consistency
- [ ] Uses the canonical `tailwind.config` + `<style>` block copied from the reference page — no drift.
- [ ] Side-by-side checked against an existing screen (e.g., `dashboard.html`) for pixel-consistent color/shadow/spacing — not "close enough."
- [ ] Dark mode verified, not assumed.
