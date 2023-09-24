import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
  keywords: string;
}

const Heading: FC<Props> = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keyowrds" content={keywords} />
    </>
  );
};

export default Heading;
