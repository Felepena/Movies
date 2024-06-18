import Image from "next/image";

export default function Nawbar( props ) {
    return (
        <div className="flex justify-evenly items-center">
            <nav>
                <Image
                    src="/Universal-Pictures.png"
                    alt="Logo"
                    width={140}
                    height={140}
                />
            </nav>
            <div className="flex items-center ">
                <Image
                    src="/profilepic.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                />
                <span className="p-2">Muj profil</span>
            </div>
        </div>
    );
}
