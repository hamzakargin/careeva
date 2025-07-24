import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/add-job",
  "/jobs",
  "/jobs/:path*",
  "/stats",
]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();

  if (isProtectedRoute(req) && !session.userId) {
    return session.redirectToSignIn();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
