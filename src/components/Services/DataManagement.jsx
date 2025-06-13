import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { RiMailSendFill } from "react-icons/ri";
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

function DataManagement() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="bg-blue-800 md:h-40">
                <Helmet>
                    <title>Data Management - Research Assist</title>
                </Helmet>
                <motion.h1 className="text-center font-bold text-5xl p-12 text-white" initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    Data Management and Statistical Process
                </motion.h1>
            </div>

            <div className="md:flex md:justify-evenly mt-10 px-4">
                <motion.div
                    className="md:w-2/3"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl font-bold text-black mb-5">
                        Data Management and Statistical Process
                    </h1>
                    <div className="space-y-6">
                        <img
                            className="w-full max-w-[600px] mx-auto rounded-lg shadow-md"
                            src="https://www.research-assist.com/assets/img/1.png"
                            alt="Data Management 1"
                        />
                        <img
                            className="w-full max-w-[600px] mx-auto rounded-lg shadow-md"
                            src="https://www.research-assist.com/assets/img/2.png"
                            alt="Data Management 2"
                        />
                        <img
                            className="w-full max-w-[600px] mx-auto rounded-lg shadow-md"
                            src="https://www.research-assist.com/assets/img/3.png"
                            alt="Data Management 3"
                        />
                    </div>
                </motion.div>


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
        </motion.div>
    );
}

export default DataManagement;
