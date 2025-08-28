import { SupportMe } from "#/components/support-me";
import type { Metadata } from "next";

export default function BuyMeRamen() {
    return (
        <div>
            <div className=" flex flex-col justify-center mx-20 items-center">
                <SupportMe />
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Buy me Ramen🍜",
};

