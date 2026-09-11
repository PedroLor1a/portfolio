/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows an isolated production build while the development server is running.
  distDir: process.env.NEXT_BUILD_DIR || ".next",
};

export default nextConfig;
