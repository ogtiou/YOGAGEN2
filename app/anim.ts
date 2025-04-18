import { Variants } from "motion/react"
// const transition = {duration: 0.9, ease: [0.49,0.01,0.15,0.97]}
const transition2 = {duration: 0.7, ease: [0.31,0.22,0,0.99]}

export const menu: Variants = {
    closed: {
        clipPath: 'inset(0% 0% 100% 0%)',
        transition: {...transition2, delay: 0.3}
    },
    open: {
        clipPath: 'inset(0% 0% 0% 0%)',
        transition: {...transition2}
    }
}

export const items: Variants = {
    closed: {
        filter: 'blur(0.2rem)',
        opacity: 0,
        transition: {...transition2, delay: 0.3}
    },
    open: {
        filter: 'blur(0rem)',
        opacity: 1,
        transition: {...transition2, delay: 0.2, duration: 1.2}
    }
}