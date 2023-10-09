// tailwind.keyframes.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
  const keyframes = {
    // Define your custom keyframes here
    'custom-animation': {
      '0%, 25%': { transform: 'rotate(-3deg)',backgroundColor:'blue' },
      '26%, 50%': { transform: 'rotate(3deg)', /* ... */ },
      // Add more keyframe definitions as needed
    },
  };

  addBase(keyframes);
});
