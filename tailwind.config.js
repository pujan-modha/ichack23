/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dracula Colors:

        'dracula': '#282a36', //Background
        'dracxt': '#f8f8f2', //Text
        // 'pracula': '#8be9fd', //Cyan
        //'pracula': '#50fa7b', //Green
        //'pracula': '#ffb86c', //Orange
        // 'pracula': '#ff79c6', //Pink
        'pracula': '#bd93f9', //Purple - Default
        //'pracula': '#ff5555', //Red
        //'pracula': '#f1fa8c', //Yellow



        // <!-- ### --> //

        // IEEE Colors:

        // 'dracula': '#000000', //Background
        // 'dracxt': '#ffffff', //Text
        // 'pracula': '#00629B' //Accent
      },
    },
  },
  plugins: [],
};