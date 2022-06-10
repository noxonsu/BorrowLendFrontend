export function getDomain() {
  if (typeof window === 'undefined') {
    throw new Error('Domain name read error');
  }

  return window.location.hostname || document.location.host;
}
