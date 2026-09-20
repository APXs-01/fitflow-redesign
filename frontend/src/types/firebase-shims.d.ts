import type { Persistence } from "@firebase/auth";

// @firebase/auth's package.json lists the "types" export condition before
// "react-native", so tsc always resolves to the generic public types and
// never sees the React Native build's extra export. The function exists at
// runtime (node_modules/@firebase/auth/dist/rn/index.js) — this just
// restores its type for callers.
declare module "@firebase/auth" {
  export function getReactNativePersistence(storage: unknown): Persistence;
}
