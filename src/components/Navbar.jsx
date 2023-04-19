import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks, contentVideos } from '../constants'
import { logo, menu, close} from '../assets'
import { textVariant } from '../utils/motion'

const ModalVideos = () => {
  return (
    <div className="relative p-6 flex-auto overflow-y-auto flex flex-wrap gap-4 justify-center">
      {contentVideos.map((content) => (
        <div className="sm:w-[350px]">
          <iframe 
            className='w-full aspect-video rounded-lg'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={content.video}>            
          </iframe>
        </div>                                        
      ))}                    
    </div>
  )
}

const Navbar = () => {
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Start Logo */}
        <Link 
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("")
            window.scrollTo(0,0) // Scroll to the top of the page
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> PawnHigh &nbsp; 
            <span className='sm:block hidden'>AI</span> 
          </p>
        </Link>
        {/* End Logo */}

        {/* Start Navbar List */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <>
              {link.id === "content" ? 
              <li
                key={link.id}            
                className={
                  `${ active === link.title ? "text-white" : "text-secondary"} 
                  hover:text-white text-[18px] font-medium cursor-pointer`
                }
                onClick={() => {
                  setActive(link.title)
                  setShowModal(true)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
                :
              <li
                key={link.id}            
                className={
                  `${ active === link.title ? "text-white" : "text-secondary"} 
                  hover:text-white text-[18px] font-medium cursor-pointer`
                }
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              }
            </>
          ))}
        </ul>
        {/* End Navbar List */}

        {/* Responsive Navbar List */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu}
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <>
                  {link.id === "content" ? 
                  <li
                    key={link.id}            
                    className={
                      `${ active === link.title ? "text-white" : "text-secondary"} 
                      font-poppins font-medium cursor-pointer text-[16px]`
                    }
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)
                      setShowModal(true)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                  :
                  <li
                    key={link.id}            
                    className={
                      `${ active === link.title ? "text-white" : "text-secondary"} 
                      font-poppins font-medium cursor-pointer text-[16px]`
                    }
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)
                    }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  }
                </>
              ))}
            </ul>
          </div>
        </div>
        {/* End Responsive Navbar List */}

        {/* ------------------------- Start Modal Videos ------------------------- */}
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className={`${styles.padding} max-w-7xl mx-auto relative w-auto`}>
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black-100 outline-none focus:outline-none">

                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t">
                    <>                      
                      <div variants={textVariant()}>
                        <p className={styles.sectionSubText}>Computer science and systems videos</p>
                        <h2 className={styles.sectionHeadText}>Content.</h2>
                      </div>
                    </>
                    <div
                      onClick={() => setShowModal(false)}
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <img 
                        src={close}
                        alt="github" 
                        className='w-1/2 h1/2 object-contain' 
                      />
                    </div>
                  </div>

                  {/*body*/}
                  <div className='p-6'>No hay Videos por el Momento</div>
                  {/* <ModalVideos /> */}
                </div>
              </div>
            </div>
          </>
        ) : null}
        {/* ------------------------- End Modal Videos ------------------------- */}

      </div>
    </nav>
  )
}

export default Navbar