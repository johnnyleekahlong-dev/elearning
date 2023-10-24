import React from "react";
import AdminSidebar from "@/app/components/admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import CreateCourse from "@/app/components/admin/course/CreateCourse";
import DashboardHeader from "@/app/components/admin/DashboardHeader";

type Props = {};

const CreateCoursePage = (props: Props) => {
  return (
    <div>
      <Heading
        title="ELearning"
        description="Elearning is a platform for students to learn"
        keywords="Programming, MERN, Redux, Machine Learning"
      />

      <div className="flex">
        <div className="1550px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
