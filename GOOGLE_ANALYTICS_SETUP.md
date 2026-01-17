# Setup Google Analytics 4 (GA4)

## 1. Buat Akun Google Analytics

1. Buka [Google Analytics](https://analytics.google.com/)
2. Klik **"Start measuring"** atau **"Admin"** (kalau sudah punya akun)
3. Buat **Property** baru:
   - Property name: `JuraganVault`
   - Timezone: `(GMT+07:00) Jakarta`
   - Currency: `Indonesian Rupiah (IDR)`
4. Pilih **"Web"** sebagai platform
5. Setup **Data Stream**:
   - Website URL: `https://yourdomain.com` (atau `http://localhost:3000` untuk testing)
   - Stream name: `JuraganVault Landing Page`

## 2. Dapatkan Measurement ID

Setelah membuat Data Stream, kamu akan mendapatkan **Measurement ID** dengan format:
```
G-XXXXXXXXXX
```

Copy Measurement ID ini.

## 3. Setup Environment Variable

1. Buat/edit file `.env.local` di root project:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   
2. Ganti `G-XXXXXXXXXX` dengan Measurement ID asli dari Google Analytics.

3. Restart dev server:
   ```bash
   npm run dev
   ```

## 4. Verifikasi Tracking

### Testing di Local:
1. Buka `http://localhost:3000`
2. Buka **Chrome DevTools** (F12)
3. Tab **Network** → Filter `gtag`
4. Refresh halaman
5. Kamu akan lihat request ke `www.googletagmanager.com`

### Testing di Google Analytics:
1. Buka [Google Analytics](https://analytics.google.com/)
2. Pilih Property **JuraganVault**
3. Klik **Reports** → **Realtime**
4. Buka website kamu di tab baru
5. Dalam 30 detik, kamu akan lihat **1 active user** di dashboard

## 5. Event Tracking yang Sudah Disetup

Landing page sudah dilengkapi dengan event tracking untuk:

### Event: `click_checkout_hero`
- **Trigger:** User klik tombol "Pesan Sekarang" di Hero Section
- **Parameters:** `{ location: 'hero_section' }`

### Event: `click_checkout_pricing`
- **Trigger:** User klik tombol "Pesan Sekarang" di Pricing Section
- **Parameters:** `{ location: 'pricing_section' }`

### Event: `click_whatsapp`
- **Trigger:** User klik tombol "Chat Admin WA"
- **Parameters:** `{ location: 'hero_section' | 'pricing_section' | 'floating' }`

### Event: `page_view`
- **Trigger:** Otomatis setiap halaman dibuka
- **Parameters:** `{ page_path: '/path' }`

## 6. Melihat Data Event

1. Buka Google Analytics
2. **Reports** → **Engagement** → **Events**
3. Kamu akan lihat semua event yang ter-trigger:
   - `click_checkout_hero`
   - `click_whatsapp`
   - `page_view`
   - dll

## 7. Setup Conversion Goals (Opsional)

Untuk tracking conversion rate (berapa % visitor yang checkout):

1. **Admin** → **Events**
2. Klik **"Mark as conversion"** pada event:
   - `click_checkout_hero`
   - `click_checkout_pricing`
3. Sekarang kamu bisa lihat **Conversion Rate** di dashboard

## 8. Production Checklist

Sebelum deploy ke production:
- [ ] Ganti Measurement ID di `.env.local` dengan Production ID (bukan testing)
- [ ] Pastikan `.env.local` **TIDAK** di-commit ke Git (sudah ada di `.gitignore`)
- [ ] Setup environment variable di server deployment (IDCloudHost)

## Troubleshooting

### GA tidak tracking?
1. Cek apakah `NEXT_PUBLIC_GA_MEASUREMENT_ID` sudah diisi di `.env.local`
2. Restart dev server (`npm run dev`)
3. Clear browser cache
4. Cek Console browser untuk error

### Event tidak muncul di GA?
1. Tunggu 5-10 menit (GA butuh waktu untuk process data)
2. Cek di **Realtime** dulu, baru cek di **Reports**
3. Pastikan event name sama persis (case-sensitive)
