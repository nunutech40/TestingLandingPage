# Implementation Plan (Todo)

## Phase 1: Environment Setup & Foundation
- [x] **Setup Next.js Project**
    - [x] `npx create-next-app@latest ./ --typescript --tailwind --eslint`
    - [x] Cleanup default Next.js boilerplate code.
    - [x] Setup `globals.css` with custom theme variables (Colors, Fonts).
    - [x] Install essential libraries: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- [x] **Component Architecture**
    - [x] Create folder structure (`components/ui`, `components/sections`, `components/shared`).
    - [x] Create basic UI components: `Button`, `Card`, `Container`.
    - [x] Create Layout components: `Navbar` (Simple Logo), `Footer`.

## Phase 2: Landing Page UI (Static)
- [x] **Hero Section**
    - [x] Headline (Big, Bold).
    - [x] Subheadline (Problem aware).
    - [x] CTA Button (Primary & WA).
    - [x] Hero Image (Illustration of " Peace of Mind").
- [x] **Problem Awareness Section**
    - [x] "Surat Terbuka" style copy.
    - [x] Bullet points of common fears.
- [x] **Solution Section (Product Showcase)**
    - [x] Mockup of the "Excel Dashboard".
    - [x] Explanation of "What's Inside".
- [x] **Trust & Social Proof**
    - [x] Author Profile section.
    - [x] FAQ Accordion.
- [x] **Pricing Section**
    - [x] Single Pricing Card (Discounted).
    - [x] Guarantee Badge (30 Days Money Back).

## Phase 3: Integration & Logic
- [ ] **WhatsApp Integration**
    - [ ] Create `FloatingWA` component.
    - [ ] Generate dynamic WA links with pre-filled text.
- [ ] **Midtrans Integration (Backend)**
    - [ ] Setup `midtrans-client`.
    - [ ] Create API Route `/api/midtrans/token` to generate Snap Token.
    - [ ] Create webhook handler `/api/midtrans/notification` (optional for MVP Phase 1).
- [ ] **Checkout Logic**
    - [ ] Connect "Beli Sekarang" button to Midtrans API.
    - [ ] Handle payment success/pending/error states.

## Phase 4: Delivery & Optimization
- [ ] **Thank You Page**
    - [ ] Create `/thank-you` page.
    - [ ] Add Download Button (Direct Google Drive link).
- [ ] **SEO Setup**
    - [ ] Update `metadata` in `layout.tsx` (Title, Description, Open Graph).
    - [ ] Create `sitemap.ts` and `robots.ts`.
- [ ] **Analytics (Google)**
    - [ ] Add Google Analytics script.

## Phase 5: Deployment
- [ ] Push to GitHub.
- [ ] Deploy to Vercel.
- [ ] Configure Environment Variables (`MIDTRANS_SERVER_KEY`, etc).
- [ ] Domain Setup (if available).
