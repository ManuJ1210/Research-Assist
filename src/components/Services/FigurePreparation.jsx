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



function FigurePreparation() {
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
                        <title>Figure Preparation - Research Assist</title>
                    </Helmet>
                    <motion.h1 className=" text-center font-bold text-5xl md:content-between p-18 text-white  shadow-black-500/50" initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }} >Figure Preparation and Editorial Assistance</motion.h1>
                </div>
                <div className="md:flex md:justify-evenly mt-15 ">
                    <motion.div
                        className="md:px-20 md:w-3/5 text-justify px-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h1 className="text-start font-bold text-2xl md:content-between mb-5 mt-8 text-black">Improve the visual presentation of your research</h1>
                        <p className=" mt-2 md:text-clip text-pretty text-start text-lg/8 pr-20 text-gray-600"><b>Comprehensive Editorial Support</b> Editors of international journals and organizers of major scientific conferences have to deal with large amount of content during peer-review process and manuscript editing. Research assist team can help to ensure editorial excellence by functioning as an intermediary between publishers and authors.</p>

                        <h1 className="mt-10 text-start font-bold text-3xl md:content-between mb-5 text-black">The following services are offered by us:</h1>
                        <ul className="px-6  mt-2 md:text-clip text-pretty text-start text-lg/8 mb-5 text-gray-600">
                            <li type="square" className="">Obtaining accepted content from the publisher.</li>
                            <li type="square" className="">Performing developmental editing and formatting of the content, including figures and tables, to comply with journal's style guide.</li>
                            <li type="square" className="">Developing galley proof of the final document and corresponding with authors for proofreading.</li>
                            <li type="square" className="">Returning the final proof to the publisher.</li>
                        </ul>
                        <p className=" mt-2 md:text-clip text-pretty text-start text-lg/8 pr-20 text-gray-600">Our editorial service is customized to ascertain high language and content quality, so that the publishers can focus on the core area of work like content acquisition and distribution. Researchers and graduate students can also avail our services for getting clear guidance and assistance to shape any kind of research work including journal articles, scientific posters, handouts, and slideshows.</p>

                        <h1 className="mt-10 text-start font-bold text-3xl content-between mb-5 text-black">Improve the visual outlook of your manuscript</h1>
                        <p className=" mt-2 md:text-clip text-pretty text-start text-lg/8 pr-20 text-gray-600">The visual appeal of your manuscript can be significantly enhanced with the help of graph, illustration, photograph and diagram. We help in making publication ready figure files as per the layout and format requirement specified by the target journal.</p>

                    </motion.div>
                    <motion.div
                        className="md:pr-45 border mt-10 w-75 h-100 mr-50 border-gray-300  shadow-md "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}>

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

export default FigurePreparation;