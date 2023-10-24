"use client";

import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/admin/sidebar/AdminSidebar";
import AdminProtected from "../hooks/useAdminProtected";
import DashboardHero from "../components/admin/DashboardHero";

type Props = {};

const AdminPage: React.FC<Props> = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="ELearning"
          description="Elearning is a platform for students to learn"
          keywords="Programming, MERN, Redux, Machine Learning"
        />

        <div className="flex h-[200vh]">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>

          <div className="w-[85%]">
            <DashboardHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default AdminPage;
