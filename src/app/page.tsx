import type { Metadata } from "next/types";
import { Contacts } from "%/contacts";
import { MainBioText } from "#/components/main-bio-text";
import { Constants } from "#/constants/base";

export default function __RootPage() {
    return (
        <div>
            <div className=" flex flex-col justify-center mx-20 items-center">
                <div className={" "}>{"*".repeat(Constants.my_age)}</div>
            </div>
            <div className=" flex flex-row justify-center flex-wrap">
                <div className={"flex flex-col items-center p-2"}>
                    <MainBioText />
                    <img
                        src={"/_assets/vamola-chan-i-love-you.png"}
                        className={"p-2 h-100"}
                        alt={"Vamola chann"}
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

