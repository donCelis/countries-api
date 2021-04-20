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
    y: -200,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
