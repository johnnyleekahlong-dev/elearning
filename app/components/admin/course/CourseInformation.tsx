/* eslint-disable jsx-a11y/alt-text */
import { styles } from "@/app/style/style";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  courseInfo: {
    name: string;
    description: string;
    price: string;
    estimatedPrice: string;
    tags: string;
    level: string;
    demoUrl: string;
    thumbnail: string;
  };
  setCourseInfo: any;
  active: number;
  setActive: (active: number) => void;
};

const CourseInformation: React.FC<Props> = ({ courseInfo, setCourseInfo }) => {
  const [dragging, setDragging] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setCourseInfo({ ...courseInfo, thumbnail: reader.result });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className={`${styles.label}`}>
            Course Name
          </label>

          <input
            id="name"
            type="name"
            name=""
            required
            value={courseInfo.name}
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
            placeholder="MERN stack LMS platform with next 13"
            className={`${styles.input}`}
          />
        </div>

        <br />

        <div className="mb-5">
          <label htmlFor="" className={`${styles.label}`}>
            Course Description
          </label>

          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            placeholder="Write something amazing"
            className={`${styles.input} h-min !py-2`}
            value={courseInfo.description}
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, description: e.target.value })
            }
          />
        </div>

        <br />

        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label}`}>Course Price</label>

            <input
              id="price"
              type="number"
              name=""
              required
              value={courseInfo.price}
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, price: e.target.value })
              }
              placeholder="29"
              className={`${styles.input}`}
            />
          </div>

          <div className="w-[50%]">
            <label className={`${styles.label} w-[50%]`}>
              Estimated Price (optional)
            </label>

            <input
              id="price"
              type="number"
              name=""
              required
              value={courseInfo.estimatedPrice}
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
              }
              placeholder="79"
              className={`${styles.input}`}
            />
          </div>
        </div>

        <br />

        <div>
          <label className={`${styles.label}`} htmlFor="email">
            Course Tags
          </label>

          <input
            id="tags"
            type="text"
            name=""
            required
            value={courseInfo.tags}
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, tags: e.target.value })
            }
            placeholder="MERN, Next 13, Socket io, tailwind css, LMS"
            className={`${styles.input}`}
          />
        </div>

        <br />

        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label}`}>Course Level</label>

            <input
              id="level"
              type="text"
              name=""
              required
              value={courseInfo.level}
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, level: e.target.value })
              }
              placeholder="Beginner/Intermediate/Expert"
              className={`${styles.input}`}
            />
          </div>

          <div className="w-[50%]">
            <label className={`${styles.label} w-[50%]`}>Demo Url</label>

            <input
              id="demoUrl"
              type="text"
              name=""
              required
              value={courseInfo.demoUrl}
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
              placeholder="eer74fd"
              className={`${styles.input}`}
            />
          </div>
        </div>

        <br />

        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {courseInfo.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={courseInfo.thumbnail}
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="text-black dark:text-white">
                Drag and drop your thumbnail here or click to browse
              </span>
            )}
          </label>
        </div>

        <br />

        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="text"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};

export default CourseInformation;
