import "#/styles/globals.tailwind.css";
import localFont from "next/font/local";
import type React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { envConfig } from "#/configs/env";
import { ShowCurrentLocation } from "%/show-current-location";
const protofont = localFont({
    src: "../assets/fonts/0xProtoNerdFontMono-Regular.woff2",
    display: "swap",
    preload: false,
});
export default function Root_Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" translate="yes">
            <body className={protofont.className}>
                <div className=" flex flex-row justify-center flex-wrap">
                    <div className=" w-1/5  h-screen flex justify-center">
                        <ShowCurrentLocation />
                    </div>
                    <div className=" w-4/6 ">{children}</div>
                </div>
            </body>
            {envConfig.isProd && envConfig.gaid && (
                <GoogleAnalytics gaId={envConfig.gaid} />
            )}
        </html>
    );
}

