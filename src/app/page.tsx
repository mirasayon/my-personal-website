import type { Metadata } from "next/types";
import { Contacts } from "%/contacts";
import { MainBioText } from "#/components/main-bio-text";
import { MY_AGE_NOW } from "#/constants/base";

export default function __HomePage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={"flex flex-col items-center p-2"}>
                <div>{"*".repeat(MY_AGE_NOW)}</div>
                <MainBioText />
                <div className="flex flex-wrap justify-center">
                    <img
                        loading="lazy"
                        src={"/_assets/vamola-chan-i-love-you.png"}
                        className={"p-5 h-80"}
                        alt={"Vamola chan"}
                    />
                    <Contacts />
                </div>
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Hello World :3",
};
