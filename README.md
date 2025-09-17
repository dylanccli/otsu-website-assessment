# OTSU Web Developer Assessment

> This project contains a small subset of the OTSU website. Candidates will build a responsive, accessible "Our Team" page using the provided brand assets.

---

## Tech stack

- `Next.js 14 (app router)`
- `React 18`
- `JavaScript`
- `Node 18+`
- `npm` package manager

## Project setup

- `npm install` (you may safely ignore any warnings during installation)
- `npm run dev`
- `npm run build` && `npm run start`
- `npm run lint` (should finish with **'No ESLint warnings or errors'**)

## Candidate task — "Our Team" page

Build a web page that displays employees' information grouped into Executives, Board of Directors, and Staff sections.

### Information provided

- Header and Footer components (see `app/layout.js`)
- Data for 4 Executives (images, full names, positions) (see `app/employees.js`)
- Data for 7 Board of Directors (images, full names, positions) (see `app/employees.js`)
- Data for 14 Staff (images, full names, positions) (see `app/employees.js`)
- OTSU brand colours, fonts, and images available in the repo
- Next.js Documentation (App Router): https://nextjs.org/docs
- You may use any additional packages/libraries you prefer

### Requirements

- Serve the webpage at `/` url route (see `app/page.js`)
  - Bonus points: Implement the page at `/our-team` or `/contact-us/our-team` url route
- Display all employees with their image, full name, and position grouped into Executives, Board of Directors, and Staff sections
- Implement a responsive layout that works on mobile and desktop
- Use the provided brand colours and assets where necessary
- You may use any CSS implementation you prefer (e.g. raw CSS, CSS Modules, Tailwind CSS, etc.)
- All images include meaningful `alt` text
- Use semantic HTML and proper heading structure (`h1`, `h2`, ...)
- Should run on the latest versions of Chrome, Firefox, and Safari

### Deliverables & submission

- A working Next.js project submitted either as a GitHub repository or a ZIP file
- Include a short summary anywhere in this file (`README.md`) describing your approach and any important decisions or trade-offs

## Summary

I implemented the "Our Team" page using Next.js App Router, displaying employees grouped into Executives, Board of Directors, and Staff sections. Each member card includes a circular profile image, name, and title, with meaningful alt text for accessibility. The layout uses CSS Grid for responsiveness, adapting from single-column on mobile to multi-column on desktop. I chose CSS Modules for styling to keep components scoped and maintainable. No external libraries were added beyond what's provided, ensuring a lightweight implementation. The page passes ESLint checks and uses semantic HTML with proper heading hierarchy.

---

Thank you for taking the time to complete and submit this assessment.
