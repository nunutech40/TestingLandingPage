# JuraganVault - Landing Page

Landing page untuk produk digital **JuraganVault**: Template & Panduan Praktis Pencatatan Aset untuk Keluarga Indonesia.

## 🎯 Tujuan Project

Membuat landing page yang **high-converting** untuk menjual produk digital (Excel Template + PDF + Video Tutorial) dengan target market **bapak-bapak usia 40-60 tahun** yang memiliki aset tapi pencatatannya berantakan.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Payment:** Midtrans Snap
- **Deployment:** IDCloudHost VPS (Nginx + PM2)

## 📦 Fitur Utama

### Landing Page
- ✅ Hero Section (Headline emosional + Dual CTA)
- ✅ Problem Awareness Section (Pain points)
- ✅ Solution Section (Product showcase)
- ✅ Pricing Section (Harga promo Rp 297k)
- ✅ Floating WhatsApp Button
- ✅ Responsive Design (Mobile-first)

### Payment Integration
- ✅ Midtrans Snap (Sandbox mode)
- ✅ Checkout Modal
- ✅ Webhook Handler
- ✅ Thank You Page

### SEO Optimization
- ✅ Meta Tags (Title, Description)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ JSON-LD Schema (Product markup)

## 🛠️ Setup Development

### 1. Clone & Install
```bash
cd /path/to/TestingLandingPage
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Isi dengan Midtrans credentials Anda:
```env
MIDTRANS_SERVER_KEY=your_server_key_here
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=your_client_key_here
```

Dapatkan credentials dari [Midtrans Dashboard](https://dashboard.midtrans.com/).

### 3. Run Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### 4. Build Production
```bash
npm run build
npm start
```

## 📁 Struktur Project

```
/
├── app/
│   ├── api/midtrans/          # API routes untuk Midtrans
│   ├── thank-you/             # Halaman setelah pembayaran
│   ├── layout.tsx             # Root layout (Navbar, Footer, SEO)
│   ├── page.tsx               # Landing page utama
│   ├── sitemap.ts             # Sitemap generator
│   └── robots.ts              # Robots.txt generator
├── components/
│   ├── sections/              # Section components (Hero, Problem, etc)
│   ├── shared/                # Shared components (Navbar, Footer, WA)
│   └── ui/                    # Base UI components (Button, Container)
├── lib/
│   ├── midtrans.ts            # Midtrans helper functions
│   └── utils.ts               # Utility functions
└── public/                    # Static assets (images)
```

## 🎨 Customization

### Ubah Nomor WhatsApp
Edit di file-file berikut:
- `components/sections/hero-section.tsx`
- `components/sections/pricing-section.tsx`
- `components/shared/floating-whatsapp.tsx`
- `app/thank-you/page.tsx`

Ganti `62878310251570` dengan nomor WA Anda.

### Ubah Harga
Edit di:
- `components/sections/hero-section.tsx` (line ~48)
- `components/sections/pricing-section.tsx` (line ~84, ~112)
- `app/api/midtrans/token/route.ts` (line ~21)

### Ubah Domain (untuk Production)
Edit di:
- `app/sitemap.ts` (line 4)
- `app/robots.ts` (line 4)
- `app/layout.tsx` (line 54 - JSON-LD schema)

## 🚀 Deployment

### Deploy ke IDCloudHost VPS

1. **Setup Server (Ubuntu)**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx
```

2. **Upload Project**
```bash
# Di local
git init
git add .
git commit -m "Initial commit"
git push origin main

# Di server
git clone <your-repo-url>
cd TestingLandingPage
npm install
npm run build
```

3. **Run with PM2**
```bash
pm2 start npm --name "juraganvault" -- start
pm2 save
pm2 startup
```

4. **Setup Nginx**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Setup SSL (Optional)**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 📝 Todo Next

Lihat `todo.md` untuk task yang belum selesai:
- [ ] **Phase 4:** Bikin produk digital (Excel, PDF, Video)
- [ ] **Phase 5:** Setup Google Analytics
- [ ] **Phase 6:** Deploy ke production

## 📞 Support

Jika ada pertanyaan, hubungi via WhatsApp: **0878-3102-5157**

## 📄 License

Private project. All rights reserved.
