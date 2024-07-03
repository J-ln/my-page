import Image from "next/image"

import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa"

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-col md:flex-row items-center justify-between ">
            <div className="w-full md:w-1/2 h-[80vh]  flex flex-col ">
                <div className="w-full h-1/2 flex flex-col justify-center pr-0 md:pr-24">
                    <h3 className="text-9xl font-bold text-right text-Alabaster ">Creative.</h3>
                    <h3 className="text-8xl font-light italic text-right text-Saffron heroh3-color-shadow pr-1">Desing.</h3>
                    <h3 className="text-5xl font-light text-right pr-3 pt-8">Dev.</h3>
                </div>
                <div className="w-full h-1/2 flex flex-row gap-2 items-center justify-center">
                    <a href="/resume.pdf" download="resume.pdf" className="w-fit h-12 px-4  flex items-center justify-center rounded-2xl bg-Saffron/80 hover:bg-Saffron/ transition duration-200">
                        <FaFileDownload className="text-2xl text-Eblack " />
                        <span className="text-md font-bold text-Eblack ml-2 text-center p-0">Resume</span>
                    </a>
                    {/* add github and linkedin buttons */}
                    <a target="_blank" href="https://github.com/J-ln" className="w-fit h-fit p-3 hover:bg-white/15  flex items-center justify-center rounded-full border-2 border-Alabaster  transition duration-200">
                        <FaGithub className="text-2xl text-Alabaster " />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/juli%C3%A1n-rol%C3%B3n-81a486182/" className="w-fit h-fit p-3 hover:bg-white/15  flex items-center justify-center rounded-full border-2 border-Alabaster transition duration-200">
                        <FaLinkedin className="text-2xl text-Alabaster " />
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full md:h-1/2 flex flex-col pl-0 md:pl-24">

                <Image src="/Logo.png" alt="logo" width={500} height={500} />
            </div>
        </section>
    )
}

export default Hero