# Progress

## Architecture Rating: 5/10

### Strengths
- Feature-based folder structure (`src/features/<name>/`) with clean service/slice/hooks/components separation
- Centralized API endpoints (`src/constants/api.ts`) and routes (`src/constants/routes.ts`)
- Typed store hooks in `src/store/hooks.ts`

### Issues Found

| Priority | Issue | File | Fix |
|----------|-------|------|-----|
| 🔴 Critical | `.env.local` missing `/api` suffix — all API calls hit wrong base URL | `.env.local` | Change to `NEXT_PUBLIC_API_URL=https://be-blg-production.up.railway.app/api` |
| 🔴 Critical | No server-side route protection — `/profile`, `/write` only guarded client-side | `src/app/(main)/` | Add `middleware.ts` at project root |
| 🟡 Medium | Form field state in Redux (`loginForm`, `registerForm`) — overkill for local UI state | `src/features/auth/authSlice.ts` | Move to `useState` in `LoginForm.tsx` / `RegisterForm.tsx` |
| 🟡 Medium | `console.log('API_BASE_URL:', ...)` left in production code | `src/lib/api.ts:12` | Remove |
| 🟡 Medium | `serializableCheck: false` disables check globally; only File uploads need exemption | `src/store/index.ts` | Use `ignoredActions` for specific upload thunks |
| 🟢 Low | `AuthGuard.tsx` and `Protected.tsx` are empty files | `src/components/shared/` | Implement or delete |
| 🟢 Low | No test setup at all | — | Add Vitest or Jest + React Testing Library |

---

## Planned Changes

### Phase 1 — Bug Fixes ✅ (commit `0d70830`)
- [x] Fix `.env.local`: add `/api` suffix to `NEXT_PUBLIC_API_URL`
- [x] Remove `console.log` from `src/lib/api.ts`

### Phase 2 — Architecture Improvements ✅ (commit `0d70830`)
- [x] Add `src/middleware.ts` for server-side route protection
- [x] Refactor `authSlice`: remove `loginForm`/`registerForm` state, move to local state in components
- [x] Scope `serializableCheck` to only affected actions instead of blanket `false`
- [x] Remove empty `AuthGuard.tsx` and `Protected.tsx`

### Phase 3 — Bonus Features ✅ (commit `4198b09`)
- [x] Search functionality — already wired (Navbar → `/search?q=` → SearchPage)
- [x] Pagination — already wired on home and search pages
- [x] SEO optimization — per-page metadata, dynamic `generateMetadata` for posts and profiles
- [x] Animations/transitions — `fadeIn` keyframe, staggered PostCard entrance

### Phase 4 — Functionality Audit ✅
- [x] Wire up `changePassword` API — was showing fake success (TODO stub)
- [x] Add `likePost` to ProfilePosts — post cards on profile page couldn't be liked
- [x] Fix `Search.svg` casing in Navbar — would 404 on Linux/production
- [x] Null-safe `author.username` in PostDetail — link crashed when username missing
- [x] Replace `default-avatar.png` refs with `default-avatar.svg` (7 files)
- [x] Create `public/assets/images/default-avatar.svg` (was missing entirely)
- [x] Create `public/assets/icons/user.svg` and `logout.svg` (Navbar dropdown icons)
- [x] Delete empty `src/features/comments/hooks/useAuth.ts` stub

---

### Phase 5 — Phase 5 Critical & Major Fixes (Ultra-Instinct session 2)

#### Milestone 1 — Critical Fixes
- [x] **[ARCH]** Fix shared `posts` Redux state data-race — split `MostLiked` into its own isolated slice or local state so it doesn't overwrite the main feed — `src/features/posts/components/MostLiked.tsx`, `src/features/posts/postSlice.ts`
- [x] **[BUG]** Fix `comment.svg` casing — rename reference from `comment.svg` to `Comment.svg` — `src/features/posts/components/PostCard.tsx:149`

#### Milestone 2 — Major Quality Fixes
- [x] **[QUAL]** Fix `LoginForm` to fetch user profile after login (consistent with `useAuth.login()`) — `src/features/auth/components/LoginForm.tsx:47`
- [x] **[QUAL]** Remove double-fetch on homepage — eliminate `getRecommended` call from `HomeClient` and let `PostList` own the fetch — `src/app/(main)/HomeClient.tsx`
- [x] **[ARCH]** Remove dead `fetchUserById` no-op thunk fulfillment or store the result — `src/features/profile/profileSlice.ts:134`
- [x] **[QUAL]** Replace `window.location.reload()` in `EditProfileModal` with `router.refresh()` + Redux re-fetch — `src/features/profile/components/EditProfileModal.tsx:96`
- [x] **[QUAL]** Fix `EditProfileModal` `any` type → `UpdateProfileDto`, wire up bio field — `src/features/profile/components/EditProfileModal.tsx:74,187`
- [x] **[SEC]** Add `Secure` cookie flag for production in `setAuthToken` — `src/lib/api.ts:112`

#### Milestone 3 — Dead Code & Polish
- [ ] **[QUAL]** Delete empty stub files: `PostForm.tsx`, `useLogin.ts`
- [ ] **[QUAL]** Delete unused UI components: `Dropdown.tsx`, `DropdownItem.tsx`, `Modal.tsx`
- [ ] **[QUAL]** Fix Navbar typo `grouh-30` — `src/components/layout/Navbar.tsx:165`
- [ ] **[QUAL]** Remove redundant `UserType`/`PostType`/`CommentType` re-exports — `src/types/index.ts:309`
- [ ] **[QUAL]** Remove unused `getPasswordStrength` export — `src/utils/validation.ts:43`

---

## Session Log

| Date | Work Done | Tokens Used |
|------|-----------|-------------|
| 2026-05-02 | Initial codebase analysis, created CLAUDE.md, architecture rating, this progress.md | — |
| 2026-05-12 | Deep audit (Ultra-Instinct session 2): generated origin.md, added Phase 5 milestones | — |
