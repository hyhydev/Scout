import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { SignIn } from "~/components/auth/signIn";
import { SignOut } from "~/components/auth/signOut";

export default async function Home() {
  const session = await getServerAuthSession();
  const queue = await api.queue.getAll.query();

  return (
    <div>
      {!session && <SignIn />}
      {session && <SignOut />}
      {session && <h1>Hello {session?.user.name}</h1>}
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
