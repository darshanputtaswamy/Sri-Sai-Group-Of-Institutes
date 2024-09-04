import React from 'react';
import { motion } from 'framer-motion';
import { contact_details } from '@/data/required_data';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";


interface ContactDetails {
    branchName: string;
    address: string;
    phoneNumbers: string[];
    emailAddresses: string[];
    googleMapLink: string;
}

const ContactCard: React.FC<ContactDetails> = ({

    branchName,
    address,
    phoneNumbers,
    emailAddresses,
    googleMapLink,
}) => {
    return (
        <div className='p-6 rounded-lg shadow-lg mb-8 mx-auto dark:bg-slate-800 dark:text-white bg-white text-black 
                 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl md:w-3/4 w-full'  >
            <h3 className="text-2xl font-semibold mb-4">{branchName}</h3>
            <div className='flex justify-between'>
                <div className='contact details flex flex-col '>
                    <div className="flex items-start pt-2">
                        <div className='h-20 min-w-16 pl-5'>
                            <FaLocationDot className="text-emerald-500 dark:text-cyan-500 w-6 h-6 mr-3" />
                        </div>
                        <div className='ml-5'>{address}</div>
                    </div>


                    <div className="flex items-start pt-2">
                        <div className='h-20 min-w-16 pl-5'>
                            <FaPhoneVolume className="text-emerald-500 dark:text-cyan-500 w-6 h-6 mr-3" />
                        </div>
                        <div>
                            <ul className="list-none ml-5">
                                {phoneNumbers.map((phone, index) => (
                                    <li key={index}>{phone}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start pt-2">
                        <div className='h-20 min-w-16 pl-5'>
                            <TfiEmail className="text-emerald-500 dark:text-cyan-500 w-6 h-6 mr-3" />
                        </div>
                        <div>
                            <ul className="list-none ml-5">
                                {emailAddresses.map((email, index) => (
                                    <li key={index}>{email}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="contact-form" className="max-w-md w-full  rounded-2xl shadow-input bg-light dark:bg-dark">
                        <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%&amp;height=300&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" scrolling="no" ></iframe><br />
                    </div >

                </div>
            </div>
        </div>
    );
};

const CampusContactPage: React.FC = () => {
    return (
        <div className="p-4 dark:bg-slate-900 dark:text-white bg-white text-black">
            <section className="max-w-7xl mx-auto">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        Campus Contact Information
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 mx-auto dark:bg-cyan-500 bg-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: '6rem' }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    />
                </div>

                <motion.div
                    className="mt-8 grid grid-cols-1 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    {contact_details.map((contact: any, index: any) => (
                        <ContactCard key={index} {...contact} />
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default CampusContactPage;
