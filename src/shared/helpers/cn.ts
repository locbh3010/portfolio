import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export default function cn(...classes: classNames.ArgumentArray) {
    return twMerge(classNames(...classes))
}
