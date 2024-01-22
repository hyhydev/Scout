import { getServerAuthSession } from "~/server/auth";
import { SignIn } from "~/components/auth/signIn";
import { SignOut } from "~/components/auth/signOut";
import { PusherWrapper } from "~/components/pusher/pusherWrapper";
import { PusherProvider } from "~/utils/pusher";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div>
      {!session && <SignIn />}
      {session && <SignOut />}
      {session && <h1>Hello {session?.user.name}</h1>}
      <PusherProvider slug={`scout`}>
        <PusherWrapper />
      </PusherProvider>
    </div>
  );
}
