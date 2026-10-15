export const CANONICAL_HOST = "sunmaxpk.com";

// Hosts that should permanently redirect to the canonical domain.
const REDIRECT_HOSTS = new Set(["www.sunmaxpk.com", "sunboxess.com", "www.sunboxess.com"]);

export function canonicalRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  if (!REDIRECT_HOSTS.has(url.hostname)) return null;

  const target = new URL(url.pathname + url.search, `https://${CANONICAL_HOST}`);
  return Response.redirect(target.toString(), 301);
}
