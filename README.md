## Tech stack

- `Next.js 14 (app router)`
- `React 18`
- `JavaScript`
- `Node 18+`
- `npm` package manager

## Summary

This is the link to the website: https://otsu-website-assessment.vercel.app/

I built the "Our Team" page using the Next.js App Router, with employees grouped into Executives, Board of Directors, and Staff. Each member is displayed in a reusable employee card that includes their profile image, full name, and title. I also added `alt` text to support accessibility.  

For the layout, I designed it mobile-first using CSS Grid so it flows as a single column on smaller screens and expands into multiple columns on larger screens. This ensures the page is fully responsive across desktop and mobile. For styling, I used CSS Modules to keep everything maintainable.  

To give the project more of a finished website feel, I also added some placeholder navigation buttons in the header. While they don’t link anywhere, they help the page look more complete. I also matched some of the colours directly from the official OTSU website so that the design felt consistent with their brand identity.  

Finally, I kept the implementation lightweight by avoiding unnecessary external libraries, ensured semantic HTML with proper heading structure, and confirmed the page passed all ESLint checks. Overall, my goal was to make the page responsive, accessible, and on-brand while keeping the codebase clean and easy to maintain.
