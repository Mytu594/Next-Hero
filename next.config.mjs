/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['example.com'], // 如果你的图像是从其他域名获取的
        unoptimized: true,
      },
};

export default nextConfig;
