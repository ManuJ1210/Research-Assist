import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Carousel from "../Carousel/Carousel";
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

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Homepage() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Carousel />

        {/* About Section */}
        <motion.div
          className="about-wrap mt-20 px-4 flex flex-col-reverse sm:flex-row items-center sm:items-start gap-8 sm:gap-12 max-w-screen-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Helmet>
            <title>Home - Research Assist</title>
          </Helmet>

          <div className="abt-img sm:basis-1/3 w-full">
            <img
              className="w-full h-auto max-h-80 object-cover rounded-md"
              src="https://media.istockphoto.com/id/1357904539/vector/business-team-brainstorm.jpg?s=612x612&w=0&k=20&c=YDsISgzkmbg18XNZOq5L11PBHjl3MePvoqBNv9Tw7jk="
              alt="About us illustration"
            />
          </div>

          <div className="abt-content sm:basis-2/3 w-full">
            <h5 className="text-blue-600 font-semibold mb-2">About Us</h5>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Welcome To Research-Assist</h1>
            <p className="text-gray-700 text-base leading-relaxed ">
               Welcome to Research Assist, your online partner providing end-to-end solutions for publishing manuscripts and scientific content. Our team includes statistical analysts, medical specialists, research professionals, and IT experts with years of experience in editorial process management and scientific publishing. Our motto is to provide excellent service without compromising on quality or accuracy.
            </p>

            <Link to="/about">
              <button className="btn bg-[#1A77F2] text-white mt-4 flex items-center gap-2 hover:bg-blue-900">
                <FaRegEye /> View More
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Promo Section */}
        <motion.div
          className="relative w-full h-[520px] md:h-[600px] bg-no-repeat shadow-2xl mt-25 bg-cover rounded-md bg-center flex flex-col items-center justify-center text-center text-white"
          style={{ backgroundImage: "url('/images/promo-bg-1.jpg')" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-black/80 z-0"></div>

          <h1 className="relative z-10 text-3xl md:text-5xl font-bold px-4">
            Need a publication in high impact factor journal?
          </h1>

          <p className="relative z-10 max-w-3xl px-6 mt-4 text-sm md:text-base font-semibold text-white">
            Rejection of a manuscript, despite relentless effort in shaping the same, is very disheartening to any medical researcher.
    Our team offers complete journal publication support services including journal selection, statistical analysis, manuscript
    re-writing, editing, and formatting as per the journal’s author instruction. At the advanced level, we help in re-submission
    to any alternate journal, manuscript tracking, and to revise the manuscript based on the final acceptance requirements.
          </p>

          <Link to="/about" className="relative z-10">
            <button className="btn text-white bg-[#1A77F2] mt-8 flex hover:bg-blue-800 items-center gap-2 shadow-none border-none">
              <FaRegEye />
              View More
            </button>
          </Link>
        </motion.div>

        {/* Services Header */}
        <motion.h4
          className="text-blue-600 mt-26 text-center font-semibold md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h4>

        {/* Services Grid */}
       <motion.div
  className="services mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-10 lg:px-16 cursor-pointer items-stretch"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
  {[
    {
      to: "/english",
      title: "English Language Editing",
      desc: "Every year hundreds of papers are rejected due to English language editing requirements. we can help to getting your research published.",
    },
    {
      to: "/research",
      title: "Research Designing",
      desc: "If you have a research question or concept in mind, We can help you in designing the research and data analysis.",
    },
    {
      to: "/manuscriptEditing",
      title: "Manuscript Editing",
      desc: "Accurate and clear presentation of the information is important for accepting the manuscript by international journals.",
    },
    {
      to: "/manuscriptWriting",
      title: "Manuscript Writing",
      desc: "Rejection of a manuscript, despite relentless effort in shaping the same, is very disheartening to any medical researcher.",
    },
    {
      to: "/clinicalDesign",
      title: "Clinical Trial Design",
      desc: "We offer clinical trial design services from concept to report.Our experts take up preparation of all types of documents.",
    },
    {
      to: "/figurePreparation",
      title: "Figure Preparation",
      desc: "Research assist team can help to ensure editorial excellence by functioning as an intermediary between publishers and authors.",
    },
    {
      to: "/dataManagement",
      title: "Data Management",
      desc: "We assist top research institute in India as well as other countries for developing database registry and related services.",
    },
    {
      to: "#",
      title: "Utility & Tools",
      desc: "Coming soon...",
    },
  ].map((card, i) => (
    <Link key={i} to={card.to} className="h-full">
      <motion.div
        className="card card-dash bg-base-100 w-full h-full flex flex-col justify-between rounded-md border border-gray-300  hover:scale-105 transition duration-300 shadow-2xl"
        variants={cardVariant}
        transition={{ duration: 0.5 }}
      >
        <div className="card-body flex flex-col justify-between grow">
          <h2 className="card-title hover:text-blue-600">{card.title}</h2>
          <div className="rating my-2">
            {[...Array(5)].map((_, j) => (
              <input
                key={j}
                type="radio"
                name={`rating-${i}`}
                className="mask mask-star-2 bg-yellow-400 w-4 h-4"
                defaultChecked={j === 4}
              />
            ))}
          </div>
          <p>{card.desc}</p>
        </div>
      </motion.div>
    </Link>
  ))}
</motion.div>

      </motion.div>
    </>
  );
}
export default Homepage;
