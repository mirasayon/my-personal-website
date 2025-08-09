import { xLinks } from "#/constants/links";
import { Linker } from "./utils/linker";

export function Bio() {
    return (
        <div className=" flex flex-col text-center justify-center flex-wrap">
            <div>Node.js Web developer</div>
            <div>Always eager to learn new technologies.</div>
            <div>
                My projects:
                <div className=" flex gap-3 flex-col">
                    <Linker href={xLinks.reanime} type="site">
                        {xLinks.reanime}
                    </Linker>
                </div>
            </div>
            <div>
                <div className="font-bold text-violet-400 text-wrap mx-4">
                    I am currently actively looking for work. Always in touch
                    {":)"}
                </div>
            </div>
        </div>
    );
}
