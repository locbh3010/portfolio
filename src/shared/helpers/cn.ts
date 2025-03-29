import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export default function cn(...classes: string[]) {
    return twMerge(classNames(...classes))
}
