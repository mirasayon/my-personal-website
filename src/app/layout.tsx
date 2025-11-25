import "#/styles/globals.tailwind.css";
import localFont from "next/font/local";
import type React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { envConfig } from "#/configs/env";
import { ShowCurrentLocation } from "%/show-current-location";
const protoFont = localFont({
    src: "../assets/fonts/0xProtoNerdFontMono-Regular.woff2",
});
export default function __Root_Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" translate="yes">
            <body className={protoFont.className}>
                <div className=" flex flex-col justify-center flex-wrap">
                    <div className=" flex justify-center">
                        <ShowCurrentLocation />
                    </div>
                    <div className=" ">{children}</div>
                </div>
            </body>
            {envConfig.isProd && envConfig.googleAnalyticsId && (
                <GoogleAnalytics gaId={envConfig.googleAnalyticsId} />
            )}
        </html>
    );
}
