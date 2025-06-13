import { useState, useEffect } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiMailSendFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; 

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
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    country: 'IN',
    phoneNumber: '',
    message: '',
    captchaInput: '',
  });

  const [errors, setErrors] = useState({});
  const [isCaptchaValid, setIsCaptchaValid] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
    if (name === 'captchaInput') setIsCaptchaValid(null);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.captchaInput.trim()) newErrors.captchaInput = 'CAPTCHA is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (validateCaptcha(formData.captchaInput)) {
      setIsCaptchaValid(true);

      const templateParams = {
        fullName: formData.fullName,
        subject: formData.subject,
        email: formData.email,
        country: formData.country,
        phoneNumber: formData.phoneNumber,
        message: formData.message,

        
      };

      emailjs
        .send(
          'service_leqcpcg',    
          'template_zwm0bcd',    
          templateParams,
          'LNyTnmDabZbcns92G'      
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setShowModal(true);
            setFormData({
              fullName: '',
              subject: '',
              email: '',
              country: 'IN',
              phoneNumber: '',
              message: '',
              captchaInput: '',
            });
            loadCaptchaEnginge(6);
          },
          (err) => {
            console.error('FAILED...', err);
            alert('Message sending failed. Try again later.');
          }
        );
    } else {
      setIsCaptchaValid(false);
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
      <div>
        <div className="bg-blue-800 h-40">
          <Helmet>
            <title>Contact - Research Assist</title>
          </Helmet>
         <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center font-bold text-5xl text-white p-12"
        >
          Contact Us
        </motion.h1>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          className="services mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-16 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="card w-full bg-gray-200 border border-gray-300 shadow-2xl"
            variants={cardVariant}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body items-center">
              <i className="text-6xl text-blue-800  hover:scale-120 transition duration-300">
                <FaLocationDot />
              </i>
              <h2 className="card-title">Address</h2>
              <p className="text-md text-gray-600">
                No. 414/65, 20th Main, West of Chord road, 1st Block, Rajajinagar,
                Bangalore-10
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card w-full bg-gray-200 border border-gray-300  shadow-2xl"
            variants={cardVariant}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body items-center">
              <i className="text-6xl text-blue-800  hover:scale-120 transition duration-300">
                <FaPhoneAlt />
              </i>
              <h2 className="card-title">Phone Number</h2>
              <p className="text-md text-gray-600">080-42516636 / 95350 56289</p>
            </div>
          </motion.div>

          <motion.div
            className="card w-full bg-gray-200  border border-gray-300 shadow-2xl"
            variants={cardVariant}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body items-center">
              <i className="text-6xl text-blue-800  hover:scale-120 transition duration-300">
                <RiMailSendFill />
              </i>
              <h2 className="card-title">Email Address</h2>
              <p className="text-md text-gray-600">marketing@research-assist.com</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Form & Map Section */}
        <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-10 lg:px-16 mt-20 mb-30">
          {/* Map - hidden on small screens */}
          <div className="hidden lg:block lg:w-1/2 h-[660px] border border-gray-300  shadow-2xl">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.571850394237!2d77.5502906!3d12.9992138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dbc8be6ee1f%3A0x99d77f3579e9ed2e!2sChanRe%20Rheumatology%20And%20Immunology%20Center%20And%20Research!5e0!3m2!1sen!2sin!4v1749614914180!5m2!1sen!2sin"
              width="600"
              height="1200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              className="rounded-lg shadow-md w-full h-full"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 p-4  rounded-md border border-gray-300  shadow-2xl  max-h-[660px] "
          >
            <div className="grid grid-cols-1 gap-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-base ${
                    errors.fullName ? 'border-red-600' : 'border-gray-500'
                  } focus:outline-blue-600`}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter the Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-base ${
                    errors.subject ? 'border-red-600' : 'border-gray-500'
                  } focus:outline-blue-600`}
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-base ${
                    errors.email ? 'border-red-600' : 'border-gray-500'
                  } focus:outline-blue-600`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-1 flex rounded-md border border-gray-500">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="rounded-l-md border-none bg-white py-2 pl-3 pr-8 text-base text-gray-500 focus:outline-none"
                  >
                    <option>IN</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter valid Phone no"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`flex-1 rounded-r-md border-0 py-2 pl-2 pr-3 text-base text-gray-900 focus:outline-blue-600 ${
                      errors.phoneNumber ? 'border border-red-600' : ''
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your Concern"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-base ${
                    errors.message ? 'border-red-600' : 'border-gray-500'
                  } focus:outline-blue-600`}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  name="captchaInput"
                  placeholder="Enter CAPTCHA"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-md border px-3 py-2 text-base ${
                    errors.captchaInput || isCaptchaValid === false
                      ? 'border-red-600'
                      : 'border-gray-500'
                  } focus:outline-blue-600`}
                />
                {errors.captchaInput && (
                  <p className="text-red-600 text-sm mt-1">{errors.captchaInput}</p>
                )}
                {isCaptchaValid === false && !errors.captchaInput && (
                  <p className="text-red-600 text-sm mt-1">
                    Invalid CAPTCHA, please try again.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-900 focus:outline-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
  <div
  className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-60 backdrop-blur-lg transition-opacity duration-300"
    onClick={() => setShowModal(false)}
  >
    <div
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl p-8 w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100 hover:scale-105"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="w-16 h-16 text-blue-700 animate-bounce"
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
        <h2 className="text-2xl font-bold">Success!</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Your form was submitted successfully.
        </p>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </motion.div>
  );
}

export default Contact;
