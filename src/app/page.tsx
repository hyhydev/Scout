import { getServerAuthSession } from "~/server/auth";
import { SignIn } from "~/components/auth/signIn";
import { SignOut } from "~/components/auth/signOut";
import { PusherWrapper } from "~/components/pusher/pusherWrapper";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div>
      {!session && <SignIn />}
      {session && <SignOut />}
      {session && <h1>Hello {session?.user.name}</h1>}
      <PusherWrapper />
    </div>
  );
}
