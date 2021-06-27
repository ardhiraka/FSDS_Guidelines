# Live Code 1

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
5. *Answer*\
   Bagian ini berisi proses dalam menjawab soal.
6. Hasil\
   Pada bab terakhir ini berisi jawaban pertanyaan soal.

---

## Problems

Kamu adalah seorang data scientist yang bekerja di salah satu perusahaan manufaktur baterai Lithium ion. Tim produksi meminta kamu untuk mengecek apakah baterai yang mereka buat dalam kondisi bagus atau tidak. Sebelum melakukan pengecekan lebih lanjut, kamu diminta untuk menghitung hambatan/resistansi dan Daya setiap detik:

\begin{equation}
R=\frac{V}{I}
\end{equation}

\begin{equation}
P=VI
\end{equation}

- R adalah Kapasitas dalam satuan Ohm
- P adalah Daya dalam Watt
- I adalah kuat arus dalam satuan Ampere
- V adalah tegangan dalam satuan Volt

Hitung kapasitas baterai tiap waktunya untuk cycle ganjil dan daya baterai tiap waktunya untuk cycle genap dari dataset dengan ketentuan sebagai berikut:

1. Gunakan function untuk menghitung hambatan dan daya
2. **Harus** menerapkan konsep looping, conditional if, dan pandas query

## Dataset

Dataset dapat diakses pada link berikut: https://github.com/fahmimnalfrzki/Dataset/blob/main/NMC1-9.xlsx?raw=true

**Keterangan kolom:**

- time(s): Detik ke- pengukuran
- $V_m$: Voltage/tegangan yang terukur tiap waktu
- Current (A): Kuat arus terukur tiap waktu
- Cycle: Nomor siklus charge-discharge baterai
- Cap: Kapasitas baterai tiap waktu

---

## Assignment Rubrics

### Code Review

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Data Loading|Mampu memuat data dengan Pandas| 2 pts |
|Looping Implementation|Mampu mengolah data sampai siap dianalisa| 10 pts |
|Conditional If Implementation|Mampu menentukan hypothesis yang digunakan dan penerapannya pada data| 10 pts |
|Function Implementation|Mampu menerapkan konsep A/B testing pada data| 10 pts |
|Pandas Query Implementation|Mampu menerapkan konsep A/B testing pada data| 10 pts |

### Readability

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Tertata Dengan Baik|Semua Cell Di Notebook Terdokumentasi Dengan Baik Dengan Markdown Pada Tiap Cell Untuk Penjelasan Kode.| 8 pts |

---

```{admonition} Total Points
**50**
```