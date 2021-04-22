const fadeIn = {
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

export { fadeIn };
