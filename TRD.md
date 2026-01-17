# Technical Requirements Document (TRD)
## Project Name: JuraganVault (MVP)

### 1. System Architecture
*   **Framework:** Next.js 14+ (App Router).
    *   Using server-side rendering (SSR) for maximum SEO performance.
*   **Language:** TypeScript (Strict mode).
*   **Styling:** Tailwind CSS.
    *   Configured with a custom theme for "Premium/Trustworthy" look (Fonts, Colors).
*   **State Management:** React Context (if needed) or simple Local State (since it's mostly static/form).
*   **Deployment:** Self-Hosted VPS (IDCloudHost).
    *   OS: Ubuntu LTS.
    *   Process Manager: PM2.
    *   Web Server: Nginx (Reverse Proxy).

### 2. Project Structure
```
/
├── app/
│   ├── layout.tsx       # Root layout (Fonts, Meta tags base)
│   ├── page.tsx         # Landing Page (The long-form sales letter)
│   ├── blog/            # SEO Content folder
│   │   └── [slug]/page.tsx
│   ├── checkout/        # Checkout flow page
│   └── api/             # Backend API Routes
│       └── midtrans/    # Payment handler
├── components/
│   ├── ui/              # Atom components (Buttons, Cards, Inputs)
│   ├── sections/        # Landing page sections (Hero, Features, FAQ)
│   └── shared/          # Floating WA Button, Footer, Navbar
├── lib/
│   ├── midtrans.ts      # Midtrans setup & helper functions
│   └── google-sheets.ts # (Optional) Lead capture
└── public/              # Static assets (Images, Icons)
```

### 3. Key Technical Features
#### A. SEO Optimization
*   **Metadata:** Dynamic metadata generation for every page (Title, Description, OG Image).
*   **Sitemap:** Auto-generated `sitemap.xml` for Google indexing.
*   **Robots.txt:** Standard configuration.
*   **Schema Markup (JSON-LD):** Product schema for rich snippets in Google Search.

#### B. Payment Integration (Midtrans)
*   **Snap API:** Embedded popup payment or Redirect mode.
*   **Notification Handler:** Webhook endpoint to receive payment status updates (Settlement, Expire, Pending).

#### C. Performance Goals
*   **Core Web Vitals:** All Green (LCP < 2.5s, CLS < 0.1).
*   **Mobile First:** Design implementation must be mobile-responsive first, then adapt to desktop.

### 4. Dependencies
*   `next`
*   `react`, `react-dom`
*   `tailwindcss`
*   `framer-motion` (for subtle micro-interactions & animations)
### 5. Deployment Strategy (Self-Hosted)
*   **Provider:** IDCloudHost (VPS).
*   **CI/CD:** Manual git pull or GitHub Actions (Simple SSH deployment).
*   **Domain:** TBD (Targeting `.id` or `.com` with "Trustworthy" naming).

### 6. Scalability & Global Expansion Notes
*   **Global Market Potential:** High (Universal problem).
*   **Challenges:**
    *   **Legal:** Excel formulas must be adjusted for specific country laws (US Estate Tax vs Indo Waris Islam/Perdata).
    *   **Payment:** Switch Midtrans to Stripe/PayPal.
*   **Strategy:** Win local market first -> Duplicate codebase -> Localize content & legal logic -> Launch Global Brand.
