import type { Metadata } from "next/types";
import { Contacts } from "%/contacts";
import { MainBioText } from "#/components/main-bio-text";
import { Constants } from "#/constants/base";

export default function __RootPage() {
    return (
        <div className=" h-screen flex flex-col justify-center items-center">
            <div className={"flex flex-col items-center p-2"}>
                <MainBioText />
                <div className={" "}>{"*".repeat(Constants.my_age)}</div>
                <img
                    src={"/_assets/vamola-chan-i-love-you.png"}
                    className={"p-2 h-100"}
                    alt={"Vamola chann"}
                />
                <Contacts />
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Hello World :3",
};

