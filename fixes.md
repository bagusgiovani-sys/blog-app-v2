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

## 2026-05-02 — `5886257` — Phase 4: Functionality audit fixes

**Files changed:** 10 files

| Change | Full File Path |
|--------|----------------|
| Wire up `changePassword` API call (was stubbed with TODO) | `src/features/profile/components/ChangePasswordForm.tsx` |
| Add `likePost` + staggered animation to profile posts; Link replace window.location | `src/features/profile/components/ProfilePosts.tsx` |
| Fix `Search.svg` casing (3 occurrences) | `src/components/layout/Navbar.tsx` |
| Null-safe `author.username` on profile link | `src/features/posts/components/PostDetail.tsx` |
| `default-avatar.png` → `default-avatar.svg` | `src/components/layout/Navbar.tsx` |
| `default-avatar.png` → `default-avatar.svg` | `src/features/posts/components/PostDetail.tsx` |
| `default-avatar.png` → `default-avatar.svg` | `src/app/(main)/write/WritePageClient.tsx` |
| `default-avatar.png` → `default-avatar.svg` | `src/app/(main)/profile/ProfilePageClient.tsx` |
| `default-avatar.png` → `default-avatar.svg` | `src/app/(main)/profile/[username]/UserProfileClient.tsx` |
| `default-avatar.png` → `default-avatar.svg` | `src/features/profile/components/EditProfileModal.tsx` |
| `default-avatar.png` → `default-avatar.svg` | `src/features/comments/components/CommentItem.tsx` |
| New SVG default avatar asset | `public/assets/images/default-avatar.svg` |
| New icon assets for Navbar dropdown | `public/assets/icons/user.svg`, `public/assets/icons/logout.svg` |
| Deleted empty stub | `src/features/comments/hooks/useAuth.ts` |

## 2026-05-12 — Phase 5 Milestone 3: Dead code removal and polish

**Files changed:** 7 files

| Change | Full File Path |
|--------|----------------|
| Delete empty stub | `src/features/posts/components/PostForm.tsx` |
| Delete empty stub | `src/features/auth/hooks/useLogin.ts` |
| Delete unused UI component | `src/components/ui/Dropdown.tsx` |
| Delete unused UI component | `src/components/ui/DropdownItem.tsx` |
| Delete unused UI component | `src/components/ui/Modal.tsx` |
| Fix `grouh-30 w-30 mr-12` Tailwind typo on Write Post icon | `src/components/layout/Navbar.tsx` |
| Remove redundant `UserType`/`PostType`/`CommentType` re-exports | `src/types/index.ts` |
| Remove unused `getPasswordStrength` export | `src/utils/validation.ts` |

## 2026-05-12 — Phase 5 Milestone 2: Major quality fixes

**Files changed:** 8 files

| Change | Full File Path |
|--------|----------------|
| `LoginForm` now uses `useAuth.login()` (fetches profile after login) instead of raw dispatch | `src/features/auth/components/LoginForm.tsx` |
| Remove double-fetch: `HomeClient` no longer calls `getRecommended` itself | `src/app/(main)/HomeClient.tsx` |
| Delete dead `fetchUserById` thunk + no-op fulfillment handler | `src/features/profile/profileSlice.ts` |
| Remove `getUserById` from `useProfile` hook (was never called) | `src/features/profile/hooks/useProfile.ts` |
| Replace `window.location.reload()` with `router.refresh()` in `EditProfileModal` | `src/features/profile/components/EditProfileModal.tsx` |
| Fix `any` → `UpdateProfileDto` in `EditProfileModal`, wire up bio field | `src/features/profile/components/EditProfileModal.tsx` |
| Remove "Bio may not be saved" stale comment from bio field UI | `src/features/profile/components/EditProfileModal.tsx` |
| Wire bio into PATCH `/users/profile` FormData | `src/features/profile/profile.service.ts` |
| Add `Secure` cookie flag for HTTPS production | `src/lib/api.ts:112` |

## 2026-05-12 — Phase 5 Milestone 1: Critical fixes

**Files changed:** 2 files

| Change | Full File Path |
|--------|----------------|
| Fix data-race: `MostLiked` now fetches via local state instead of shared Redux `posts` slice | `src/features/posts/components/MostLiked.tsx` |
| Fix `comment.svg` → `Comment.svg` casing (would 404 on Linux/production) | `src/features/posts/components/PostCard.tsx:149` |
