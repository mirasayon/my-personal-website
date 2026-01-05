import { LINKS_SOCIAL } from "#/constants/links";
import { Linker } from "../utils/linker";
import { CopyLinkButton } from "../utils/copy-link";
export function Contacts() {
    return (
        <div className={" flex flex-col pt-4 "}>
            <span className={" font-bold "}>Contacts</span>
            <div className=" gap-2 flex flex-col justify-center items-start">
                {LINKS_SOCIAL.map((link) => {
                    return (
                        <div
                            key={link.url + link.name}
                            className=" outline-2 p-2 w-85 flex justify-between outline-violet-500/50"
                        >
                            <Linker
                                href={link.url}
                                className={"flex"}
                                type="raw"
                            >
                                <img
                                    loading="lazy"
                                    className={"logo my-1"}
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
