import { motion } from "framer-motion"
function Button({children, className}) {
    return (
        <motion.div className={className}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
        >
            {children}
        </motion.div>
    )
}

export default Button
