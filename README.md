# DispatchOS

Dispatch automation platform: load sourcing, carrier management, and automated settlements for independent truck owners.

## Live demo

https://greglivin.github.io/DispatchOS/

This is the actual site, live right now. It walks through the full intended flow: a carrier signs up, signs the dispatch agreement online, then sees available loads they can accept. There's also a page for companies that need trucks. Nothing is stored yet since this is a static demo, refreshing resets it, but the pages and flow are real.

## What this is

A dispatch service for independent truck owners. Carriers keep their own USDOT/MC authority and insurance; DispatchOS finds them loads, negotiates rates, handles the paperwork, and takes a percentage fee per load, the standard dispatcher model.

## The demo flow

- **Home** (`/`) - pitch page, links out to both sides of the business
- **Sign Up** (`/signup`) - carrier registration form (truck type, USDOT number, contact info)
- **Agreement** (`/agreement`) - the dispatch services agreement, signed electronically by typing a name and checking a consent box
- **Dashboard** (`/dashboard`) - sample available loads a carrier can accept
- **Ship** (`/ship`) - a request form for companies that need trucks, for matching with a carrier in the network

## Important: dispatcher vs. broker

This matters enough to call out directly. A dispatcher works on behalf of one carrier at a time, finding loads and negotiating rates for that carrier's own authority; no FMCSA broker authority is required, just a straightforward written dispatch agreement. The moment freight requests from shippers get matched to carriers in a network, that crosses into freight brokering, which legally requires FMCSA broker authority (a $75,000 surety bond and separate registration), not the lightweight dispatcher setup.

The `/ship` page in this demo represents that shipper-matching function. It's fine as a UI demo, but before it becomes a real, live feature, this needs either proper broker authority or a different structure (e.g. shippers contract directly with a specific carrier rather than freight flowing through DispatchOS as the middleman). Not a blocker today, just something to resolve before this part goes live for real.

## Legal template

A starting Independent Dispatch Services Agreement template exists as a Word doc, covering services, carrier responsibilities, compensation, independent contractor status, and liability. It's a starting point only, get it reviewed by a licensed attorney before using it with a real carrier.

## What's demo vs. real right now

Everything above is a working click-through UI, but it's all static, GitHub Pages hosts files only, there's no server or database behind it. Sign-ups, signatures, and accepted loads don't persist between visits. For this to be genuinely functional (real accounts, a signature with a real timestamp and audit trail, loads that stay accepted), the next step is a real backend: authentication, a database (Supabase is a fast way to get there), and hosting that supports server code (Vercel), not just static export.

## Rough tech stack

Next.js (App Router, TypeScript, Tailwind) for the frontend. Static export today for the GitHub Pages demo; will move to Vercel plus a database once real accounts and persistence are needed.

## Finding work

Load sourcing plan: 123Loadboard for load access (DAT and Truckstop require a DOT/MC number to even create an account, which locks out a pure dispatcher). Carrier recruitment plan: FMCSA's public SAFER database for prospecting, owner-operator Facebook groups, and direct outreach, starting with carriers already in the network before scaling further.

## Still open

- Real backend and auth (Supabase + Vercel) to make sign-ups, signatures, and job acceptance persistent
- Resolve the broker-authority question before /ship goes live for real
- Attorney review of the dispatch agreement template
- Actual load data source once past the demo stage
