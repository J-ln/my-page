import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'

const NavBar = () => {
    return (
        <div className="w-full h-16 fixed top-0 shadow-lg shadow-Platinum/20 bg-transparent backdrop-blur-md z-50 px-10">
            <div className='w-full h-full flex flex-row items-center justify-between'>
                <Link href="/" className="h-full w-auto flex flex-row items-center">
                    <Image src="/Logo.png" alt="logo" width={50} height={50} />
                    <span className="font-roboto font-bold ml-[10px] hidden md:block text-Platinum">Julian R.</span>
                </Link>
                <div className='h-auto  w-auto flex flex-row items-center gap-1 border-[1px] border-Platinum rounded-3xl'>
                    <NavLink text="About" href="/about" key="about" />
                    <NavLink text="Projects" href="/projects" key="projects" />
                    <NavLink text="Contact" href="/contact" key="contact" />
                </div>
                <div className='h-auto  w-auto flex flex-row items-center gap-1 '>

                </div>
            </div>
        </div>
    )
}

export default NavBar