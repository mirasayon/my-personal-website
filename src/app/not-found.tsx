import { Linker } from "#/utils/linker";
import type { Metadata } from "next";

export default function __NotFoundPage() {
    return (
        <div className={"flex justify-center flex-col items-center p-10 gap-8"}>
            <h2>Page Not Found</h2>
            <Linker href="/" type="raw">
                Return Home
            </Linker>
        </div>
    );
}
export const metadata: Metadata = {
    title: "Page Not Found",
};
