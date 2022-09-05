import { env } from "./src/env/server.mjs"
import pwaConfig from "next-pwa"

const withPWA = pwaConfig({
  dest: "public",
  register: true,
  skipWaiting: true,
})

export default withPWA({
  reactStrictMode: true,
  swcMinify: true,
})
