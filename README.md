# Personal Portfolio Website

Live Pages URL: https://btanat.github.io/iwamad-sis1-portfolio/

## About the Site
This is my personal portfolio website created for the IWaMAD SIS 1 assignment. It showcases my background as an IT Management student at KBTU, my skills, and projects I built during Weeks 1-4. The site is a responsive single-page application built with HTML5, CSS3, and JavaScript.

## Design Decisions
1. **Layout Adaptability:** I used CSS Grid with a Mobile-First approach where projects display in a single column on mobile (375px) and expand to 3 columns on desktop (1200px) to prevent horizontal scrolling and ensure readability.
2. **Color Palette & Theme Toggle:** I implemented CSS custom variables tied to `data-theme` on the `html` element so that switching between light and dark modes instantly updates colors across the entire page.
3. **Accessibility Focus:** Standard browser default outlines were replaced with clear, high-contrast focus rings (`:focus-visible`) so keyboard-only users can navigate through interactive elements without losing track.