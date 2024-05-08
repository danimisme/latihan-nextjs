import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return <div className="min-h-[600px] p-4 ">{children}</div>;
};

export default Content;
