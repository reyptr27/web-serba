/** @type {import('next').NextConfig} */

const pathnames = ["/reyptr27/blog-posts/master/images/**", "/reyptr27/tutorial-posts/master/images/**"];

const nextConfig = {
  images: {
    remotePatterns: pathnames.map(pathname=> ({

      protocol: "https",
      hostname: "raw.githubusercontent.com",
      port: "",
      pathname
    
    }))
  },
};

module.exports = nextConfig;
