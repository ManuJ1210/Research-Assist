import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.7,
};

function RegularBiostatic() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="bg-blue-800 md:h-40">
          <Helmet>
            <title>Regular Biostatic - Research Assist</title>
          </Helmet>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center font-bold text-5xl text-white p-12"
          >

            Regular Biostatic Program
          </motion.h1>
        </div>
        <div className="md:flex md:justify-evenly mt-15 ">
          <div className="md:px-20 md:w-3/5 text-justify px-5">
            <img className="md:w-full md:h-200 " src="https://www.research-assist.com/assets/img/academic/1.png" alt="" />
            <img className="md:w-full  md:mt-10" src="https://www.research-assist.com/assets/img/academic/r2.jpg" />
            <p className=" mt-2 md:text-clip md:text-pretty text-start text-lg/8 pr-20 text-gray-600">For any queries contact us on +91 9535056289, +91 7618775276</p>
            <p className=" mt-2 md:text-clip text-pretty text-start text-lg/8 pr-20 text-gray-600">Please choose whether you are a student or factulty. After choosing you will get a payment form once you are done with payment you will get the registration link</p>
          </div>
          <div className="md:pr-30 border mt-10 border-gray-300  shadow-md w-70 h-100 mr-50  ">

            <h1 className="mt-4 md:text-center font-bold text-2xl w-50 mb-5 text-black ml-9 ">Other Links</h1>
            <ul className="md:flex flex-wrap w-60  md:text-clip text-pretty ml-16 text-lg/9  text-gray-600  ">

              <Link to="/english"><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 ">Manuscript Editing</li></Link>
              <Link to="/research"><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 ">
                Research  Designing</li></Link>
              <Link to="/manuscriptEditing"><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 ">Manuscript Editing</li></Link>
              <Link to="/manuscriptWriting"><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 ">Manuscript Writing</li></Link>
              <Link to="/clinicalDesign"><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 ">Clinical Trail Designing</li></Link>
              <Link to="/figurePreparation"><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 ">Figure Prepration</li></Link>
              <Link to="/dataManagement"><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 "> Data Management</li></Link>
              <Link to=""><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 "> Utility & Tools</li></Link>
              <Link to=""><li className="w-1/1 list-disc hover:scale-105 transition duration-350  hover:text-blue-600 ">Preview Demo</li></Link>
            </ul>
          </div>

        </div>
      </motion.div>
    </>
  )
};

export default RegularBiostatic;