import { Post } from "@/model/post";
import axios from "axios";

export const metadata = {
  title: "Posts",
  description: "Posts",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { data } = await axios.get<Post>(
    "http://localhost:3001/posts/" + params.id
  );
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-600">Posts - {data.title}</h1>
      <div className="py-4 text-gray-600">
        <p>{data.description}</p>
      </div>
    </div>
  );
}
