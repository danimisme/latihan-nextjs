import { FC } from "react";

interface Props {
  url: string;
}

const ImagePost: FC<Props> = async ({ url }) => {
  const loaded = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
  return <img src={url} alt="" />;
};

export default ImagePost;
