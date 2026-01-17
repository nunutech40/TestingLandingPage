# Cara Pakai Google Analytics - Panduan Simpel

## 🎯 Tujuan: Lihat Berapa Orang yang Visit & Klik Tombol

---

## STEP 1: Bikin Akun Google Analytics (Gratis)

### 1.1 Buka Website
- Buka: https://analytics.google.com/
- Login pakai akun Google kamu

### 1.2 Klik "Start Measuring"
- Kalau baru pertama kali, klik tombol biru **"Start measuring"**
- Kalau sudah punya akun, klik **"Admin"** (icon gear di kiri bawah)

### 1.3 Buat Account
- **Account name:** Tulis nama kamu (misal: "Nunu Business")
- Centang semua checkbox
- Klik **Next**

### 1.4 Buat Property
- **Property name:** `JuraganVault`
- **Timezone:** `(GMT+07:00) Jakarta`
- **Currency:** `Indonesian Rupiah (IDR)`
- Klik **Next**

### 1.5 Isi Business Info (Opsional, bisa skip)
- Industry: `Finance`
- Business size: `Small`
- Klik **Next**

### 1.6 Setup Data Stream
- Pilih platform: **Web**
- **Website URL:** `http://localhost:3000` (untuk testing dulu)
- **Stream name:** `JuraganVault Landing Page`
- Klik **Create stream**

---

## STEP 2: Copy Measurement ID

Setelah buat Data Stream, kamu akan lihat halaman seperti ini:

```
Web stream details
─────────────────
Stream name: JuraganVault Landing Page
Stream URL: http://localhost:3000
Measurement ID: G-XXXXXXXXXX  ← INI YANG PENTING!
```

**COPY** Measurement ID-nya (format: `G-XXXXXXXXXX`)

---

## STEP 3: Pasang ke Website

### 3.1 Buat File `.env.local`
Di folder project kamu, buat file baru namanya `.env.local` (persis seperti itu, pakai titik di depan).

### 3.2 Isi File
Paste ini ke dalam file `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Ganti** `G-XXXXXXXXXX` dengan Measurement ID asli yang kamu copy tadi.

Contoh:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123DEF4
```

### 3.3 Restart Server
Matikan server (`Ctrl+C` di terminal), lalu jalankan lagi:
```bash
npm run dev
```

---

## STEP 4: Test Apakah Sudah Jalan

### 4.1 Buka Website
Buka `http://localhost:3000` di browser.

### 4.2 Cek di Google Analytics
1. Balik ke Google Analytics
2. Klik **Reports** (icon di kiri)
3. Klik **Realtime** (paling atas)
4. Tunggu 10-30 detik

**Kalau berhasil**, kamu akan lihat:
```
Users in last 30 minutes
    1
```

Artinya Google Analytics sudah tracking kamu sebagai visitor!

---

## STEP 5: Lihat Data Visitor (Setelah Ada Traffic)

### 5.1 Lihat Jumlah Visitor
1. **Reports** → **Acquisition** → **Traffic acquisition**
2. Kamu akan lihat:
   - **Users:** Berapa orang yang visit
   - **Sessions:** Berapa kali orang buka website
   - **Bounce rate:** Berapa % yang langsung close

### 5.2 Lihat Klik Tombol
1. **Reports** → **Engagement** → **Events**
2. Kamu akan lihat event:
   - `click_checkout_hero` → Berapa yang klik "Pesan Sekarang" di atas
   - `click_checkout_pricing` → Berapa yang klik "Pesan Sekarang" di pricing
   - `click_whatsapp` → Berapa yang klik tombol WA
   - `page_view` → Berapa kali halaman dibuka

### 5.3 Lihat Dari Mana Visitor Datang
1. **Reports** → **Acquisition** → **User acquisition**
2. Kamu akan lihat:
   - `Direct` → Langsung ketik URL
   - `Organic Search` → Dari Google
   - `Social` → Dari Facebook/Instagram
   - `Referral` → Dari website lain

---

## STEP 6: Setup Conversion (Opsional)

Ini untuk tracking **berapa % visitor yang checkout**.

### 6.1 Tandai Event sebagai Conversion
1. **Admin** → **Events**
2. Cari event `click_checkout_hero`
3. Toggle **"Mark as conversion"** jadi ON (hijau)
4. Ulangi untuk `click_checkout_pricing`

### 6.2 Lihat Conversion Rate
1. **Reports** → **Engagement** → **Conversions**
2. Kamu akan lihat:
   - **Conversions:** Berapa orang yang klik checkout
   - **Conversion rate:** % visitor yang checkout

Contoh:
- 100 visitor → 10 klik checkout = **10% conversion rate**

---

## 📊 Cheat Sheet: Data Penting yang Harus Kamu Pantau

| Metric | Artinya | Target Bagus |
|--------|---------|--------------|
| **Users** | Jumlah orang yang visit | Makin banyak makin bagus |
| **Bounce Rate** | % yang langsung close | < 50% (makin kecil makin bagus) |
| **Avg. Session Duration** | Berapa lama orang baca | > 1 menit |
| **Conversion Rate** | % yang klik checkout | > 2-5% |
| **click_whatsapp** | Berapa yang chat WA | Makin banyak makin bagus |

---

## ❓ Troubleshooting

### "Gak ada data di Realtime"
1. Cek apakah `.env.local` sudah diisi dengan benar
2. Restart server (`Ctrl+C` lalu `npm run dev`)
3. Clear cache browser (Ctrl+Shift+Delete)
4. Coba buka di Incognito mode

### "Measurement ID salah terus"
- Pastikan format: `G-XXXXXXXXXX` (huruf G, strip, lalu 10 karakter)
- Jangan ada spasi
- Jangan ada tanda kutip

### "Data gak update"
- Google Analytics butuh waktu 24-48 jam untuk data lengkap
- Untuk data real-time, lihat di **Realtime** (update tiap 30 detik)

---

## 🚀 Production (Setelah Deploy)

Setelah website live di domain asli (bukan localhost):

1. **Buat Data Stream baru** di Google Analytics:
   - URL: `https://yourdomain.com` (domain asli)
   - Copy Measurement ID yang baru

2. **Update `.env.local`** di server production dengan Measurement ID yang baru

3. **Verifikasi** di Realtime apakah tracking jalan

---

Selesai! Sekarang kamu bisa pantau traffic website 24/7 🎉
