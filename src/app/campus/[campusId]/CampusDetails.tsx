
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ParallaxScroll } from '@/components/aceternityui/parallex-loader';

export const CampusDetailsView = ({ title, description, imageLocation }: any) => {
    return (
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
        <motion.div
                        className={`w-24 h-1 mx-auto dark:bg-cyan-500 bg-emerald-500`}
                        initial={{ width: 0 }}
                        animate={{ width: '6rem' }}
                        transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
                    />

        <Image
          src={imageLocation}
          alt={title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
          width={1200}
          height={400}
        />
        <p className="mt-4 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          {description}
        </p>
        <motion.div
                    className="border-b-2 border-gray-300 mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                ></motion.div>
      </motion.div>
      
    );
  };
  
export const CoursesOfferedView = ({ courses }: any) => {
    return (
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {courses.map((course: any, index: any) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white bg-white text-black 
                       transition-transform transform hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 1.2 }}
          >
            <h4 className="text-xl font-medium">{course}</h4>
          </motion.div>
        ))}
      </motion.div>
    );
  };
  
  export  const CampusPhotosView = ({ photos }: any) => {
    return (
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h3 className="text-2xl font-semibold text-center">Campus Photos</h3>
        <div className="mt-4">
          <ParallaxScroll images={photos} />
        </div>
      </motion.div>
    );
  };