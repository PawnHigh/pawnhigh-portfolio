import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tools I conquered-mastered-overpowered</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")