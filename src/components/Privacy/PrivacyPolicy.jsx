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

function Privacy() {
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
                        <title>Privacy - Research Assist</title>
                    </Helmet>
                    <motion.h1 className="text-center font-bold text-5xl md:items-center p-12 text-white" initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}>Privacy Policy</motion.h1>
                </div>

                <div className="Abt-content md:flex justify-center px-4 md:px-0">
                    <div className="md:w-3/5 md:content-center md:py-15 space-y-12">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h1 className="md:text-start font-bold text-3xl md:content-between mb-5 text-black">Privacy Policy for Research Assist</h1>
                            <p className="md:text-balance wrap-break-word mt-1 text-lg/8 text-gray-600 font-semibold text-start">
                                At Research Assist, accessible from https://researchassist.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Research Assist and how we use it.
                            </p>
                            <p className="md:text-balance wrap-break-word mt-1 text-lg/8 text-gray-600 font-semibold text-start">
                                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                            </p>
                            <p className="md:text-balance wrap-break-word mt-1 text-lg/8 text-gray-600 font-semibold text-start">
                                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Research Assist. This policy is not applicable to any information collected offline or via channels other than this website.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h1 className="md:text-start font-bold text-3xl mt-8 md:content-between mb-5 text-black">Consent</h1>
                            <p className="md:text-balance wrap-break-word mt-1 text-lg/8 text-gray-600 font-semibold text-start">
                                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h1 className="md:text-start font-bold text-3xl mt-8 md:content-between mb-5 text-black">Information we collect</h1>
                            <p className="md:text-balance wrap-break-word mt-1 text-lg/8 text-gray-600 font-semibold text-start">
                                Meticulous statistical analysis, data interpretation,and presentation of the content are crucial for establishing the success of a research...
                            </p>
                            <p className="md:text-balance wrap-break-word mt-1 text-lg/8 text-gray-600 font-semibold text-start">
                                We comply with ethical publication practices and strive to provide the best services by understanding the customer needs...
                            </p>
                            <p className="md:text-balance wrap-break-word mt-1 text-lg/8 text-gray-600 font-semibold text-start">
                                When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h1 className="md:text-start font-bold text-3xl mt-8 md:content-between mb-5 text-black">How we use your information</h1>
                            <p className="md:text-balance wrap-break-word mt-1 text-lg/8 text-gray-600 font-semibold text-start">
                                We use the information we collect in various ways, including to:
                            </p>
                            <ul className="px-6 mt-2 md:text-clip text-pretty text-start text-lg/8 mb-5 text-gray-600">
                                <li type="square">Provide, operate, and maintain our website</li>
                                <li type="square">Improve, personalize, and expand our website</li>
                                <li type="square">Understand and analyze how you use our website</li>
                                <li type="square">Develop new products, services, features, and functionality</li>
                                <li type="square">Communicate with you, either directly or through one of our partners...</li>
                                <li type="square">Send you emails</li>
                                <li type="square">Find and prevent fraud</li>
                            </ul>
                        </motion.div>

                       
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h1 className="md:text-start font-bold text-3xl mt-8 md:content-between mb-5 text-black">Log Files</h1>

                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">Research Assist follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                            <h1 className="md:text-start font-bold text-3xl mt-8 md:content-between mb-5 text-black">Our Advertising Partners</h1>

                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>
                            <ul className="px-6  mt-2 md:text-clip text-pretty text-start text-lg/8 mb-5 text-gray-600">

                                <li type="square" className="">Google</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h1 className="md:text-start font-bold text-3xl mt-8 md:content-between mb-5 text-black">Advertising Partners Privacy Policies</h1>

                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">You may consult this list to find the Privacy Policy for each of the advertising partners of Research Assist.</p>

                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Research Assist, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">Note that Research Assist has no access to or control over these cookies that are used by third-party advertisers.</p>

                            <h1 className="md:text-start font-bold text-3xl mt-8 md:content-between mb-5 text-black">Advertising Partners Privacy Policies</h1>


                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">Research Assist's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h1 className="md:text-start font-bold text-3xl md:content-between mt-8 mb-5 text-black">CCPA Privacy Rights (Do Not Sell My Personal Information)</h1>

                            <h2 className="md:text-start font-bold text-lg/7 md:content-between mb-5 text-black">Under the CCPA, among other rights, California consumers have the right to:</h2>

                            <ul className="px-6  mt-2 md:text-clip text-pretty text-start text-lg/8 mb-5 text-gray-600">

                                <li type="square" className="">Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                                <li type="square" className="">Request that a business delete any personal data about the consumer that a business has collected.</li>
                                <li type="square" className="">Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                                <li type="square" className="">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h1 className="md:text-start font-bold text-3xl md:content-between mt-8 mb-5 text-black">GDPR Data Protection Rights</h1>

                            <h2 className="md:text-start font-bold text-lg/7 md:content-between mb-5 text-black">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</h2>

                            <ul className="px-6  mt-2 md:text-clip text-pretty text-start text-lg/8 mb-5 text-gray-600">

                                <li type="square" className="">The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                                <li type="square" className="">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                                <li type="square" className="">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                                <li type="square" className="">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                                <li type="square" className="">The right to restrict processing – The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                                <li type="square" className="">The right to restrict processing – The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                                <li type="square" className="">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                            </ul></motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >

                            <h1 className="md:text-start font-bold text-3xl mt-8 md:content-between mb-5 text-black">Children's Information</h1>

                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                            <p className="md:text-balance wrap-break-word  mt-1 text-lg/8 text-gray-600 font-semibold text-start ">Research Assist does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                        </motion.div>

                     

                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Privacy;
