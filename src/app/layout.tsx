import "#css/globals.tailwind.css";
import localFont from "next/font/local";
import type React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cEnv } from "#configs/env";
import type { jsxChildren } from "#/types/next";
const protofont = localFont({
    src: "./_fonts/0xProtoNerdFontMono-Regular.woff2",
    display: "swap",
    preload: false,
});
export default function Root_Layout({ children }: jsxChildren) {
    return (
        <html lang="en" translate="yes">
            <body className={`${protofont.className} `}>{children}</body>
            {cEnv.mode.prod && <GoogleAnalytics gaId={cEnv.gaid} />}
        </html>
    );
}
