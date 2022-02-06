/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},

	images: {
		domains: ['i.annihil.us'],
	},
};

module.exports = nextConfig;
