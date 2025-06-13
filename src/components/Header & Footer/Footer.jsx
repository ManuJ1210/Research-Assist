import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Footer() {
  return (

    <><motion.footer className="footer sm:footer-horizontal   p-10 bg-blue-800 mt-15 text-white" initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <form>
        <img className="md:w-30 sm:w-20 lg:w-50 rounded-sm " src="https://www.research-assist.com/assets/img/logo24.jpg" alt="" />
        <h3 className="font-semibold text-lg ">A Concept to publication</h3>


      </form>
      <nav className="text-lg">
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Disclaimer</a>
        <Link to="/contact" className="link link-hover">Contact Us</Link>
        <Link to="/about" className="link link-hover">About</Link>
        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        <a className="link link-hover">Terms & Conditions</a>
      </nav><nav className="text-lg">
        <h6 className="footer-title">Important Link</h6>
        <Link to="/english" className="link link-hover">English language editing </Link>
        <Link to="/research" className="link link-hover">Research Design </Link>
        <Link to="/manuscriptEditing" className="link link-hover">Manuscript Editing </Link>
        <Link to="/manuscriptWriting" className="link link-hover">Manuscript Writing</Link>
        <Link to="/clinicalDesign" className="link link-hover">Clinical Trial Design</Link>
      </nav><nav className="text-lg">
        <Link to="/contact"><h6 className="footer-title">Contact Us</h6></Link>
        <a className="link link-hover">+91 80-42516636</a>
        <a className="link link-hover">marketing@research-assist.com </a>
        <a href="https://www.research-assist.com/" className="link link-hover">www.research-assist.com</a>

        <h6 className="footer-title">Follow Us :</h6>
        <div className="flex justify-between gap-3  ">
          <a href="https://www.facebook.com/ChanRericr/" target="_blank" rel="noopener noreferrer"><i className="hover:text-blue-500 hover:scale-110 transition duration-300"><FaFacebookF /></i></a>
          <a href="https://in.linkedin.com/company/chanre-rheumatology-&-immunology-center-&-research" target="_blank" rel="noopener noreferrer"><i className="hover:text-black"><FaLinkedinIn /></i></a>
          <a href="https://www.youtube.com/user/chanre1" target="_blank" rel="noopener noreferrer"><i className="hover:text-red-600" target="_blank" rel="noopener noreferrer"><FaYoutube /></i></a>
          <a href="https://twitter.com/ChanreCenter?t=aCWSkO9R7XsQNm2hlJ6s2g&s=09" target="_blank" rel="noopener noreferrer"><i className="hover:text-blue-600"><FaTwitter /></i></a>
        </div>
      </nav>

    </motion.footer>
      <div className="text-center bg-blue-900 text-white h-20 content-center align-middle">
        <h6 className="footer-title">Copyright © 2021-22 by Research-Assist</h6>
      </div>
    </>

  )
};

export default Footer;