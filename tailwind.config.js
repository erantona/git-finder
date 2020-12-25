const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
  },
  plugins: [require('tailwindcss-filters')],
};
