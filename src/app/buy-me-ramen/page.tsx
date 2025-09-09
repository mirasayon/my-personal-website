import { SupportMe } from "#/components/support-me";
import type { Metadata } from "next";

export default function __BuyMeRamen() {
    return (
        <div>
            <div className=" flex-col items-center h-screen flex justify-center">
                <SupportMe />
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Buy me Ramen🍜",
};

