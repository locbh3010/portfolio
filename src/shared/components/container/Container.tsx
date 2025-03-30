import cn from '@/shared/helpers/cn'
import type { ContainerProps } from './types'

export default function Container({ ref, children, className, ...props }: ContainerProps) {
    return (
        <div
            ref={ref}
            className={cn('mx-auto w-full max-w-[1320px] px-3', className)}
            {...props}
        >
            {children}
        </div>
    )
}
