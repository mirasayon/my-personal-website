import { SupportMeComponent } from "#/components/support-me";
import type { Metadata } from "next";

export default function __BuyMeARamen() {
    return (
        <div className=" flex-col pt-10 items-center flex justify-center">
            <SupportMeComponent />
        </div>
    );
}

export const metadata: Metadata = {
    title: "Buy me Ramen🍜",
    description:
        "If you enjoy what I do and want to support my work - feel free to send a tip. Every bit helps 🙏",
};
