import type { Metadata } from "next/types";
import { Contacts } from "%/contacts";
import { MainBioText } from "#/components/main-bio-text";

export default function __HomePage() {
    return (
        <div className={"flex flex-col items-center p-2"}>
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
    );
}

export const metadata: Metadata = {
    title: "Mirasayon",
    description: "The website that no one needs",
};
