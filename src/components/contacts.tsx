const logoSizes = 40;
const links = " flex my-auto";
import { Links } from "#consts/links";
import { Linker } from "./utils/linker";
import { CopyLinkButton } from "./utils/copy-link";
export function Contacts() {
    return (
        <div className={" flex flex-col justify-center items-center"}>
            <span className={" m-2  "}>Contacts</span>
            <div className=" gap-4 flex flex-col justify-center items-start">
                {Links.map((_link) => {
                    return (
                        <div
                            key={_link.link + _link.name}
                            className=" outline-2 p-2 w-96 flex justify-between outline-blue-700"
                        >
                            <Linker
                                href={_link.link}
                                className={links}
                                type="raw"
                            >
                                <img
                                    className={" logo"}
                                    src={_link.icon_path}
                                    alt={`${_link.name} icon`}
                                    width={logoSizes}
                                    height={logoSizes}
                                />
                                <span className={" my-auto  m-2"}>
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
