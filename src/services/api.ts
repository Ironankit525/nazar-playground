export interface User {
  firstName: string;
  lastName: string;
}

export async function fetchUser(id: string): Promise<User | null> {
  const res = await fetch(`/api/users/${encodeURIComponent(id)}`);
  return res.ok ? ((await res.json()) as User) : null;
}
