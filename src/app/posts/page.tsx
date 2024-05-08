import { Post } from "@/model/post";
import axios from "axios";
import Link from "next/link";

export const metadata = {
  title: "About Next",
  description: "Generated by create next app",
};

export default async function Page() {
  const { data } = await axios.get<Post[]>("http://localhost:3001/posts");

  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-600">Posts</h1>
      <div className="py-4 text-gray-600">
        {data?.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div
              className="p-4 my-3 shadow-md rounded-md bg-gray-50 hover:bg-gray-200"
              key={post.id}
            >
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
