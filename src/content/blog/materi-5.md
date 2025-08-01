---
templateKey: artikel-sub-page
thumbnail: /img/mikrotik.jpg
date: 2023-03-16T04:59:59.653Z
title: Mikrotik Fundamental
description: "Pintu masuk ke dunia jaringan profesional"
tags:
 - kursus mikrotik fundamental
 - pelatihan mikrotik fundamental
 - training mikrotik fundamental untuk pemula
 - belajar mikrotik fundamental dari nol
 - mikrotik fundamental untuk teknisi jaringan
 - dasar-dasar mikrotik fundamental
 - konfigurasi jaringan mikrotik fundamental
 - sertifikasi mikrotik fundamental MTCNA
 - panduan lengkap mikrotik fundamental
 - mikrotik fundamental untuk SMK TKJ

---

## **Pendahuluan**

Zaman sekarang, jaringan internet sudah jadi kebutuhan primer. Hampir semua aspek kehidupan — mulai dari belajar, bekerja, hiburan, hingga bisnis — bergantung pada koneksi internet yang stabil dan cepat.

Nah, di balik jaringan internet yang lancar, ada perangkat-perangkat jaringan yang mengatur semuanya dengan rapi. Salah satu perangkat (dan sistem) yang sangat populer di dunia jaringan adalah **MikroTik**.

Kalau kamu sedang belajar jaringan atau ingin jadi teknisi IT, **MikroTik adalah salah satu skill yang wajib dikuasai**. Artikel ini akan membahas secara lengkap dan santai tentang **MikroTik Fundamental** — dari pengenalan dasar, fungsi-fungsinya, hingga tips belajar bagi pemula.



## **Apa Itu MikroTik?**

**MikroTik adalah perusahaan asal Latvia (Eropa Timur) yang membuat perangkat keras dan lunak khusus jaringan komputer, khususnya router.**

Produk utamanya terbagi dua:

1. **RouterOS**: Sistem operasi berbasis Linux yang dirancang untuk mengelola jaringan.
2. **RouterBOARD**: Perangkat keras (hardware) yang sudah dilengkapi RouterOS.

Dengan MikroTik, kamu bisa melakukan hampir semua hal yang berkaitan dengan jaringan: membuat hotspot, membatasi bandwidth, firewall, routing antar jaringan, dan banyak lagi.


## **Kenapa Harus Belajar MikroTik?**

MikroTik bukan hanya populer di Indonesia, tapi juga di seluruh dunia. Berikut alasan kenapa banyak orang dan institusi menggunakan MikroTik:

* **Harganya terjangkau**
* **Fitur sangat lengkap**
* **Ringan dan stabil**
* **Dukungan komunitas luas**
* **Digunakan di sekolah, kantor, warnet, kampus, bahkan provider lokal**

Kalau kamu ingin jadi teknisi jaringan, admin IT, atau buka usaha internet (seperti RT/RW net), maka **MikroTik adalah bekal wajib.**



## **Fitur-Fitur Dasar MikroTik**

Berikut ini beberapa fungsi dasar MikroTik yang sering digunakan:

| Fitur                    | Penjelasan                                                 |
| ------------------------ | ---------------------------------------------------------- |
| **Routing**              | Mengatur jalur lalu lintas data antar jaringan             |
| **Firewall**             | Mengatur akses masuk dan keluar, melindungi jaringan       |
| **Bandwidth Management** | Mengatur kecepatan internet untuk tiap user                |
| **Hotspot**              | Membuat sistem login internet seperti di café atau kampus  |
| **VPN**                  | Menghubungkan jaringan yang berbeda lokasi secara aman     |
| **Bridge & Switch**      | Menghubungkan beberapa perangkat dalam satu jaringan lokal |
| **Monitoring**           | Memantau trafik dan perangkat yang terhubung               |



## **Mengenal Antarmuka MikroTik**

Untuk mengakses dan mengatur MikroTik, ada beberapa cara:

### 1. **Winbox**

Aplikasi resmi dari MikroTik berbasis Windows. Paling populer karena mudah digunakan. Bisa mendeteksi perangkat MikroTik otomatis.

### 2. **WebFig**

Akses MikroTik melalui browser (GUI). Mirip seperti Winbox tapi berbasis web.

### 3. **Terminal**

Akses MikroTik lewat CLI (Command Line Interface). Cocok untuk user yang lebih mahir.

### 4. **SSH/Telnet**

Mengakses MikroTik dari jarak jauh melalui protokol SSH atau Telnet.



## **Dasar-Dasar Konfigurasi MikroTik**

Berikut ini alur dasar konfigurasi MikroTik dari awal (fresh install):

### 1. **Set IP Address**

```bash
/ip address add address=192.168.88.1/24 interface=ether1
```

### 2. **Set Gateway**

```bash
/ip route add gateway=192.168.88.1
```

### 3. **Set DNS**

```bash
/ip dns set servers=8.8.8.8 allow-remote-requests=yes
```

### 4. **NAT (Network Address Translation)**

Agar klien bisa akses internet:

```bash
/ip firewall nat add chain=srcnat out-interface=ether1 action=masquerade
```

### 5. **DHCP Server (opsional)**

Supaya klien dapat IP otomatis:

```bash
/ip dhcp-server setup
```



## **Topologi Jaringan MikroTik Sederhana**

```
[INTERNET] 
    |
[Modem/ISP]
    |
[MikroTik Router]
    |
[Switch]
    |
[Client Devices]
```

Kamu bisa mulai dengan topologi sederhana ini dan nanti berkembang ke topologi yang lebih kompleks, seperti multi-VLAN, jaringan antar cabang (VPN), dan lainnya.



## **Lisensi MikroTik**

RouterOS memiliki beberapa level lisensi (Level 3 – 6), dengan fitur berbeda. Tapi untuk belajar, kamu bisa gunakan **versi CHR (Cloud Hosted Router)** di virtual machine secara **gratis**.



## **Cara Belajar MikroTik untuk Pemula**

1. **Gunakan Winbox atau GNS3/VirtualBox** – Biar bisa coba-coba tanpa takut error.
2. **Ikuti Kursus Dasar** – Misalnya MTCNA (MikroTik Certified Network Associate)
3. **Lihat Tutorial YouTube** – Banyak tutorial gratis dan lengkap.
4. **Baca Forum & Grup Telegram MikroTik** – Tanya jawab langsung ke komunitas.
5. **Praktek Langsung** – Semakin sering praktek, semakin paham.



## **Sertifikasi MikroTik**

Kalau kamu serius ingin berkarier di dunia jaringan, kamu bisa ambil sertifikasi resmi MikroTik seperti:

| Sertifikat | Fokus                                  |
| ---------- | -------------------------------------- |
| **MTCNA**  | Dasar jaringan dan penggunaan MikroTik |
| **MTCRE**  | Routing                                |
| **MTCTCE** | Traffic control                        |
| **MTCUME** | User management                        |
| **MTCWE**  | Wireless                               |
| **MTCINE** | Routing tingkat lanjut                 |

MTCNA biasanya jadi **langkah awal** sebelum naik ke sertifikat lainnya.



## **Kelebihan & Kekurangan MikroTik**

### ✅ **Kelebihan**

* Harga bersahabat
* Ringan dan bisa berjalan di perangkat lawas
* Komunitas aktif
* Dokumentasi lengkap
* Bisa dijalankan di cloud/virtualisasi

### ❌ **Kekurangan**

* Antarmuka kurang ramah pemula
* Harus rajin belajar karena banyak fitur advanced
* Beberapa fitur premium perlu lisensi level tinggi



## **Kesimpulan**

**MikroTik bukan cuma alat, tapi juga pintu gerbang menuju dunia jaringan profesional.** Dengan memahami dasar-dasarnya, kamu sudah selangkah lebih dekat menjadi teknisi jaringan yang andal. Cocok untuk anak SMK RPL/TKJ, mahasiswa IT, atau siapa pun yang tertarik membangun jaringan, baik untuk kantor, sekolah, bisnis internet, atau rumah pribadi.

Jadi, kalau kamu ingin “megang” jaringan sendiri, atau ingin jadi “orang paling dicari” di kantor karena paham setting router — **belajar MikroTik adalah pilihan yang tepat.**

> Belajar jaringan itu seperti menyusun puzzle. Awalnya bingung, tapi kalau satu per satu disusun, lama-lama kamu bakal paham gambaran besarnya.



