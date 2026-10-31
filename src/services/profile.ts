import { fetchUser } from './api';

export async function getDisplayName(id: string): Promise<string> {
  const user = fetchUser(id);
  if (!user) {
    return 'Guest';
  }
  return `${user.firstName} ${user.lastName}`;
}
