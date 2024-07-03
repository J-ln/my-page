import Link from 'next/link'
import Image from 'next/image'
interface Props {
    image: string,
    alt: string,
    link: string
}
const NavBadges = ({ image, alt, link }: Props) => {
    return (
        <Link href={link} className="h-full w-auto flex flex-row items-center">
            <Image src={image} alt={alt} width={50} height={50} />
        </Link>
    )
}

export default NavBadges