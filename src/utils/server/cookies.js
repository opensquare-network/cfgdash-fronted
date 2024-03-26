import { cookies } from "next/headers";
import { CACHE_KEY } from "../consts";

export function getThemeMode() {
  const cookieStore = cookies();
  return cookieStore.get(CACHE_KEY.themeMode)?.value;
}
