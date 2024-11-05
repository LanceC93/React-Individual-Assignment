/*import type { NextConfig } from "next";

const nextConfig = {
  images: {
     remotePatterns: [
         {
           hostname: '**',
         }
      ],
   },
};*/

module.exports = {
   images: {
      remotePatterns: [
          {
            hostname: '**',
          }
       ],
    },
   reactStrictMode: false,
 }

//export default nextConfig;
