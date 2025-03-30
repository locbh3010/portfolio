'use client'

import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }: React.PropsWithChildren) {
    return (
        <ReactLenis root>
            <div>{children}</div>
        </ReactLenis>
    )
}
