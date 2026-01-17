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
- [x] **WhatsApp Integration**
    - [x] Create `FloatingWA` component.
    - [x] Generate dynamic WA links with pre-filled text.
- [x] **Midtrans Integration (Backend)**
    - [x] Setup `midtrans-client`.
    - [x] Create API Route `/api/midtrans/token` to generate Snap Token.
    - [x] Create webhook handler `/api/midtrans/notification`.
- [x] **Checkout Logic**
    - [x] Connect "Beli Sekarang" button to Midtrans API.
    - [x] Handle payment success/pending/error states.

## Phase 4: Product Creation (Digital Assets)
- [ ] **Excel Template (Master Dashboard Aset)**
    - [ ] Create Excel file with formulas (Total Net Worth, Asset Categories).
    - [ ] Add sheets: Properti, Kendaraan, Deposito, Investasi, Dokumen Penting.
    - [ ] Convert to Google Sheets version.
- [ ] **PDF Panduan (Printable)**
    - [ ] Design PDF guide (Canva/Figma).
    - [ ] Content: Cara mengisi, Tips keamanan dokumen, Template kosong untuk tulis tangan.
- [ ] **Video Tutorial**
    - [ ] Record screen tutorial (Bahasa Indonesia).
    - [ ] Upload to YouTube (Unlisted) or Vimeo.
- [ ] **Packaging**
    - [ ] Create ZIP file with all assets.
    - [ ] Upload to Google Drive (with proper permissions).

## Phase 5: SEO & Analytics
- [x] **SEO Setup**
    - [x] Update `metadata` in `layout.tsx` (Title, Description, Open Graph).
    - [x] Create `sitemap.ts` and `robots.ts`.
    - [x] Add JSON-LD Schema (Product markup).
- [x] **Analytics (Google)**
    - [x] Add Google Analytics script.
    - [x] Setup conversion tracking (Button clicks, WA clicks).

## Phase 6: Deployment
- [ ] Push to GitHub.
- [ ] Deploy to IDCloudHost VPS (Nginx + PM2).
- [ ] Configure Environment Variables (`MIDTRANS_SERVER_KEY`, etc).
- [ ] Domain Setup (if available).

