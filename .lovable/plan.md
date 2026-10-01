# Rusty Nail Renovations Landing Page

## Goal
Build one premium, conversion-focused landing page for Rusty Nail Renovations LLC, presenting residential remodeling services across Genesee County and driving free-estimate inquiries.

## What I’ll build
- A transparent-to-solid sticky header with desktop navigation and an animated mobile menu.
- A cinematic full-bleed kitchen hero with service typewriter, project detail overlay, call and estimate actions.
- Editorial company introduction, eight-service showcase, project gallery, four-step process, tactile materials section, Michigan service-area presentation, clearly labeled sample testimonials, accessible FAQ, and final contact form/footer.
- A restrained warm-black, architectural-white, stone, walnut, and muted-copper visual system with premium typography and consistent section rhythm.
- Short branded preloader, scroll progress, reveal/parallax effects, tactile desktop cursor, smooth scrolling, and reduced-motion fallbacks.
- Responsive layouts and accessible navigation, controls, accordion, form labels, focus states, and semantic content.
- Route-specific title, description, social metadata, and natural local-service search language.

## Content and behavior
- Keep all navigation and CTAs on the single page using anchored scrolling, phone links, and email links.
- The estimate form will open a pre-addressed email draft with the submitted project details, since no inbox/database integration was requested.
- Testimonials will be labeled as sample placeholders, not represented as verified reviews.
- Use only the confirmed AZEK and TimberTech installer statement; no invented awards, ratings, counts, licenses, guarantees, or tenure.

## Technical details
- Implement as modular React components in the existing TanStack Start page.
- Use locally generated, optimized renovation imagery imported from the project.
- Add Motion and Lenis for interaction and scrolling, while using lightweight CSS/native scroll observation where it improves performance.
- Keep visual values in the global semantic design system and reuse shared button/card patterns.
- Validate the final page in the running preview at desktop and mobile widths, including menu, FAQ, CTA links, and form flow.
