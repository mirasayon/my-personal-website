import type { Metadata } from "next/types";
import { xLinks } from "#/constants/links";
import type React from "react";
import { Contacts } from "%/contacts";
import { Bio } from "#/components/bio";
import { Constants } from "#/constants/base";
import { SupportMe } from "#/components/support-me";
import { Linker } from "#/components/utils/linker";

export default function Root_Page() {
    return (
        <div>
            <div className=" flex flex-col justify-center mx-20 items-center">
                <span className={" "}>{"*".repeat(Constants.my_age)}</span>
                <span>
                    Open Source contributor. Developer{" "}
                    <Linker href={xLinks.reanime} type="site">
                        {xLinks.reanime}
                    </Linker>
                </span>
                <Linker href={xLinks.reanime} type="site">
                    <img
                        className={" "}
                        src="/_assets/icons/reanime_icon.png"
                        alt="rea icon"
                        width={40}
                        height={40}
                    />
                </Linker>
            </div>
            <div className=" flex flex-row justify-center flex-wrap">
                <div
                    className={
                        "flex justify-start flex-col items-center bg-black/70"
                    }
                >
                    <Bio />
                    <Contacts />
                    <img
                        src="/_assets/boruto.gif"
                        width={1280 / 3}
                        height={720 / 3}
                        loading="lazy"
                        className="m-4"
                        alt="Boruto"
                    />
                </div>
                <SupportMe />
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Hello there",
    description: "Hello there",
};
