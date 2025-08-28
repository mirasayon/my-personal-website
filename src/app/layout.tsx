import "#css/globals.tailwind.css";
import localFont from "next/font/local";
import type React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cEnv } from "#/configs/env";
import type { TJsxChildren } from "#/types/next";
import { ShowCurrentLoc } from "#/components/flex-show-current-link";
const protofont = localFont({
    src: "./_fonts/0xProtoNerdFontMono-Regular.woff2",
    display: "swap",
    preload: false,
});
export default function Root_Layout({ children }: TJsxChildren) {
    return (
        <html lang="en" translate="yes">
            <body className={`${protofont.className} `}>
                <div className=" flex flex-row justify-center">
                    <ShowCurrentLoc />
                    <div className=" w-300 h-screen">{children}</div>
                </div>
            </body>
            {cEnv.mode.prod && cEnv.gaid && (
                <GoogleAnalytics gaId={cEnv.gaid} />
            )}
        </html>
    );
}

