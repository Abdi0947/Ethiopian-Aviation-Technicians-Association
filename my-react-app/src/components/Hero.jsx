import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Users, Award, Calendar } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Members' },
    { icon: Award, value: '50+', label: 'Certifications' },
    { icon: Calendar, value: '20+', label: 'Events/Year' },
    { icon: Plane, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="relative bg-transparent text-white overflow-hidden">
      {/* Animated Planes Background */}
      <motion.svg
        className="absolute left-0 top-10 w-16 h-8 opacity-60 z-0"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: -80 }}
        animate={{ x: '110vw' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <path d="M2 16 L62 16 M32 4 L32 28 M32 16 L54 8 M32 16 L54 24" stroke="#fff" strokeWidth="2" />
        <polygon points="62,16 54,12 54,20" fill="#fff" />
      </motion.svg>
      <motion.svg
        className="absolute left-0 top-24 w-12 h-6 opacity-40 z-0"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: -60 }}
        animate={{ x: '120vw' }}
        transition={{ duration: 10, repeat: Infinity, delay: 2, ease: 'linear' }}
      >
        <path d="M2 16 L62 16 M32 4 L32 28 M32 16 L54 8 M32 16 L54 24" stroke="#60a5fa" strokeWidth="2" />
        <polygon points="62,16 54,12 54,20" fill="#60a5fa" />
      </motion.svg>
      <motion.svg
        className="absolute left-0 top-40 w-20 h-10 opacity-30 z-0"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: -120 }}
        animate={{ x: '100vw' }}
        transition={{ duration: 12, repeat: Infinity, delay: 4, ease: 'linear' }}
      >
        <path d="M2 16 L62 16 M32 4 L32 28 M32 16 L54 8 M32 16 L54 24" stroke="#38bdf8" strokeWidth="2" />
        <polygon points="62,16 54,12 54,20" fill="#38bdf8" />
      </motion.svg>

      {/* Background Pattern */}
      {/* Remove or comment out the SVG pattern overlay to let the background image show */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                  Ethiopian Aviation
                </span>
                <span className="block text-white/90 animate-fade-in-up">Technicians Association</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl max-w-2xl text-white/80 font-medium drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Advancing aviation safety and excellence through <span className="text-yellow-300 font-bold">professional development</span>, training, and <span className="text-pink-300 font-bold">collaboration</span> among Ethiopian aviation technicians.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl"
                as={Link}
                to="/membership"
              >
                Join EATA Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700 shadow-lg"
                as={Link}
                to="/about"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 rounded-xl p-4 shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-yellow-300 drop-shadow" />
                  </div>
                  <div className="text-2xl font-extrabold text-yellow-200 drop-shadow">{stat.value}</div>
                  <div className="text-sm text-pink-200 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="relative z-10">
              <motion.div
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1 }}
              >
                <div className="text-center space-y-4">
                  <Plane className="h-16 w-16 mx-auto text-blue-300 animate-bounce-slow" />
                  <h3 className="text-xl font-bold text-white/90">Professional Excellence</h3>
                  <p className="text-pink-100 font-medium">
                    Join a community of skilled aviation professionals dedicated to 
                    maintaining the highest standards of safety and quality.
                  </p>
                </div>
              </motion.div>
            </div>
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-pink-400 rounded-full opacity-30 blur-xl animate-float"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-300 rounded-full opacity-40 blur-lg animate-float"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 