import { Footer } from '../components/footers'
import { Header, HeadroomHeader } from '../components/headers'
import { SmoothScroll } from '../components/smoothScroll'
import type { DefaultLayoutProps } from './types'

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <SmoothScroll>
            <Header />
            <HeadroomHeader />
            <main className="min-h-[500vh]">{children}</main>
            <Footer />
        </SmoothScroll>
    )
}

export default DefaultLayout
