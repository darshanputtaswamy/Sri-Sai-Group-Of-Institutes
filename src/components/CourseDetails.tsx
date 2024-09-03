"use client";
import { motion } from 'framer-motion';
export interface CourseDetails {
    title: string;
    description: string;
    duration: string;
    eligibility: string;
    affiliation: string;
    categories: string[];
}

import Image from "next/image";
import Link from 'next/link';
interface CoursePageProps {
    course: any;
}


const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
    return (
        <div className={`p-4 dark:bg-slate-900 dark:text-white bg-white text-black`}>
            <section className="max-w-7xl mx-auto">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
                    >
                        {course.title}
                    </motion.h2>
                    <motion.div
                        className={`w-24 h-1 mx-auto dark:bg-cyan-500 bg-emerald-500`}
                        initial={{ width: 0 }}
                        animate={{ width: '6rem' }}
                        transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
                    />
                </div>

                <motion.div
                    className="mt-8 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
                >
                    {course.description}
                </motion.div>
                <motion.div
                    className="border-b-2 border-gray-300 mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                ></motion.div>
                <motion.div
                    className="mt-8 flex flex-col md:flex-row"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
                >
                    {course.imageSrc && <div className="md:w-1/2">
                        <Image src={course.imageSrc} alt={`${course.title} image`}
                            className="w-full rounded-md shadow-lg"
                            width={700}
                            height={500}
                        />
                    </div>}
                    <div className="md:w-full flex flex-wrap justify-between">
  <h3 className="text-2xl font-semibold mt-4 w-full">Course Categories</h3>
  {course.categories.map((category: any, index: any) => (
    <div 
      key={index}
      className="w-full sm:w-[48%] mt-10 p-6 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white bg-slate-200 text-black 
                 transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <h4 className="text-xl font-medium">{category.name}</h4>
      <table className="w-full text-left mt-2">
        <tbody>
          {[
            { label: "Duration", value: category.duration },
            { label: "Eligibility", value: category.eligibility },
            { label: "Affiliation", value: category.affiliation },
          ].map((item, idx) => (
            <motion.tr
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="dark:border-b dark:border-slate-700 border-b border-slate-300"
            >
              <td className="font-medium py-2 pr-4">{item.label}:</td>
              <td className="py-2">{item.value}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  ))}
</div>
                </motion.div>

                <motion.div
                    className="mt-12 flex justify-around"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
                >
                    <Link
                        href="./contact"
                        className={`px-4 py-2 rounded-md dark:bg-cyan-500 dark:text-white bg-emerald-500 text-black transition-all hover:opacity-80`}
                    >
                        For Admission &  Enquiry
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default CoursePage;
