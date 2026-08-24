# AgileRx — Agile Pharmas

A companion app for pharmacies that helps **find, document, and bill funded clinical services** — built mobile-first as a static, no-build prototype.

**🔗 Live demo:** https://nisreen24.github.io/agilerx/

---

## Modules
- **Landing** (`index.html`) & **Sign in** (`signin.html`)
- **Dashboard** — daily clinical-services overview
- **MedsCheck** — annual medication reviews (+ session workspace)
- **Minor Ailments** — assess & prescribe (+ session)
- **Vaccinations & Injections** — booking, lots & administration (+ session)
- **Patients** — patient records
- **Incident Reporting** (OCP AIMS 2027) — the full flow:
  - **Record** a medication event (anonymous by design, with **speech-to-text dictation** & an identifier guard)
  - **Causal analysis & action plan** (with AI-draft assist)
  - **Share learnings** with staff
  - **De-identified NIDR** minimum data set (transparent “what leaves vs. what stays”)

## Tech
Static HTML pages + **Tailwind (CDN)** + a shared inline config/`<style>` block. No build step, no framework. Light/dark themes throughout, consistent design tokens (teal/blue/amber/neutral, violet reserved for AI drafts only).

## Run locally
```bash
node serve.mjs
# then open http://localhost:3000
```

---

*A venture of **The Agile Group** — building in Ontario, Canada.*
