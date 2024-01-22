"use client";

import { useSubscribeToEvent } from "~/utils/pusher";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "../ui/button";
import { api } from "~/trpc/react";

export function PusherWrapper() {
  return <LazyView />;
}

const LazyView = dynamic(() => Promise.resolve(ScoutView), {
  ssr: false,
});

function ScoutView() {
  const displayTextMutation = api.pusher.setDisplayText.useMutation();

  const [displayText, setDisplayText] = useState("default");

  useSubscribeToEvent("set-display-text", (data: { text: string }) => {
    setDisplayText(data.text);
  });

  return (
    <>
      <Button onClick={() => displayTextMutation.mutate()}>Click me</Button>
      <p>{displayText}</p>
    </>
  );
}
