"use client";

import React, { useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from "../components/profile/Profile";
import { useSelector } from "react-redux";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(5);
  const [route, setRoute] = useState<string>("Login");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div>
      <Protected>
        <Heading
          title={`${user.name} Profile - ELearning`}
          description="Elearning is a platform for students to learn"
          keywords="Programming, MERN, Redux, Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
      </Protected>
    </div>
  );
};

export default Page;
