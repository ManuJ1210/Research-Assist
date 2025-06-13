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

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Header */}
        <div className="bg-blue-800 md:h-40">
          <Helmet>
            <title>About - Research-Assist</title>
          </Helmet>
         <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center font-bold text-5xl text-white p-12"
        >
          About Us
        </motion.h1>
        </div>

        {/* Cards Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:px-10 lg:px-16 cursor-pointer content-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.20
              }
            }
          }}
        >
          {[
            { title: "Established 2002", desc: "Founded by renowned rheumatologist Dr. Chandrashekara S., pioneering specialized care in India." },
            { title: "Specialized Care", desc: "One-of-its-kind hospital dedicated to rheumatic and immunological diseases management." },
            { title: "Academic Excellence", desc: "Offering fellowship programs with numerous publications in international journals." },
            { title: "Research Focus", desc: "Dedicated research wing conducting clinical trials and basic research." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card w-full bg-base-100 card-sm border border-gray-300 shadow-lg"
              variants={cardVariant}
              transition={{ duration: 0.5 }}
            >
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image + Text Section */}
        <motion.div
          className="Abt-content md:flex justify-evenly mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="abt-img sm:w-160 sm:py-12 sm:px-25">
            <img
              src="https://chanrericr.com/_next/image?url=https%3A%2F%2Fapiphysio.chanrericr.com%2Fuploads%2FprofilePhoto-1740209875437-72164069.jpg&w=3840&q=85"
              alt="Dr. Chandrashekara"
              className="rounded-md max-w-full"
            />
          </div>

          <div className="md:w-3/5 md:py-15 mt-10 ">
            <h1 className="md:text-start font-bold text-3xl mb-5 text-black">Welcome to Research-Assist</h1>
            <p className="mt-3 font-semibold text-start text-gray-700">
             Welcome to research-assist, your online partner providing end-to-end solution for publishing manuscript and scientific contents. Our team comprises of statistical analysts, medical specialists, research professionals and IT experts with years of experience in editorial process management and scientific publishing. Our motto is to provide excellent service, without compromising on the quality or accuracy.
            </p>
            <p className="mt-3 font-semibold text-start text-gray-700">
            Meticulous statistical analysis, data interpretation,and presentation of the content are crucial for establishing the success of a research. Our knowledge resources can meet your research needs, thereby to help you in achieving the publication goals. We hope to serve you at the best through the various services offered.
            </p>
            <p className="mt-3 font-semibold text-start text-gray-700">
            We comply with ethical publication practices and strive to provide the best services by understanding the customer needs. We cater to various global, academic, scientific and pharma giants to provide high-quality services
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;
