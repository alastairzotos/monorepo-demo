/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-hook-form-antd', 'rc-util', '@ant-design/icons', '@ant-design/icons-svg', 'rc-pagination', 'rc-picker']
};

export default nextConfig;
