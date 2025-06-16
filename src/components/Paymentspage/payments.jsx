import { Helmet } from 'react-helmet-async';
import { RiMailSendFill } from "react-icons/ri"; import { motion } from 'framer-motion';


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
function Payments() {
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
            <title>Payments - Research Assist</title>
          </Helmet>
          <motion.h1 className="text-center font-bold text-5xl content-between p-12 text-white shadow-black-500/50"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
            Payments
          </motion.h1>
        </div>


        <div className="max-w-screen-lg mx-auto px-4 py-6 space-y-8 mt-10">
          <motion.div className=" rounded-md border border-gray-300 p-6 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-center mb-4">Pricing</h2>
            <p className="text-gray-700 text-center">
              Email us your document in MS Word format to receive a free cost estimate for our services. All of our services can be customized to meet your specific needs. We also offer all services at discounted rates for organizations, universities, and other non-profit institutions who wish to publish scientific content purely for educational and research purposes (non-commercial).
            </p>
          </motion.div>


          <motion.div className=" rounded-md border border-gray-300 p-6 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-center mb-4">
              EFT PAYMENTS (Electronic Funds Transfer)
            </h2>
            <p className="text-gray-700 text-center mb-2">
              Make your EFT payment at your bank or via the Internet using the following account details:
            </p>
            <div className="text-gray-700 text-center space-y-1">
              <p><strong>Beneficiary Name:</strong> CHANRE HEALTH CARE & RESEARCH PVT LTD</p>
              <p><strong>Bank Name:</strong> HDFC BANK</p>
              <p><strong>Account Number:</strong> 50200061249352</p>
              <p><strong>MICR Number:</strong> 560240003</p>
              <p><strong>IFSC Code:</strong> HDFC0000041</p>
              <p><strong>Branch:</strong> #47, Margosa Road, 15th Cross, Malleswaram, Bangalore - 560003</p>
            </div>
            <p className="text-gray-700 text-center mt-4">
              Please send a remittance advice by email to <b>marketing@chanrejournals.com</b> clearly identifying your payment and detailing invoice information.
            </p>
          </motion.div>


          <motion.div className=" rounded-md border border-gray-300 p-6 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-center mb-4">Cheque / DD</h2>
            <p className="text-gray-700 text-center mb-2">
              For all prepayment customers, Cheques/DDs should be made payable to:
              <br /><strong>CHANRE HEALTH CARE & RESEARCH PVT LTD</strong>
            </p>
            <p className="text-gray-700 text-center">
              Please courier your Cheques / DD to the address below:
              <br />
              ChanRe Rheumatology and Immunology Center & Research <br />
              No. 414/65, 20th Main, West of Chord Road,<br />
              1st Block, Rajajinagar, Bangalore - 560010 <br />
              Phone: 080 - 42516699 | Telefax: 080 - 42516600
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Payments;
