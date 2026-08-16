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

### From legal setup to first paid load

1. Form an LLC with your state's Secretary of State ($50-500).
2. Get a free EIN from the IRS.
3. Open a business bank account.
4. Get errors-and-omissions insurance.
5. Buy a laptop/phone and a load board subscription (DAT One or Truckstop.com, or 123Loadboard while pre-DOT/MC - see above).
6. Learn load boards, rate benchmarking, Hours-of-Service rules, and broker vetting.
7. Draft a standard dispatch service agreement (fee %, payment terms, responsibilities, termination) - see Legal template above.
8. Find your first carrier client - target new-authority owner-operators first.
9. Get the agreement signed before booking any loads.
10. Source and negotiate their first load on the board.
11. Confirm the load, handle paperwork/check calls, track delivery.
12. Invoice your fee (5-10% of that load, or a flat rate) and collect first pay.

### Finding carrier clients

This is normally the hardest part of the business - more sales problem than logistics problem.

- **Target new-authority carriers first.** Search FMCSA's SAFER database for carriers that just got their operating authority. They don't have a dispatcher yet and need loads immediately, so they convert far faster than established fleets who already have someone.
- **Owner-operator Facebook groups.** Give useful answers for a while before ever pitching - showing up only to sell gets a group flagged and ignored fast.
- **Cold email over cold calling.** Truck owners are driving, not sitting at a desk to answer calls, so email to newly registered carriers scales better. Skip cold texting - unsolicited texts to business numbers carry real TCPA risk.
- **Carrier directories** (e.g. CarrierSource) for searching trucking companies by location with direct contact info.
- **Truck stops and industry shows.** Business cards and a short pitch at truck stops, or bigger swings like the Mid-America Trucking Show, for face-to-face trust building.
- **Offer a free trial week.** No commitment, no fee, just prove a good load can be found. Usually the easiest way to get a first yes from a carrier who's never used a dispatcher before.
- **Ask for referrals** once there's even one happy client - this is where growth starts compounding instead of relying on cold outreach.

### Finding loads (once a carrier is signed)

1. Post the truck's availability and search freight on the load board (123Loadboard pre-authority; DAT/Truckstop once the carrier has a DOT/MC number).
2. Check rate benchmarking data (e.g. DAT RateView) before accepting anything, so nothing gets booked under market rate.
3. Vet the broker posting the load - check credit score and payment history before committing a truck to their freight.
4. Negotiate the rate directly with the broker rather than accepting the posted number as final.
5. Book the load, send the rate confirmation to the driver, and track it through delivery for clean invoicing once it's done.

## Still open

- Real backend and auth (Supabase + Vercel) to make sign-ups, signatures, and job acceptance persistent
- Resolve the broker-authority question before /ship goes live for real
- Attorney review of the dispatch agreement template
- Actual load data source once past the demo stage
