import { SupportMeComponent } from "#/components/support-me";
import type { Metadata } from "next";
import { Suspense } from "react";
export default function __BuyMeARamen() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SupportMeComponent />
        </Suspense>
    );
}

export const metadata: Metadata = {
    title: "Buy me Ramen🍜",
    description:
        "If you enjoy what I do and want to support my work - feel free to send a tip. Every bit helps ",
};
