# CARA IMPORT CSV KE GOOGLE SHEETS

## Langkah 1: Buka Google Sheets
1. Buka https://sheets.google.com
2. Klik **Blank** (Sheet kosong baru)

## Langkah 2: Import CSV Pertama (Dashboard)
1. Klik **File** → **Import**
2. Klik tab **Upload**
3. Drag & drop file `1_DASHBOARD.csv` atau klik **Browse** untuk pilih file
4. Di popup "Import file":
   - **Import location:** Pilih **Replace spreadsheet**
   - **Separator type:** Pilih **Comma**
   - Klik **Import data**

## Langkah 3: Rename Sheet
1. Di bawah (tab sheet), klik kanan **Sheet1**
2. Pilih **Rename**
3. Ganti jadi **DASHBOARD**

## Langkah 4: Import Sheet Lainnya
Untuk setiap file CSV lainnya (2-7):
1. Klik tombol **+** di bawah (sebelah tab DASHBOARD) untuk bikin sheet baru
2. Klik **File** → **Import**
3. Upload file CSV berikutnya
4. Di popup "Import file":
   - **Import location:** Pilih **Replace current sheet** (PENTING!)
   - **Separator type:** Comma
   - Klik **Import data**
5. Rename sheet sesuai nama file:
   - `2_ASET_PROPERTI.csv` → Rename jadi **ASET_PROPERTI**
   - `3_ASET_KENDARAAN.csv` → Rename jadi **ASET_KENDARAAN**
   - Dan seterusnya...

## Langkah 5: Rapikan Tampilan (Opsional)
1. **Header Row:** Blok baris pertama (header), klik **Format** → **Text** → **Bold**
2. **Warna Header:** Pilih warna background **Biru** (#4285F4) dan font **Putih**
3. **Format Angka:** Blok kolom harga, klik **Format** → **Number** → **Currency** → **Indonesian Rupiah (Rp)**
4. **Freeze Header:** Klik **View** → **Freeze** → **1 row** (biar header tetap keliatan saat scroll)

## Langkah 6: Rename File & Download
1. Klik nama file di pojok kiri atas (default: "Untitled spreadsheet")
2. Ganti jadi: **JuraganVault_Template_v1**
3. Untuk download jadi Excel:
   - **File** → **Download** → **Microsoft Excel (.xlsx)**

## Langkah 7: Upload ke Google Drive
1. File Google Sheets otomatis tersimpan di Google Drive kamu
2. Klik **Share** (pojok kanan atas)
3. Klik **Copy link**
4. Paste link ini di halaman Thank You website JuraganVault

---

## 🎨 Tips Tambahan:
- Tambahkan **Conditional Formatting** untuk highlight utang yang jatuh tempo
- Buat **Chart** di Dashboard untuk visualisasi aset
- Protect sheet dengan password: **Data** → **Protect sheets and ranges**

Selesai! Template Excel JuraganVault siap dipakai 🎉
