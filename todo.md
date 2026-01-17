# Implementation Plan (Todo)

## Phase 1: Environment Setup & Foundation
- [ ] **Setup Next.js Project**
    - [ ] `npx create-next-app@latest ./ --typescript --tailwind --eslint`
    - [ ] Cleanup default Next.js boilerplate code.
    - [ ] Setup `globals.css` with custom theme variables (Colors, Fonts).
    - [ ] Install essential libraries: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- [ ] **Component Architecture**
    - [ ] Create folder structure (`components/ui`, `components/sections`, `components/shared`).
    - [ ] Create basic UI components: `Button`, `Card`, `Container`.
    - [ ] Create Layout components: `Navbar` (Simple Logo), `Footer`.

## Phase 2: Landing Page UI (Static)
- [ ] **Hero Section**
    - [ ] Headline (Big, Bold).
    - [ ] Subheadline (Problem aware).
    - [ ] CTA Button (Primary & WA).
    - [ ] Hero Image (Illustration of " Peace of Mind").
- [ ] **Problem Awareness Section**
    - [ ] "Surat Terbuka" style copy.
    - [ ] Bullet points of common fears.
- [ ] **Solution Section (Product Showcase)**
    - [ ] Mockup of the "Excel Dashboard".
    - [ ] Explanation of "What's Inside".
- [ ] **Trust & Social Proof**
    - [ ] Author Profile section.
    - [ ] FAQ Accordion.
- [ ] **Pricing Section**
    - [ ] Single Pricing Card (Discounted).
    - [ ] Guarantee Badge (30 Days Money Back).

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
