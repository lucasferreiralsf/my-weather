const withFonts = require('next-fonts');

module.exports = withFonts({
   enableSvg: true,
   poweredByHeader: false,
   webpack(config, options) {
     return config;
   }
});