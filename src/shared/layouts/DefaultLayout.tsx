import type { DefaultLayoutProps } from './types'

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default DefaultLayout
