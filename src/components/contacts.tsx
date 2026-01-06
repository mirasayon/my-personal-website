import { LINKS_SOCIAL } from "#/constants/links";
import { Linker } from "../utils/linker";
import { CopyLinkButton } from "../utils/copy-link";
export function Contacts() {
    return (
        <div className="flex flex-col p-2">
            <span className="font-bold pb-3">Contacts</span>
            <div className="gap-2 flex flex-col justify-center items-start">
                {LINKS_SOCIAL.map((link) => {
                    return (
                        <div
                            key={link.url + link.name}
                            className="p-1 w-70 flex justify-between"
                        >
                            <Linker
                                href={link.url}
                                className={"flex"}
                                type="raw"
                            >
                                <img
                                    className="dark:invert py-1"
                                    src={link.icon_path}
                                    alt={`${link.name} icon`}
                                    width={23}
                                    height={23}
                                />
                                <span className={"mx-2"}>
                                    {link.link_render_name}
                                </span>
                            </Linker>
                            <CopyLinkButton text={link.url} key={link.url} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
