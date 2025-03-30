import { DEFAULT_SPEED } from './constants'
import type { ShinyTextProps } from './types'

function ShinyText({ text, disabled = false, speed = DEFAULT_SPEED, className = '' }: ShinyTextProps) {
    const animationDuration = `${speed}s`

    return (
        <div
            className={`inline-block bg-clip-text text-[#b5b5b5a4] ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage:
                    'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    )
}

export default ShinyText
