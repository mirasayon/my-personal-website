import type { NextConfig } from "next";

const config: NextConfig = {
    poweredByHeader: false,
    devIndicators: {
        position: "bottom-left",
    },
    allowedDevOrigins: [
        "192.168.0.105", // covers http://192.168.0.105:3000
    ],
};

export default config;
