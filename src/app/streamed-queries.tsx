import { api } from "@/trpc/server";
import { unstable_noStore } from "next/cache";

export async function Hello() {
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const hello = await api.post.hello.query({ text: "from tRPC" });
  return <p className="text-2xl text-white">{hello.greeting}</p>;
}

export async function Latest() {
  unstable_noStore();
  const latestPost = await api.post.getLatest.query();
  return (
    <>
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
    </>
  );
}
