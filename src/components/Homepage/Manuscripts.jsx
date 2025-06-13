import React, { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.7,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Manuscript() {
  const [formData, setFormData] = useState({
    service: "",
    title: "",
    name: "",
    email: "",
    phone: "",
    description: "",
    captcha: "",
    file: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [captchaError, setCaptchaError] = useState(null);

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    if (name === "captcha") setCaptchaError(null);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.service) errors.service = "Service is required.";
    if (!formData.title) errors.title = "Title is required.";
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.phone) errors.phone = "Phone is required.";
    if (!formData.description) errors.description = "Description is required.";
    if (!formData.file) errors.file = "File upload is required.";
    if (!formData.captcha) errors.captcha = "Please enter the CAPTCHA.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (validateCaptcha(formData.captcha)) {
      setShowPopup(true);
      setCaptchaError(null);
      setFormErrors({});
      setFormData({
        service: "",
        title: "",
        name: "",
        email: "",
        phone: "",
        description: "",
        captcha: "",
        file: null,
      });
      loadCaptchaEnginge(5);
    } else {
      setCaptchaError("Invalid CAPTCHA. Please try again.");
    }
  };

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
          <title>Manuscript Upload - Research Assist</title>
        </Helmet>
        <motion.h1 className="text-center font-bold text-5xl p-12 text-white"
        initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          Upload Manuscript
        </motion.h1>
      </div>

      <div className="md:flex md:justify-center mt-5">
        <motion.div
          className="form  md:w-[80%] md:mt-15 md:px-4 p-6  rounded-2xl border-gray-300 border shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <fieldset className="space-y-6">
              {/* Services and Title */}
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <legend className="text-black font-semibold text-xl">
                    Select Services
                  </legend>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="select w-full focus:outline-blue-600"
                  >
                    <option value="">Pick a Service</option>
                    <option>English Language Editing</option>
                    <option>Research Design</option>
                    <option>Manuscript Editing</option>
                    <option>Clinical Trial Design</option>
                    <option>Figure Preparation</option>
                  </select>
                  {formErrors.service && (
                    <p className="text-red-600 text-sm">{formErrors.service}</p>
                  )}
                </div>

                <div className="flex-1 min-w-[200px]">
                  <legend className="text-black font-semibold text-xl">Title</legend>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="input w-full focus:outline-blue-600"
                    placeholder="Enter the title"
                  />
                  {formErrors.title && (
                    <p className="text-red-600 text-sm">{formErrors.title}</p>
                  )}
                </div>
              </div>

              {/* File and Name */}
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <legend className="text-black font-semibold text-xl">Select a file</legend>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="file-input w-full focus:outline-blue-600"
                  />
                  <label className="label">Max size 10MB</label>
                  {formErrors.file && (
                    <p className="text-red-600 text-sm">{formErrors.file}</p>
                  )}
                </div>

                <div className="flex-1 min-w-[200px]">
                  <legend className="text-black font-semibold text-xl">Name</legend>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input w-full focus:outline-blue-600"
                    placeholder="Enter your name..."
                  />
                  {formErrors.name && (
                    <p className="text-red-600 text-sm">{formErrors.name}</p>
                  )}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <legend className="text-black font-semibold text-xl">Email</legend>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input w-full focus:outline-blue-600"
                    placeholder="Enter your email..."
                  />
                  {formErrors.email && (
                    <p className="text-red-600 text-sm">{formErrors.email}</p>
                  )}
                </div>

                <div className="flex-1 min-w-[200px]">
                  <legend className="text-black font-semibold text-xl">Phone No</legend>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input w-full focus:outline-blue-600"
                    placeholder="Phone"
                    maxLength="10"
                  />
                  {formErrors.phone && (
                    <p className="text-red-600 text-sm">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <legend className="text-black font-semibold text-xl">Description</legend>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="textarea w-full focus:outline-blue-600"
                  placeholder="Enter the Description"
                />
                {formErrors.description && (
                  <p className="text-red-600 text-sm">{formErrors.description}</p>
                )}
              </div>

              {/* CAPTCHA */}
              <div>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  className="input mt-2 w-full focus:outline-blue-600"
                  placeholder="Enter CAPTCHA"
                />
                {captchaError && (
                  <p className="text-red-600 text-sm mt-1">{captchaError}</p>
                )}
                {formErrors.captcha && (
                  <p className="text-red-600 text-sm mt-1">{formErrors.captcha}</p>
                )}
              </div>
            </fieldset>

            {/* Submit button */}
            <button
              type="submit"
              className="btn text-white w-[50%] bg-[#1A77F2] hover:bg-blue-900 mt-4 lg:ml-75 md:ml-35 sm:ml-70"
            >
              Upload
            </button>
          </form>
        </motion.div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-lg transition-opacity duration-300"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center space-y-4">
              <svg
                className="w-14 h-14 text-blue-700 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2l4 -4M12 22c5.523 0 10 -4.477 10 -10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z"
                />
              </svg>

              <h2 className="text-2xl font-bold text-center">Form Submitted</h2>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Your manuscript has been uploaded successfully.
              </p>

              <button
                className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default Manuscript;
