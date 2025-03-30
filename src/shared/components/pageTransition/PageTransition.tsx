'use client'

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: React.PropsWithChildren) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
