/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'encrypted-tbn0.gstatic.com'
    ]
  }
}