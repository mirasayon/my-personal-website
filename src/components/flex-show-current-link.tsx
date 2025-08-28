"use client";
import { usePathname } from "next/navigation";
import { Linker } from "./utils/linker";

export function ShowCurrentLoc() {
    const pn = usePathname();
    return (
        <div className=" flex flex-col p-2 gap-2 h-screen items-center justify-center">
            <Linker
                href="/"
                className={`p-1.5 w-40 ${
                    pn === "/" ? "bg-violet-700" : "hover:bg-violet-700/30"
                }`}
                type={"raw"}
            >
                Home
            </Linker>
            <Linker
                href="/buy-me-ramen"
                className={`p-1.5 w-40 ${
                    pn === "/buy-me-ramen"
                        ? "bg-violet-700"
                        : "hover:bg-violet-700/30"
                }`}
                type={"raw"}
            >
                Buy me ramen🍜
            </Linker>
        </div>
    );
}

