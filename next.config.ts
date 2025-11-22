import type { NextConfig } from "next";

const config: NextConfig = {
    poweredByHeader: false,
    reactCompiler: true,
    devIndicators: {
        position: "bottom-left",
    },
    allowedDevOrigins: ["192.168.0.105"],
};

export default config;
