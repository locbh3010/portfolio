'use client'

import { motion } from 'motion/react'
import { DEFAULT_SCALE, HALF_FOLLOW_CURSOR_SIZE, HOVER_SCALE } from './constants'
import type { FollowCursorProps } from './types'

export default function Cursor({ mousePosition, isHovering }: FollowCursorProps) {
    return (
        <motion.div
            className="pointer-events-none fixed z-50 size-8 rounded-full border border-white bg-transparent mix-blend-difference"
            animate={{
                x: mousePosition.x - HALF_FOLLOW_CURSOR_SIZE,
                y: mousePosition.y - HALF_FOLLOW_CURSOR_SIZE,
                scale: isHovering ? HOVER_SCALE : DEFAULT_SCALE,
                backgroundColor: isHovering ? 'white' : 'transparent',
            }}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
                mass: 0.5,
            }}
        />
    )
}
