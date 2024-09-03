"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./aceternityui/sticky-scroll-reveal";
import Link from "next/link";
import {course_details} from "../data/required_data"


export function Courses() {
  return (
    <div className="p-10">
      <StickyScroll content={course_details} />
    </div>
  );
}