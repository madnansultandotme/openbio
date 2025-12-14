# OpenBio Development Issues

This file contains the development issues for the OpenBio MVP. Issues are categorized by difficulty and priority.

## 🔰 Beginner-Friendly Issues (Team Members)

### Issue #1: Create Loading Spinner Component
**Label**: `good first issue`, `ui/ux`
**Estimated Time**: 2-3 hours

**Description**: 
Create a reusable loading spinner component that can be used throughout the application.

**Requirements**:
- Create `src/components/ui/Spinner.tsx`
- Support different sizes (sm, md, lg)
- Support different colors
- Include TypeScript interfaces
- Add to Storybook (if implemented)

**Acceptance Criteria**:
- [ ] Component renders correctly
- [ ] Supports size variants
- [ ] Supports color customization
- [ ] Proper TypeScript types
- [ ] Used in existing loading states

**Files to modify**:
- `src/components/ui/Spinner.tsx` (new)
- Update existing components to use spinner

---

### Issue #2: Add Form Validation Messages
**Label**: `good first issue`, `enhancement`
**Estimated Time**: 3-4 hours

**Description**: 
Improve form validation by adding better error messages and validation states.

**Requirements**:
- Enhance `Input.tsx` component with validation states
- Add proper error styling
- Create validation utility functions
- Add success states for forms

**Acceptance Criteria**:
- [ ] Input component shows error states
- [ ] Success states implemented
- [ ] Validation messages are user-friendly
- [ ] Consistent styling across forms
- [ ] Accessibility improvements (aria-labels)

**Files to modify**:
- `src/components/ui/Input.tsx`
- `src/lib/validation.ts` (new)
- Form components in `src/components/auth/`

---

### Issue #3: Implement Username Availability Check
**Label**: `good first issue`, `feature`
**Estimated Time**: 4-5 hours

**Description**: 
Add real-time username availability checking during registration.

**Requirements**:
- Create API endpoint to check username availability
- Add debounced input validation
- Show availability status with icons
- Handle edge cases (reserved usernames)

**Acceptance Criteria**:
- [ ] API endpoint `/api/auth/check-username` created
- [ ] Real-time checking with debounce
- [ ] Visual feedback (available/taken/checking)
- [ ] Reserved usernames list
- [ ] Proper error handling

**Files to modify**:
- `src/app/api/auth/check-username/route.ts` (new)
- `src/components/auth/RegisterForm.tsx`
- `src/lib/utils.ts` (add reserved usernames)

---

### Issue #4: Add Link Preview Cards
**Label**: `good first issue`, `ui/ux`
**Estimated Time**: 4-6 hours

**Description**: 
Create preview cards that show how links will appear on the public profile.

**Requirements**:
- Create `LinkPreview` component
- Show link with theme styling
- Real-time preview updates
- Mobile responsive design

**Acceptance Criteria**:
- [ ] Preview component created
- [ ] Shows current theme styling
- [ ] Updates in real-time
- [ ] Mobile responsive
- [ ] Matches public profile appearance

**Files to modify**:
- `src/components/dashboard/LinkPreview.tsx` (new)
- `src/components/dashboard/LinkManager.tsx`
- `src/components/dashboard/ThemeSelector.tsx`

---

### Issue #5: Create 404 and Error Pages
**Label**: `good first issue`, `ui/ux`
**Estimated Time**: 3-4 hours

**Description**: 
Design and implement custom 404 and error pages with proper styling.

**Requirements**:
- Create custom 404 page
- Create error boundary component
- Add navigation back to home
- Include helpful messaging

**Acceptance Criteria**:
- [ ] Custom 404 page created
- [ ] Error boundary implemented
- [ ] Consistent with app design
- [ ] Helpful error messages
- [ ] Navigation options provided

**Files to modify**:
- `src/app/not-found.tsx` (new)
- `src/app/error.tsx` (new)
- `src/components/ErrorBoundary.tsx` (new)

---

## 🚀 MVP Completion Issues

### Issue #6: Implement User Authentication System
**Label**: `feature`, `backend`, `high-priority`
**Estimated Time**: 8-12 hours

**Description**: 
Complete the authentication system with registration, login, and session management.

**Requirements**:
- Complete registration API endpoint
- Complete login API endpoint
- JWT token generation and validation
- Session middleware
- Password hashing and verification

**Acceptance Criteria**:
- [ ] User registration works end-to-end
- [ ] User login works end-to-end
- [ ] JWT tokens generated and validated
- [ ] Session persistence
- [ ] Secure password handling
- [ ] Proper error handling

**Files to modify**:
- `src/app/api/auth/register/route.ts`
- `src/app/api/auth/login/route.ts`
- `src/lib/auth.ts`
- `src/middleware.ts` (new)

---

### Issue #7: Complete Profile Management
**Label**: `feature`, `backend`
**Estimated Time**: 6-8 hours

**Description**: 
Implement complete profile CRUD operations and avatar upload.

**Requirements**:
- Profile creation, reading, updating
- Avatar upload to Supabase Storage
- Username uniqueness validation
- Profile data validation

**Acceptance Criteria**:
- [ ] Profile CRUD operations work
- [ ] Avatar upload functionality
- [ ] Data validation implemented
- [ ] Error handling for edge cases
- [ ] Profile updates reflect immediately

**Files to modify**:
- `src/app/api/profile/route.ts`
- `src/components/dashboard/ProfileEditor.tsx`
- `src/lib/storage.ts` (new)

---

### Issue #8: Implement Link Management System
**Label**: `feature`, `backend`
**Estimated Time**: 8-10 hours

**Description**: 
Complete link CRUD operations with drag-and-drop reordering.

**Requirements**:
- Link creation, reading, updating, deletion
- Drag-and-drop reordering
- Link validation (URL format)
- Visibility toggle functionality

**Acceptance Criteria**:
- [ ] All link operations work
- [ ] Drag-and-drop reordering
- [ ] URL validation
- [ ] Visibility toggle
- [ ] Position management
- [ ] Real-time updates

**Files to modify**:
- `src/app/api/links/route.ts`
- `src/app/api/links/[id]/route.ts`
- `src/app/api/links/reorder/route.ts`
- `src/components/dashboard/LinkManager.tsx`

---

### Issue #9: Build Public Profile Pages
**Label**: `feature`, `frontend`
**Estimated Time**: 6-8 hours

**Description**: 
Complete public profile rendering with theme support and analytics tracking.

**Requirements**:
- Dynamic profile loading by username
- Theme rendering (all 3 themes)
- Analytics tracking (page views, clicks)
- SEO optimization
- Mobile responsive design

**Acceptance Criteria**:
- [ ] Profiles load by username
- [ ] All themes render correctly
- [ ] Analytics tracking works
- [ ] SEO meta tags generated
- [ ] Mobile responsive
- [ ] 404 handling for missing profiles

**Files to modify**:
- `src/app/[username]/page.tsx`
- `src/components/profile/PublicProfile.tsx`
- `src/app/api/analytics/route.ts`

---

### Issue #10: Complete Analytics Dashboard
**Label**: `feature`, `backend`, `frontend`
**Estimated Time**: 8-10 hours

**Description**: 
Implement analytics data collection and dashboard visualization.

**Requirements**:
- Analytics data collection
- Dashboard with charts and metrics
- Time range filtering
- Top links tracking
- Performance metrics

**Acceptance Criteria**:
- [ ] Analytics data collected
- [ ] Dashboard displays metrics
- [ ] Time range filtering works
- [ ] Top links calculated
- [ ] Performance optimized
- [ ] Real-time updates

**Files to modify**:
- `src/app/api/analytics/route.ts`
- `src/components/dashboard/AnalyticsDashboard.tsx`
- `src/lib/analytics.ts` (new)

---

### Issue #11: Theme System Implementation
**Label**: `feature`, `frontend`
**Estimated Time**: 6-8 hours

**Description**: 
Complete theme selection and customization system.

**Requirements**:
- Theme preview functionality
- Color customization
- Theme persistence
- Real-time preview updates

**Acceptance Criteria**:
- [ ] Theme selection works
- [ ] Color customization functional
- [ ] Themes persist across sessions
- [ ] Real-time preview updates
- [ ] All themes properly styled

**Files to modify**:
- `src/components/dashboard/ThemeSelector.tsx`
- `src/app/api/profile/route.ts`
- `src/components/profile/PublicProfile.tsx`

---

### Issue #12: Database Setup and Deployment
**Label**: `infrastructure`, `deployment`
**Estimated Time**: 4-6 hours

**Description**: 
Set up production database and deployment configuration.

**Requirements**:
- Supabase project setup
- Database schema deployment
- Environment configuration
- Deployment scripts

**Acceptance Criteria**:
- [ ] Database schema deployed
- [ ] RLS policies configured
- [ ] Environment variables documented
- [ ] Deployment guide created
- [ ] Production ready

**Files to modify**:
- `database/schema.sql`
- `README.md`
- `docker-compose.yml` (new)
- `.env.example`

---

## 📋 Issue Assignment Guidelines

### For Team Members (Beginner Issues #1-5):
- Choose one issue that interests you
- Comment on the issue to claim it
- Ask questions if anything is unclear
- Submit PR when ready for review

### For MVP Completion (Issues #6-12):
- These require more experience
- Can be tackled after completing beginner issues
- May require coordination between team members
- Higher priority for MVP launch

### Development Workflow:
1. Pick an issue and comment to claim it
2. Create a branch: `git checkout -b issue-#-description`
3. Work on the issue following the requirements
4. Test your changes thoroughly
5. Submit PR with reference to issue number
6. Request review from team members

### Getting Help:
- Ask questions in issue comments
- Join team discussions
- Review existing code for patterns
- Check documentation and examples

---

**Total Estimated Time for MVP**: 60-80 hours
**Recommended Team Size**: 5 developers
**Timeline**: 4 weeks (as per PRD)