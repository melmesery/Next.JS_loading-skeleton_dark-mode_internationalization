/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")('./utils/i18n.ts');

module.exports = withNextIntl({
  images: {
    dangerouslyAllowSVG: true,
    domains: ["placehold.co"],
  },
});
