import { motion } from "framer-motion"
function Button({children, className, onClick, type="button"}) {
    return (
        <motion.button className={className} onClick={onClick} type={type}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}

        
        >
            {children}
        </motion.button>
    )
}

export default Button
