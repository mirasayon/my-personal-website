const logoSizes = 23;
import { Links } from "#/constants/links";
import { Linker } from "./utils/linker";
import { CopyLinkButton } from "./utils/copy-link";
export function Contacts() {
    return (
        <div className={" flex flex-col justify-center items-center"}>
            <span className={" font-bold "}>Contacts</span>
            <div className=" gap-2 flex flex-col justify-center items-start">
                {Links.map((_link) => {
                    return (
                        <div
                            key={_link.link + _link.name}
                            className=" outline-2 p-2 w-85 flex justify-between outline-violet-500/50"
                        >
                            <Linker
                                href={_link.link}
                                className={"flex"}
                                type="raw"
                            >
                                <img
                                    loading="lazy"
                                    className={"logo"}
                                    src={_link.icon_path}
                                    alt={`${_link.name} icon`}
                                    width={logoSizes}
                                    height={logoSizes}
                                />
                                <span className={"mx-2"}>
                                    {_link.link_render_name}
                                </span>
                            </Linker>
                            <CopyLinkButton
                                text={_link.link}
                                key={_link.link}
                                size="sm"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
