# Fixes

Tracks completed changes pushed to `origin/main`.

## Format
Each entry: date, what changed, files touched, commit hash.

---

## 2026-05-02 — `0d70830` — Phase 1 + Phase 2 architecture fixes

**Files changed:** 12 files, +258 / -474

| Change | Full File Path |
|--------|----------------|
| Fix missing `/api` in base URL | `.env.local` |
| Remove `console.log` debug line | `src/lib/api.ts:12` |
| Cookie sync for SSR auth (`setAuthToken`, `removeAuthToken`) | `src/lib/api.ts` |
| Server-side route protection middleware (new file) | `src/middleware.ts` |
| Login form state moved from Redux to local useState | `src/features/auth/components/LoginForm.tsx` |
| Register form state moved from Redux to local useState | `src/features/auth/components/RegisterForm.tsx` |
| authSlice stripped to server state only (removed loginForm/registerForm) | `src/features/auth/authSlice.ts` |
| serializableCheck scoped via ignoredActionPaths | `src/store/index.ts` |
| Deleted empty stub | `src/components/shared/AuthGuard.tsx` |
| Deleted empty stub | `src/components/shared/Protected.tsx` |
| Project guidance for Claude Code | `CLAUDE.md` |
| Architecture rating and planned changes | `progress.md` |
| This change log | `fixes.md` |

## 2026-05-02 — `4198b09` — Phase 3: SEO, animations, server component wrappers

**Files changed:** 18 files, +853 / -1010

| Change | Full File Path |
|--------|----------------|
| Root layout title template + default description | `src/app/layout.tsx` |
| `fadeIn` keyframe + `.animate-fade-in` CSS utility | `src/app/globals.css` |
| Staggered PostCard entrance (50ms per card) | `src/features/posts/components/PostList.tsx` |
| Server wrapper — static metadata | `src/app/(main)/page.tsx` |
| Server wrapper — static metadata | `src/app/(main)/search/page.tsx` |
| Server wrapper — static metadata | `src/app/(main)/write/page.tsx` |
| Server wrapper — static metadata | `src/app/(main)/profile/page.tsx` |
| Server wrapper — `generateMetadata` (fetches post title/og) | `src/app/(main)/posts/[id]/page.tsx` |
| Server wrapper — `generateMetadata` (fetches user name/headline) | `src/app/(main)/profile/[username]/page.tsx` |
| Server wrapper — static metadata | `src/app/(auth)/login/page.tsx` |
| Server wrapper — static metadata | `src/app/(auth)/register/page.tsx` |
| Client component (moved from page.tsx) | `src/app/(main)/HomeClient.tsx` |
| Client component (moved from page.tsx) | `src/app/(main)/search/SearchPageClient.tsx` |
| Client component (moved from page.tsx) | `src/app/(main)/write/WritePageClient.tsx` |
| Client component (moved from page.tsx) | `src/app/(main)/profile/ProfilePageClient.tsx` |
| Client component (moved from page.tsx) | `src/app/(main)/posts/[id]/PostDetailClient.tsx` |
| Client component (moved from page.tsx) | `src/app/(main)/profile/[username]/UserProfileClient.tsx` |
