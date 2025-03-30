import Logo from '@/shared/assets/images/logo.webp'
import { routes } from '@/shared/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../container'
import NavMenu from './NavMenu'

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
                        className="cursor-pointer rounded-full bg-white px-6 py-2 text-base font-semibold text-black"
                    >
                        Hire Me!
                    </button>
                </div>
            </Container>
        </header>
    )
}
