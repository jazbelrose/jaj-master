# JAJ blog -- rewrite, August 2026

## What happened to the old blog

17 posts, written 2021-2024, **all of them offline**. Amplify only ships `v2/dist`; the
`blog/` folder sits at the repo root and was never in the deployed artifact. Every URL 404s
and nothing on the live site links to it. No traffic to protect, no ranking to preserve, no
redirect to plan. Clean slate.

Twelve of the seventeen were generic filler with no connection to any line (personal
branding, content strategy, digital marketing, the metaverse, catering, nutrition, graffiti
typography, year-stamped trend pieces). Retired.

## The rule

**JAJ is the parent. It writes about the house and about the buyer's problem, never about the
ventures' products.**

If a post would rank for a query that belongs to Drapery Society or XCTN, it does not go
here. Same reasoning that removed the portfolio: the parent hands traffic down to the
specialists, it does not absorb it.

| JAJ | A venture |
|---|---|
| How to choose a production partner | How drape is priced |
| What a realistic build timeline looks like | NFPA 701 vs ASTM E84 |
| Who is liable when an install fails | Flat count vs finished count |
| Where production is going | How rental houses bill |

## Two jobs, two kinds of post

This is the important part. The brief is "pull users **and** look solid." Those are different
jobs and one kind of post cannot do both.

**Track A -- acquisition.** Answers a question a buyer actually types, before they know what
they need. Real search intent, written for someone who is not yet talking to you. These are
what bring people in.

**Track B -- authority.** Positioning and point of view. Nobody searches for these. They are
what someone reads *after* they land, and they are what makes the house look like an
institution rather than a vendor. Link to them from Track A posts.

**Track C -- vision.** Where the industry goes and where the house is taking it. These do not
rank quickly and they are not supposed to. They are what a partner, an investor, or a senior
buyer reads to decide whether you are ahead or behind. They also age fastest, so date them
and mean them.

Publish roughly 2 acquisition posts for every 1 of the others. Acquisition brings the reader,
authority closes them, vision makes them remember you.

## The posts

### Track A -- acquisition (write these first)

| # | File | The query behind it |
|---|---|---|
| A1 | `A1-choosing-a-production-partner.md` | "how to choose an event production company" |
| A2 | `A2-what-to-ask-before-you-sign.md` | "questions to ask a production vendor / RFP" |
| A3 | `A3-how-long-a-build-actually-takes.md` | "custom fabrication lead time" |
| A4 | `A4-in-house-vs-subcontracted.md` | "in-house vs subcontracted fabrication" |
| A5 | `A5-who-is-liable-when-it-fails.md` | "who is responsible if an install fails" |
| A6 | `A6-why-deposits.md` | "production company deposit / payment terms" |

### Track B -- authority

| # | File | Angle |
|---|---|---|
| 01 | `01-one-contract.md` | The cornerstone. Fabricator and installer as one company. |
| 02 | `02-how-a-job-moves.md` | The flow, brief through strike. |
| 03 | `03-the-handoff-problem.md` | Why jobs fail at the seams. |
| 04 | `04-what-self-performed-means.md` | What the house carries between jobs. |
| 05 | `05-hired-for-a-duration.md` | The crew model. A task is not a unit of work. |
| 07 | `07-one-budget-end-to-end.md` | Estimate to invoice as one chain of custody. |

### Track C -- vision

| # | File | Angle |
|---|---|---|
| V1 | `V1-agentic-production.md` | Agentic systems running production ops. The house already does this. |
| V2 | `V2-software-eats-the-shop.md` | Why a production company wrote its own operating system. |
| V3 | `V3-the-next-ten-years.md` | Where design-driven execution goes. `[[CONFIRM]]` Jaz's actual thesis. |

## Hard constraints

- **No pricing.** No rates, no per-panel numbers, no margin. The DS estimating standard flags
  itemized price lists as the highest-risk artifact to publish. A competitor needs your line
  items far more than your renders.
- **No named clients, venues, or jobs.**
- **No invented facts.** Anything needing a real number is marked `[[CONFIRM]]`.
- **No em dashes.** Double hyphens or commas.
- Voice: plain, declarative, confident. No "we're passionate about." No exclamation marks.

## What makes these rank, in order of weight

1. **Answer the question in the first paragraph.** Not after 400 words of context.
2. **Be specific enough to be useful to someone who never hires you.** Generic advice ranks
   nowhere because everyone already wrote it.
3. **Length follows the question.** 900-1400 words on a real buyer question, not 300.
4. **One post per query.** Do not write three posts circling the same thing.
5. **Link down to the ventures.** Every acquisition post should hand the reader to
   draperysociety.com or xctnproduction.com when the question turns into a product question.
   That is the parent doing its job.

## Blockers before any of this matters

1. **The blog does not ship.** Move it inside `v2/public/` so Vite copies it, or give it its
   own build step in `amplify.yml`. Writing posts changes nothing until this is fixed.
2. **No `sitemap.xml`, no `robots.txt`.** Both 404 on the live domain. Publishing content
   without them means asking Google to find it by accident.
3. **Author and dates.** Decide whether posts are bylined by Jaz, by Leah, or by the house.
   Bylines from a real person outperform an anonymous company voice.
