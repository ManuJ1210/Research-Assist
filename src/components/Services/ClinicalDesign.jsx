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
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};



function ClinicalDesign() {
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >

                <div className="bg-blue-800 md:h-50 lg:h-40 sm:w-full">
                    <Helmet>
                        <title>Clinical Design - Research-Assist</title>
                    </Helmet>
                    <motion.h1 className=" sm:text-center font-bold text-5xl p-18 text-white  shadow-black-500/50" initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }} >Clinical Trial Design &
                        Documentation</motion.h1>
                </div>
                <div className="md:flex md:justify-evenly mt-15">
                    <motion.div
                        className="md:px-20 md:w-3/5 text-justify  px-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h1 className="text-start font-bold text-3xl md:content-between mb-5 mt-8 text-black">Clinical trial design & documentation - Research-Assist</h1>
                        <p className=" mt-2 md:text-clip text-pretty text-justify text-lg/8 pr-20 text-gray-600">We offer clinical trial design services from concept to report.Our experts take up preparation of all types of documents pertaining to a clinical study,pre-submission proposal to post-clinical research reports and appendices according to the ICH guidelines.</p>

                        <h1 className="mt-10 text-start font-bold text-3xl content-between mb-5 text-black">Pre-submission</h1>
                        <ul className="px-6  mt-2 md:text-clip text-pretty text-start text-lg/8 mb-16 text-gray-600">
                            <li type="square" className="">Clinical study protocol</li>
                            <li type="square" className="">Investigator brochures</li>
                            <li type="square" className="">Patient informed consent forms</li>
                        </ul>

                        <h1 className="mt-10 text-start font-bold text-3xl content-between mb-5 text-black">Post-submission</h1>
                        <ul className="px-6  mt-2 md:text-clip text-pretty text-start text-lg/8 mb-16 text-gray-600">
                            <li type="square" className="">Clinical study report(CSR)</li>
                            <li type="square" className="">Summary of safety and efficacy</li>
                            <li type="square" className="">Phase integrated clinical statistical reports</li>
                        </ul>
                    </motion.div>


                    <motion.div
                        className="md:pr-45 border border-gray-300  shadow-md mt-10 w-75 h-100 mr-50 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >

                        <h1 className="mt-4 md:text-center font-bold text-2xl w-50 mb-5 text-black ml-9 ">Other Links</h1>
                        <ul className="md:flex flex-wrap w-60  md:text-clip text-pretty ml-16 text-lg/9  text-gray-600  ">

                            <Link to="/english"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">English Language Editing</li></Link>
                            <Link to="/research"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">
                                Research  Designing</li></Link>
                            <Link to="/manuscriptEditing"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Manuscript Editing</li></Link>
                            <Link to="/manuscriptWriting"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Manuscript Writing</li></Link>
                            <Link to="/clinicalDesign"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Clinical Trail Designing</li></Link>
                            <Link to="/figurePreparation"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Figure Prepration</li></Link>
                            <Link to="/dataManagement"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350"> Data Management</li></Link>
                            <Link to=""><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350"> Utility & Tools</li></Link>
                            <Link to=""><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Preview Demo</li></Link>
                        </ul>
                    </motion.div>
                </div>

            </motion.div >
        </>
    )
};

export default ClinicalDesign;