"use client";

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

export default function page() {
  return (
    <div>
      <Heading
        title="ELearning"
        description="Elearning is a platform for students to learn"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
    </div>
  );
}
