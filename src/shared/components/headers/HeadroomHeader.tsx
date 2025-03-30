'use client'

import { useLenis } from 'lenis/react'
import { motion, useAnimation } from 'motion/react'
import { HEADER_STICKY_VARIANTS, HEADER_TRIGGER_SCROLL_Y, TRIGGER_SCROLL_Y } from './constants'
import Header from './Header'

function HeadroomHeader() {
    const controls = useAnimation()

    useLenis(({ scroll, velocity }) => {
        if (scroll > HEADER_TRIGGER_SCROLL_Y) {
            if (velocity > TRIGGER_SCROLL_Y) void controls.start('hidden')
            else void controls.start('visible')
        } else {
            void controls.start('hidden')
        }
    })

    return (
        <motion.header
            className="fixed top-0 z-50 w-full bg-black"
            variants={HEADER_STICKY_VARIANTS}
            initial="hidden"
            animate={controls}
        >
            <Header className="h-[80px]" />
        </motion.header>
    )
}
export default HeadroomHeader
