import { Linker } from "#/components/utils/linker";

export default function NotFound() {
    return (
        <div className={" flex justufi-center flex-col p-20 gap-8"}>
            <h2>Page Not Found</h2>
            <Linker href="/" type="raw">
                Return Home
            </Linker>
        </div>
    );
}
