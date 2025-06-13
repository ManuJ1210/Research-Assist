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
    duration: 0.8,
};

// Animation for scroll-in effect
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function Englishpage() {
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
                        <title>English Language Editing - Research-Assist</title>
                    </Helmet>
                    <motion.h1 className=" text-center font-bold text-5xl md:content-between p-18 text-white shadow-black-500/50" initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}>English Language Editing</motion.h1>
                </div>

                <div className="lg:flex lg:justify-evenly mt-15">

                    {/* Left Content */}
                    <motion.div
                        className="md:px-20 md:w-3/5 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h1 className="md:text-start font-bold text-2xl md:content-between mb-5 mt-8 text-black">English Language Editing - Research-Assist</h1>
                        <p className=" mt-2 md:text-clip text-pretty text-start text-lg/8 md:pr-20 text-gray-600">Every year hundreds of papers are rejected due to English language editing requirements. At research-assist we know that language shouldn’t be a barrier to getting your quality research published. With research-assist Editing Services it needn’t be. We have hundreds of specialist researchers ready to edit your paper, all native language English speakers, with a minimum of Masters level education, at the most respected US and Ivy League Universities. It couldn’t be simpler – just submit your manuscript, decide how quickly you need the work done, and we will do the rest. </p>

                        <h1 className="mt-10 text-start font-bold text-2xl md:content-between mb-5 text-black">Research-Assist Editing Services</h1>
                        <ul className="px-6  mt-2 md:text-clip text-pretty text-start text-lg/8 mb-16 text-gray-600">
                            <li type="square">Two levels of editing available</li>
                            <li type="square">Straight forward pricing structure</li>
                            <li type="square">Rapid turnaround times</li>
                            <li type="square">Technical Specialists in your subject area</li>
                            <li type="square">Experts based at the highest profile US universities.</li>
                        </ul>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        className="md:pr-45 border mt-10 w-75 h-100 mr-50 border-gray-300  shadow-2xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h1 className="mt-4 md:text-center font-bold text-2xl w-50 mb-5 text-black ml-9 ">Other Links</h1>
                        <ul className="md:flex flex-wrap w-60  md:text-clip text-pretty ml-16 text-lg/9  text-gray-600  ">
                            <Link to="/english"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">English Language Editing</li></Link>
                            <Link to="/research"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Research  Designing</li></Link>
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
            </motion.div>
        </>
    )
};

export default Englishpage;
