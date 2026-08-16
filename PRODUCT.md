# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (user's choice). Static output, deployed to GitHub Pages via Astro's official
GitHub Actions deploy workflow. Custom domain already purchased by the owner —
presumed `joekhosbayar.dev` from the repository name; confirm the exact hostname
before writing the `CNAME` / DNS records.

Hosting was chosen over S3 + CloudFront deliberately: GitHub Pages gives free
auto-HTTPS on a custom domain and push-to-deploy with no infrastructure, and the
header/edge control that S3 + CloudFront would add is not needed by this site.
Consequence to preserve: **the repository is public**, so nothing private may be
committed to it.

## Users

Primary user: a recruiter or hiring manager evaluating Joe Khosbayar for a software
engineering role. They arrive from a résumé link, a job application, or a search for
his name; they are scanning quickly, in a batch of many candidates, and deciding
within seconds whether he is worth a longer look.

Secondary, and never at the primary's expense: peer engineers who arrive from a
shared link and want technical substance.

## Product Purpose

A personal portfolio site that establishes credibility and produces contact. Success
is a hiring-side reader who understands what Joe builds, believes he can do the job,
and reaches out — not time-on-site, not depth of browsing.

The site is an argument, not an archive.

## Positioning

General software engineering — backend, systems, and full-stack product work. Not
specialized into frontend, ML, or infrastructure as the headline claim.

The one thing a neighboring portfolio cannot truthfully copy is Joe's actual work
history and shipped projects. The site's differentiation therefore rests on real,
specific evidence rather than on framing or self-description.

## Operating Context

- Read fast, often on a phone, often as one of many tabs in a screening session.
- Frequently reached alongside a résumé PDF, a LinkedIn profile, and a GitHub
  profile; it should complement those rather than duplicate them wholesale.
- The reader's next action, if the site works, is an email or a message — the path
  to contact must never be more than one obvious step away from anywhere.

## Capabilities and Constraints

- Static site, no backend, no database, no authentication.
- Public repository (see `## Stack`).
- Content areas confirmed to exist: work history, shipped projects, written posts.
  Written posts imply a content-collection structure with room to grow over time.
- **Undecided:** exact site structure and route set. Not yet chosen.
- **Undecided:** whether written posts ship in the first release or land after the
  portfolio core.

## Brand Commitments

None recorded. The owner has not set a name treatment, voice, logo, or identity
constraint. Nothing here is binding yet.

## Evidence on Hand

The owner has real content in all three categories and will supply it by pointing at
files in this repository or at external URLs (GitHub, LinkedIn, an existing résumé):

- **Work history** — real roles, companies, and dates. Not yet provided.
- **Shipped projects** — real repos, links, or live demos. Not yet provided.
- **Written posts** — existing essays, drafts, or notes. Not yet provided.

**Absences that future work must not fabricate.** As of this record, no employer
name, job title, date, project, metric, technology claim, post, testimonial,
endorsement, client, or credential has been supplied. None may be invented, guessed,
or filled with a realistic-looking placeholder that reads as fact. Until the owner
provides the real material, build with structure and visibly empty slots.

## Product Principles

1. **The reader is skimming.** Every screen must survive a five-second scan and still
   leave the right impression. Depth is available, never required.
2. **Evidence over adjectives.** Show shipped work, real roles, and real writing.
   Self-description carries no weight with the primary reader.
3. **Contact is never far.** From any point in the site, reaching out is one obvious
   step.
4. **The site is itself a work sample.** For an engineering audience, sloppy craft is
   negative evidence regardless of what the copy claims.
5. **Never invent Joe.** Facts about him come from him. Placeholder structure is
   honest; fabricated detail is not.

## Accessibility & Inclusion

No product-specific requirement was established beyond general good practice for a
public web page.
