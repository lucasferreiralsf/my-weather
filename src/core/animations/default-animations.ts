const defaultContainerVariants = {
  enter: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  initial: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const bottomToTopVariant = {
  initial: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const rightToLeftVariant = {
  initial: {
    x: 100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export { bottomToTopVariant, rightToLeftVariant, defaultContainerVariants };
