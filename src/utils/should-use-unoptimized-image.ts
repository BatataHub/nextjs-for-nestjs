const localImageHostnames = new Set(['localhost', '127.0.0.1', '::1', '[::1]']);

export function shouldUseUnoptimizedImage(src: string) {
  if (!src || src.startsWith('/')) {
    return false;
  }

  try {
    const { hostname } = new URL(src);

    return localImageHostnames.has(hostname);
  } catch {
    return false;
  }
}
