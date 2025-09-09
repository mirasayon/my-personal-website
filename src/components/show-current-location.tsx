"use client";
import { usePathname } from "next/navigation";
import { Linker } from "./utils/linker";
function activeStyles(active: boolean) {
    let styles = "p-1.5 w-40 ";
    active
        ? (styles += "bg-violet-400 dark:bg-violet-700")
        : (styles +=
              "hover:bg-indigo-500/50 dark:hover:bg-violet-400/20 " +
              "bg-violet-400/10 hover:bg-violet-400/20 text-slate-800 dark:text-violet-100 dark:bg-violet-400/10");
    return styles;
}
export function ShowCurrentLocation() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col p-2 gap-2 items-center justify-center">
            <Linker
                href="/"
                defaultStyles={false}
                className={activeStyles(pathname === "/")}
                type={"raw"}
            >
                Home
            </Linker>
            <Linker
                href="/buy-me-ramen"
                defaultStyles={false}
                className={activeStyles(pathname === "/buy-me-ramen")}
                type={"raw"}
            >
                Buy me ramen🍜
            </Linker>
        </div>
    );
}

