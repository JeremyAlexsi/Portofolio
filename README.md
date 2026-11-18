# 🚀 3D Interactive Portfolio & Software Engineering Hub

Portofolio web modern, interaktif, dan berkinerja tinggi yang dirancang untuk **Senior Software Engineer & 3D Web Architect**, dibangun dengan: **React 18**, **TypeScript**, **Three.js (React Three Fiber & Drei)**, **GSAP 3**, dan **Lenis Smooth Scroll**.

---

## 🎨 Palet Warna Baru: Terang & Kontras Tinggi

1. **Light Tech Mode (Default) & Dark Slate Mode Toggle**:
   - **Mode Terang (Default)**: Latar belakang bersih `#f8fafc` dengan kartu putih bersih `#ffffff`, border slate halus `border-slate-200`, dan pola grid sirkuit rekayasa (`bg-tech-grid`).
   - **Mode Gelap**: Latar belakang slate `#0f172a` dengan panel `#1e293b`.
   - Dilengkapi tombol toggle matahari/bulan (*Sun / Moon*) di navbar untuk beralih secara instan.

2. **Warna Kontras Baru: Electric Flame Orange (`#ff5400`)**:
   - Menjadi warna kontras utama melengkapi Cyan (`#00f2fe`) dan Purple (`#a855f7`).
   - Digunakan pada:
     - Cincin orbital ke-3 di Three.js Scene 3D.
     - Partikel bintang 3D bercahaya oranye.
     - Node commit Git, tombol CTA utama, badge trunk, dan progress bar skill.

---

## 📐 Desain Grafis Khusus Software Engineer

Komponen baru di [src/components/SoftwareEngineerGraphics.tsx](file:///d:/laragon/www/portofolio/src/components/SoftwareEngineerGraphics.tsx):

1. **Visual Git Branch Graph (SVG)**:
   - Alur branch `main`, `feat/webgl-worker`, dan `hotfix/cache`.
   - Node commit interaktif: mengeklik node menampilkan detail hash, author, pesan commit, dan metrik diff (+248 / -42).
2. **Diagram Chip Silikon / Microprocessor ("AP-ENGINE 3D SOC")**:
   - Pemetaan arsitektur die chip prosesor: *Core-01 GPU Shader*, *Core-02 Multithread Worker*, *Ring Buffer Cache*, dan *WebSocket Bus*.
   - Blok interaktif dengan statistik performa perangkat keras.
3. **Graphic Diff Optimasi Kode**:
   - Visualisasi perbandingan refactor performa: `52.4ms -> 3.6ms (14.6x Speedup)`.
4. **Topologi Arsitektur Sistem 4-Tier & CLI Shell**:
   - Terminal zsh interaktif (`alex-engineering-shell`) dengan perintah `arch`, `benchmarks`, `stack`, `git-status`.

---

## 🚀 Cara Menjalankan

```bash
# 1. Jalankan development server
npm run dev
# Buka di browser: http://localhost:5173

# 2. Build untuk produksi
npm run build
```
