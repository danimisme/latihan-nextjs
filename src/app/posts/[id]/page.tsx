import { Post } from "@/model/post";
import axios, { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Posts",
  description: "Posts",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { data } = await new Promise<AxiosResponse<Post>>(async (resolve) => {
    setTimeout(() => {
      axios
        .get<Post>("http://localhost:3001/posts/" + params.id)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          resolve(err);
        });
    }, 1000);
  });

  if (!data) {
    notFound();
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-600">Posts - {data.title}</h1>
      <div className="py-4 text-gray-600">
        <p>{data.description}</p>
      </div>
    </div>
  );
}
