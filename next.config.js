require('dotenv').config();
const nextConfig = {
  // basePath: '/',
  reactStrictMode: false,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'alliancerecruitmentagencyae.aistechnolabs.pro' },
      { protocol: 'https', hostname: 'www.alliancerecruitmentagency.ae' },
      { protocol: 'https', hostname: 'allianceae-10072.kxcdn.com' },
      { protocol: 'https', hostname: 'allianceaeapi.alliancerecruitmentagency.ae' },
      { protocol: 'https', hostname: 'apialliancerecruitmentagencyae.aistechnolabs.pro' },
    ],
  },
  env: {
    LOCAL_HOST: process.env.LOCAL_HOST,
    PASSWORD: process.env.PASSWORD,
  },
   // Add empty turbopack config to silence the error (we're using webpack for jQuery support)
   turbopack: {},
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    )
    return config
  }
};

module.exports = nextConfig;