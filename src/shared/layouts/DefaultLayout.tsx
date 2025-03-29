import { Footer } from '../components/footers'
import { Header } from '../components/headers'
import type { DefaultLayoutProps } from './types'

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default DefaultLayout
