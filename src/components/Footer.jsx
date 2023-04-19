import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { social } from '../constants'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Footer = () => {
  return (
    <>
        <div className="flex flex-wrap text-center justify-center">
            <motion.div variants={textVariant()}>
                <p className={`${styles.footerHeadText} text-white`}>
                    <span className='text-[#e7305e]'>@</span> Gerardo Portocarrero Banda 
                </p>
                <h2 className={styles.sectionHeadText}>Social Media</h2>
            </motion.div>
        </div>
        
        <div className="flex flex-wrap gap-10 justify-center">
            {/* Icons: https://tailwind-elements.com/docs/standard/components/social-buttons/ */}
            {social.map((social, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    style={{color: `${social.color}`}}
                    viewBox="0 0 24 24">
                    <path
                        d={`${social.path}`}
                    />
                </svg>                    
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(Footer, "footer")