'use client'

import menuItems from '@/shared/constants/menuItems'
import cn from '@/shared/helpers/cn'
import { motion } from 'framer-motion'
import { map } from 'lodash'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useId } from 'react'

export default function NavMenu() {
    const id = useId()
    const pathname = usePathname()

    return (
        <nav>
            <ul className="flex-center-y gap-4">
                {/* Indicator */}

                {/* Menu items */}
                {map(menuItems, (item) => (
                    <Link
                        key={item.route}
                        href={item.route}
                        title={item.label}
                        className="group transition-color relative px-4 py-1.5 text-white duration-200 data-[active=true]:pointer-events-none data-[active=true]:text-black"
                        data-active={pathname === item.route}
                        prefetch
                        scroll
                    >
                        <span
                            className={cn(
                                'absolute inset-0 -z-10 block origin-center scale-0 rounded-full bg-white opacity-0 transition-all duration-200',
                                pathname !== item.route && 'group-hover:scale-100 group-hover:opacity-20',
                            )}
                        />

                        {pathname === item.route && (
                            <motion.span
                                layoutId={`menu-indicator-${id}`}
                                className="absolute-full -z-10 rounded-full bg-white"
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        )}
                        <span className="transition-color text-[15px] font-medium duration-200">{item.label}</span>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}
