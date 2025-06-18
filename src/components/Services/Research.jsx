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

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function Research() {
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>

                <div className="bg-blue-800 md:h-40">
                    <Helmet>
                        <title>Research Design - Research-Assist</title>
                    </Helmet>
                    <motion.h1 className=" text-center font-bold text-5xl content-between p-18 text-white shadow-black-500/50" initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }} >Research Designing and Statistical Analysis</motion.h1>
                </div>

                <div className="md:flex justify-evenly mt-15">

                    <motion.div
                        className="md:px-20 md:w-3/5 text-justify px-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h1 className="text-start font-bold text-2xl md:content-between mb-5 mt-8 text-black">Research designing and statistical analysis - Research-Assist</h1>
                        <p className=" mt-2 md:text-clip text-pretty text-start text-lg/8 pr-20 text-gray-600">If you have a research question or concept in mind, our team of research professionals from diverse therapeutic areas and with expertise in biostatistics, epidemiology, and data management can help you in designing the research and data analysis. Our team utilizes their skills to ensure that the study design is addressing the appropriate clinical questions.</p>

                        <h1 className="text-start font-bold text-2xl md:content-between mb-5 mt-8 text-black">Quality solution for your research needs</h1>

                        <p className=" mt-2 md:text-clip text-pretty text-start text-lg/8 pr-20 text-gray-600">The success of clinical research relies on statistical interpretation of numerical data. Hence, effective collaboration between clinician and statistician is vital during data analysis. Our statistical consultants are with wider knowledge and experience in performing a variety of statistical methods, such as basic descriptive analyses, epidemiological analysis, correlation analysis, cluster analyses, factor analyses, multivariate analyses of variance, multiple regressions, logistic regressions, propensity score analyses, hierarchical linear modeling (HLM), meta-analyses, structural equation modeling (SEM), etc.</p>

                        <h1 className="mt-10 text-start font-bold text-2xl content-between mb-5 text-black">The data-driven analytical services offered by our team strive to ensure the accuracy of results by using the best analysis techniques and computing software. Our biostatisticians help you in :-</h1>
                        <ol className="px-6 list-decimal mt-2 md:text-clip text-pretty text-start text-lg/8 mb-16 text-gray-600">
                            <li className=""> Developing statistical analysis plans, generating tables and figures,and data coding.</li>
                            <li className="">Ensuring the accuracy, quality, and efficiency of the results</li>
                            <li className="">Choosing the appropriate research design to answer your research questions</li>
                            <li className="">Developing questionnaire for data collection and calculating various validity and reliability measures.</li>
                        </ol>
                    </motion.div>

                    <motion.div
                        className="md:pr-45 border mt-10 w-75 h-100 mr-50 border-gray-300  shadow-md"
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
        </>
    )
};

export default Research;
