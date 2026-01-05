"use client";
import { usePathname } from "next/navigation";
import { Linker } from "../utils/linker";
function activeStyles(active: boolean): string {
    const BASE = "p-1.5 w-40";
    const ACTIVE = "bg-violet-400 dark:bg-violet-700";
    const INACTIVE =
        "hover:bg-indigo-500/50 dark:hover:bg-violet-400/20 " +
        "bg-violet-400/10 hover:bg-violet-400/20 text-slate-800 " +
        "dark:text-violet-100 dark:bg-violet-400/10";
    return ` ${BASE} ${active ? ACTIVE : INACTIVE} `;
}
const links: {
    url: string;
    title: string;
}[] = [
    { url: "/", title: "Home" },
    { url: "/buy-me-ramen", title: "Buy me ramen🍜" },
];
export function ShowCurrentLocation() {
    const pathname = usePathname();
    return (
        <div className="flex flex-row p-2 gap-2 items-center justify-center">
            {links.map((itemLink, index) => {
                return (
                    <Linker
                        key={index}
                        href={itemLink.url}
                        defaultStyles={false}
                        className={activeStyles(pathname === itemLink.url)}
                        type={"raw"}
                    >
                        {itemLink.title}
                    </Linker>
                );
            })}
        </div>
    );
}
