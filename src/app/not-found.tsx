import { Linker } from "#/components/utils/linker";

export default function __NotFoundPage() {
    return (
        <div
            className={" flex justify-center flex-row items-center p-20 gap-8"}
        >
            <h2>Page Not Found</h2>
            <Linker href="/" type="raw">
                Return Home
            </Linker>
        </div>
    );
}
