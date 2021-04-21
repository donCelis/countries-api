export const countryFadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      staggerChildren: 0.5,
    },
  },
};

export const move = {
  hidden: {
    opacity: 0,
    /* y: `${-200}%`, */
  },
  visible: {
    opacity: 1,
    /* y: 0, */
    transition: {
      duration: 0.8,
      type: "spring",
    },
  },
};
