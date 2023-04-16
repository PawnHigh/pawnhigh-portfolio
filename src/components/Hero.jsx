import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#e7305e]"/>
          <div className="w-4 h-4 rounded-full bg-[#E83663]"/>
          <div className="w-4 h-4 rounded-full bg-[#EA3C68]"/>
          <div className="w-4 h-4 rounded-full bg-[#ED456F]"/>
          <div className="w-4 h-4 rounded-full bg-[#EE4F77]"/>
          <div className="w-4 h-4 rounded-full bg-[#F05B80]"/>
          <div className="w-4 h-4 rounded-full bg-[#F36487]"/>
          <div className="w-4 h-4 rounded-full bg-[#F36C8D]"/>
          <div className="w-4 h-4 rounded-full bg-[#F67595]"/>
          <div className="w-4 h-4 rounded-full bg-[#FE83A2]"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>This is <span className='text-[#e7305e]'>PawnHigh</span> </h1>
          <p className={`${styles.heroSubText}`}>Deep learning and computer-articial vision content creator</p>
        </div>
      </div>
      
      {/* Start 3D MODEL */}
      <ComputersCanvas />
      {/* End 3D MODEL */}

      {/* Start Button to Scroll to About section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}            
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />          
          </div>
        </a>
      </div>
      {/* End Button to Scroll to About section */}

    </section>
  )
}

export default Hero