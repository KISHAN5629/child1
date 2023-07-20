/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'child1',
        remotes: {
          shell: `shell@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          react: { singleton: true }, 'react-dom': { singleton: true }
        },
        exposes: {
          './header': './components/Header.js',
          './simpHeader': './components/SimpHeader.js'
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
