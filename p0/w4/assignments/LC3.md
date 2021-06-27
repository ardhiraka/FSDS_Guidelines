# Live Code 3

## Instruction

Live Code ini dikerjakan dalam format ***notebook*** isi *notebook* harus mengikuti *outline* di bawah ini:
1. Perkenalan\
   Bab pengenalan harus diisi dengan identitas
2. **Judul/Penanda Soal**\
    Sediakan *Cell* Markdown sebelum cell import pustaka yang berisi nomor soal dan judul problem yang dikerjakan di tiap soalnya. Tiap soal mengikuti format nomor 2-6.
3. *Import* pustaka yang dibutuhkan\
   *Cell* pertama pada *notebook* **harus berisi dan hanya berisi** semua *library* yang digunakan dalam *project*.
4. *Data Loading*\
   Bagian ini berisi proses *data loading* yang kemudian dilanjutkan dengan *explorasi data* secara sederhana.
5. *Data Processing*\
   Bagian ini berisi proses pengolahan data hingga siap dianalisa.
6. *Mathematical Calculation and Analysis*\
    Bagian ini berisi perhitungan matematis dan analisa yang diperlukan seperti membuat grafik, dsb.
6. Hasil\
   Pada bab terakhir ini berisi jawaban dari pertanyaan soal/kesimpulan analisa.

---

## Problems

Kamu adalah seorang data scientist di salah satu perusahaan e-commerce. Saat ini, kamu terlibat dalam proyek bersama dengan tim produk dan tim UI/UX untuk merubah tampilan landing page. Menggunakan dataset dari https://raw.githubusercontent.com/fahmimnalfrzki/Dataset/main/purchase_data.txt?token=AEZDEHRU5YLQEXGDDLCL6CLA2KZTI, buatlah analisa menggunakan konsep hypothesis testing dan A/B testing. Apa kesimpulanmu?

**Keterangan Dataset:**
- user_id = id pelanggan
- timestamp = Waktu ketika pelanggan mengakses laman web
- group = grup kontrol dan treatment
- landing_page = landing page yang diakses oleh pelanggan (laman lama atau laman baru)
- purchased = 0 : tidak ada pembelian, and 1: ada pembelian

---

## Assignment Rubrics

### Code Review

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Data Loading|Mampu memuat data dengan Pandas| 2 pts |
|Data Processing|Mampu mengolah data sampai siap dianalisa| 10 pts |
|Hypothesis Testing Implementation|Mampu menentukan hypothesis yang digunakan dan penerapannya pada data| 5 pts |
|A/B Testing Implementation|Mampu menerapkan konsep A/B testing pada data| 10 pts |

### Readability

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Tertata Dengan Baik|Semua Cell Di Notebook Terdokumentasi Dengan Baik Dengan Markdown Pada Tiap Cell Untuk Penjelasan Kode.| 10 pts |

### Analysis

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Overall Analysis|Menarik Informasi/Kesimpulan Dari Analisa.| 13 pts |

---

```{admonition} Total Points
**50**
```