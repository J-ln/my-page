import React from 'react'
import Link from 'next/link'

interface Props {
    text: string
    href: string
}
const NavLink = ({ text, href }: Props) => {
    return (
        <Link href={href} className="h-full w-auto flex flex-row items-center">
            <span className="font-roboto font-bold w-28 h-12 flex justify-center items-center  rounded-3xl text-Platinum hover:bg-Platinum/20">{text}</span>
        </Link>
    )
}

export default NavLink