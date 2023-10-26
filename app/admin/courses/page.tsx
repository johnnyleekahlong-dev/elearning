import DashboardHero from "@/app/components/admin/DashboardHero";
import AllCourses from "@/app/components/admin/course/AllCourses";
import AdminSidebar from "@/app/components/admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/useAdminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";

type Props = {};

const CoursesPage: React.FC<Props> = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="ELearning - Admin"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming, MERN, Redux, Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>

          <div className="w-[85%]">
            <DashboardHero />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default CoursesPage;
