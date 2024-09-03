
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { campus_details } from '../../../data/required_data';
import {  CampusDetailsView, CampusPhotosView, CoursesOfferedView } from './CampusDetails';

export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ campusId: 'campus-narayanapura' }, { campusId: 'campus-vijipura' }];
}


export default function CampusPage({ params }: { params: { campusId: string } }) {
  const campus = campus_details.find((campus: any) => campus.id === params.campusId);

  return (
    <div className="w-[80%] mt-5 mx-auto py-10 px-6 sm:px-10 lg:px-20 z-50 dark:bg-slate-900 bg-slate-200 rounded-lg shadow-lg">
      <CampusDetailsView
        title={campus.title}
        description={campus.description}
        imageLocation={campus.image_location}
      />
      <CoursesOfferedView courses={campus.courses_offered} />
      <CampusPhotosView photos={campus.campus_photos} />
    </div>
  );
}
