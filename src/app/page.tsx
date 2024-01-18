import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();
  const queue = await api.queue.getAll.query();

  return (
    <div className="flex flex-col">
      <h1>Hello {session?.user.name}</h1>
      <div>
        {queue.map((q, idx) => (
          <div key={idx}>
            Item {idx} - {q.updatedAt.toDateString()}
          </div>
        ))}
      </div>
    </div>
  );
}
