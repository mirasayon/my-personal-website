import "#/styles/globals.tailwind.css";
import localFont from "next/font/local";
import type React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { envConfig } from "#/configs/env";
import { ShowCurrentLocation } from "#/components/show-current-location";
const protoFont = localFont({
    src: "../assets/fonts/0xProtoNerdFontMono-Regular.woff2",
});
export default function __Root_Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={
                    protoFont.className +
                    " flex flex-col justify-center flex-wrap"
                }
            >
                <ShowCurrentLocation />
                {children}
            </body>
            {envConfig.isProd && envConfig.googleAnalyticsId && (
                <GoogleAnalytics gaId={envConfig.googleAnalyticsId} />
            )}
        </html>
    );
}
