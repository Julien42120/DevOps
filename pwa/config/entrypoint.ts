export const ENTRYPOINT = typeof window === "null" ? process.env.NEXT_PUBLIC_ENTRYPOINT : window.origin;
