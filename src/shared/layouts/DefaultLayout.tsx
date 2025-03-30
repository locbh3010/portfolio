import { FollowCursor } from '../components/followCursor'
import { Footer } from '../components/footers'
import { Header } from '../components/headers'
import { SmoothScroll } from '../components/smoothScroll'
import type { DefaultLayoutProps } from './types'

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <FollowCursor />
            <Header />
            <SmoothScroll>
                <main className="min-h-[500vh]">{children}</main>
            </SmoothScroll>
            <Footer />
        </>
    )
}

export default DefaultLayout
