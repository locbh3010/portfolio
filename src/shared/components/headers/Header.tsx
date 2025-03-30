import Logo from '@/shared/assets/images/logo.webp'
import { routes } from '@/shared/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../container'
import NavMenu from './NavMenu'
import ShinyText from '../animations/text-animations/ShinyText'

export default function Header() {
    return (
        <header className="flex-center-y h-[120px]">
            <Container className="flex-center-between">
                {/* logo */}
                <Link
                    href={routes.home}
                    title="Home"
                >
                    <Image
                        src={Logo}
                        alt="logo"
                        width={60}
                        height={60}
                    />
                </Link>

                {/* menu */}
                <div className="flex-center-y gap-11.5">
                    <NavMenu />
                    <button
                        type="button"
                        className="transition-background cursor-pointer rounded-full border border-[#353535] bg-[#111] px-8 py-2 text-base font-semibold text-white duration-200 hover:bg-[#353535]"
                    >
                        <ShinyText text="Hire Me!" />
                    </button>
                </div>
            </Container>
        </header>
    )
}
