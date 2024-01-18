"use client";

import { PusherProvider } from "~/utils/pusher";
import { UserCount } from "./userCount";
import dynamic from "next/dynamic";

export function PusherWrapper() {
  return <LazyView />;
}

const LazyView = dynamic(() => Promise.resolve(ScoutView), {
  ssr: false,
});

function ScoutView() {
  return (
    <PusherProvider slug={`scout`}>
      <UserCount />
    </PusherProvider>
  );
}
