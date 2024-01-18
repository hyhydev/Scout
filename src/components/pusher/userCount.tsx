"use client";

import { useCurrentMemberCount } from "~/utils/pusher";

export function UserCount() {
  const users = useCurrentMemberCount();
  return <div>Users on page: {users}</div>;
}
