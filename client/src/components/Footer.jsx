import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { assets } from '../assets/assets'



const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Gaurav | All right reserved.</p>
        <div className='flex gap-4 text-xl text-gray-600'>
  <a href="https://github.com/GAURAVVVVVVVVVVVVV" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faGithub} className="hover:text-black cursor-pointer" />
  </a>
  <a href="https://instagram.com/gauravvmehtaaa" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-600 cursor-pointer" />
  </a>
  <a href="https://linkedin.com/in/gaurav-mehta-324431318" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-700 cursor-pointer" />
  </a>
</div>

    </div>
  )
}

export default Footer