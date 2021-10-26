import facepaint from 'facepaint';

const breakpoints = [320, 375, 768, 1024, 1280, 1440];

const mediaquery = facepaint(
  breakpoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`),
);

export default mediaquery;
