'use client'

import { useSetState } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import Cursor from './Cursor'

export default function FollowCursor() {
    const [mousePosition, setMousePosition] = useSetState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [setMousePosition])

    // Track hover state for interactive elements
    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        // Select all interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .logo, img, .nav-item')

        interactiveElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter)
            element.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            interactiveElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter)
                element.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <Cursor
            mousePosition={mousePosition}
            isHovering={isHovering}
        />
    )
}
