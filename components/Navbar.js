import Image from "next/image";
export default function Navbar() {
    return (
        <header>
            <Image 
                src="/logo.png"
                width={500} 
                height={500} 
                alt="logo"
            />
        </header>
    )
}