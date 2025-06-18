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
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function ManuscriptEditing() {
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
                        <title>Manuscript Editing - Research Assist</title>
                    </Helmet>
                    <motion.h1 className=" md:text-center font-bold text-5xl text-white md:content-between p-18  shadow-black-500/50" initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}>
                        Manuscript Editing and Copy Editing
                    </motion.h1>
                </div>

                <div className="md:flex md:justify-evenly mt-15">
                    {/* Left Section */}
                    <motion.div
                        className="md:px-20 md:w-3/5 text-justify px-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h1 className="text-start font-bold text-2xl content-between mb-5 mt-8 text-black">
                            Manuscript editing and copy editing - Research-Assist
                        </h1>
                        <p className="mt-2 md:text-clip text-pretty text-start text-lg/8 pr-20 text-gray-600">
                            Accurate and clear presentation of the information is important for accepting the manuscript by international journals. Maintenance of reference accuracy is an integral part of scientific writing. Misrepresentation of the diverse reference components such as name of the researchers, journal title, volume or page number, will cause greater difficulty for the readers to find the original source. Additionally, incorrect in-text citations are associated with actual misrepresentation of the source text.
                        </p>
                        <p className="mt-2 md:text-clip text-pretty text-start text-lg/8 pr-20 text-gray-600">
                            Our editors are from relevant scientific, technical, and medical background and they give utmost importance to high-quality editing. Proofreading and copyediting will be done by experts who have published papers in peer-reviewed journals. We ensure the accuracy of the reference section and its compliance with the guidelines of the target journal. We’ll focus on the small details so that you can focus on the big picture. Research-assist Manuscript Formatting allows researchers to save valuable time by having a skilled expert format their manuscript and references. Our managing formatters check each manuscript against your journal’s style guide and adjust the citations, references, and layout of the document to the correct conventions. All figures and tables are moved to the correct location in the manuscript, and figure titles and legends are standardized according to your journal’s specifications.
                        </p>

                        <h1 className="mt-10 text-start font-bold text-2xl content-between mb-5 text-black">The services involve</h1>
                        <ol className="px-6 list-decimal mt-2 md:text-clip text-pretty text-start text-lg/8 mb-16 text-gray-600">
                            <li>Comprehensive revision of the content and making substantive changes to the text</li>
                            <li>Rephrasing and revising sentence construction</li>
                            <li>Adjusting the writing style to comply with the clients requirements and stipulated guidelines</li>
                            <li>Correction of grammatical mistakes</li>
                            <li>Deletion of redundancies</li>
                            <li>Checking for consistent use of abbreviations, appropriate capitalization and punctuation</li>
                            <li>Checking for spelling errors,Rearranging sentences and paragraphs (if required) to improve the clarity and content flow Reference accuracy checking.</li>
                        </ol>

                        <h1 className="mt-10 text-start font-bold text-2xl content-between mb-5 text-black">Manuscript Formatting Services</h1>
                        <ol className="px-6 list-decimal mt-2 md:text-clip text-pretty text-start text-lg/8 mb-16 text-gray-600">
                            <li>Manuscript / Thesis / Report editing.</li>
                            <li>Literature review.</li>
                            <li>Copyediting and proofreading.</li>
                            <li>Posters, abstracts and presentations.</li>
                            <li>Reference accuracy checking.</li>
                            <li>Educational content development.</li>
                            <li>Publication support to authors of medical / technical books.</li>
                        </ol>
                    </motion.div>

                    {/* Right Section (Links) */}
                    <motion.div
                        className="md:pr-45 border mt-10 w-75 h-100 mr-50 border-gray-300  shadow-md"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h1 className="mt-4 md:text-center font-bold text-2xl w-50 mb-5 text-black ml-9 ">Other Links</h1>
                        <ul className="md:flex flex-wrap w-60 md:text-clip text-pretty ml-16 text-lg/9 text-gray-600">
                            <Link to="/english"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">English Language Editing</li></Link>
                            <Link to="/research"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Research Designing</li></Link>
                            <Link to="/manuscriptEditing"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Manuscript Editing</li></Link>
                            <Link to="/manuscriptWriting"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Manuscript Writing</li></Link>
                            <Link to="/clinicalDesign"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Clinical Trial Designing</li></Link>
                            <Link to="/figurePreparation"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Figure Preparation</li></Link>
                            <Link to="/dataManagement"><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Data Management</li></Link>
                            <Link to=""><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Utility & Tools</li></Link>
                            <Link to=""><li className="w-1/1 list-disc hover:scale-105 hover:text-blue-600 transition duration-350">Preview Demo</li></Link>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
};

export default ManuscriptEditing;
