import { FC, ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return (
    <>
      <h1>Content</h1>
      {children}
    </>
  );
};

export default Content;
