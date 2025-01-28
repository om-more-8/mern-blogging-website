import { AnimatePresense, motion } from "framer-motion";

const AnimationWrapper = ({ children, keyValue, initial = { opacity: 0 }, animate = { opacity: 1 }, transition = { duration: 2 }, className }) => {
    return (
        <AnimatePresense>
            <motion.div
                key={keyValue}
                initial={initial}
                animate={animate}
                transition={transition}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresense>

    )

}

export default AnimationWrapper;