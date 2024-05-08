import { FC, ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-[600px] max-h-screen overflow-y-scroll">
      {children}
    </div>
  );
};

export default Content;
