"use client";

import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
import { IoMdNotificationsOutline } from "react-icons/io";
import React, { useState } from "react";

type Props = {};

const DashboardHeader: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ThemeSwitcher />

      <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
        <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
        <span className="absolute -top-2 -right-2 bg-[#3ccba0] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
          3
        </span>
      </div>

      {open && (
        <div className="w-[350px] h-[50vh] dark:bg-[#111C43] bg-white shadow-xl absolute top-16 z-10 rounded">
          <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
            Notifications
          </h5>
          <div className="dark:bg-[#2d3a4ea1] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]">
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-black dark:text-white">
                New Question Received
              </p>
              <p className="text-black dark:text-white cursor-pointer">
                Mark as read
              </p>
              <p className="px-2 text-black dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                quas odio doloribus alias. Dignissimos doloremque quae esse sint
                quaerat nisi vero ipsum omnis illum consequuntur, quibusdam quia
                autem recusandae animi!
              </p>
              <p className="p-2 text-black dark:text-white">5 days ago</p>
            </div>

            <div className="dark:bg-[#2d3a4ea1] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]">
              <div className="w-full flex items-center justify-between p-2">
                <p className="text-black dark:text-white">
                  New Question Received
                </p>
                <p className="text-black dark:text-white cursor-pointer">
                  Mark as read
                </p>
              </div>
              <p className="px-2 text-black dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quod inventore corporis reiciendis repellat. Ea et
                repellendus facere, corporis rem sapiente, tempora minima
                delectus expedita blanditiis maxime nobis optio commodi.
              </p>
              <p className="px-2 text-black dark:text-white text-[14px]">
                5 days ago
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
