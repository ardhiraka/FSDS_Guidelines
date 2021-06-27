# Graded Challenge 1

_Graded Challenge ini dibuat guna mengevaluasi pembelajaran pada Hacktiv8 Data Science Fulltime Program khususnya pada konsep Basic Python, Numpy, serta Data Preparation with Pandas._

---

## Dataset Description

Unduh dataset yang akan digunakan [disini](https://www.kaggle.com/abcsds/pokemon).

This data set includes 721 Pokemon, including their number, name, first and second type, and basic stats: HP, Attack, Defense, Special Attack, Special Defense, and Speed.

The feature of this data is:

- #: ID for each pokemon
- Name: Name of each pokemon
- Type 1: Each pokemon has a type, this determines weakness/resistance to attacks
- Type 2: Some pokemon are dual type and have 2
- Total: sum of all stats that come after this, a general guide to how strong a pokemon is
- HP: hit points, or health, defines how much damage a pokemon can withstand before fainting
- Attack: the base modifier for normal attacks (eg. Scratch, Punch)
- Defense: the base damage resistance against normal attacks
- SP Atk: special attack, the base modifier for special attacks (e.g. fire blast, bubble beam)
- SP Def: the base damage resistance against special attacks
- Speed: determines which pokemon attacks first each round

## Assignment Instructions

*Graded Challenge 1* dikerjakan dalam format ***notebook*** dengen beberapa **kriteria wajib** di bawah ini:

1. *Library* yang digunakan adalah **Numpy** dan **Pandas**.
2. *Project* dinyatakan selesai dan diterima untuk dinilai jika saat dilakukan `Run All` pada *notebook*, semua *cell* berhasil tereksekusi sampai akhir.
3. Isi *notebook* harus mengikuti *outline* di bawah ini:
   1. Perkenalan\
   Bab pengenalan harus diisi dengan identitas, gambaran besar dataset yang digunakan, dan *objective* yang ingin dicapai.
   2. *Import* pustaka yang dibutuhkan\
   *Cell* pertama pada *notebook* **harus berisi dan hanya berisi** semua *library* yang digunakan dalam *project*.
   3. *Data Loading*\
   Bagian ini berisi proses *data loading* yang kemudian dilanjutkan dengan *explorasi data* secara sederhana.
   4. *Data Cleaning*\
   Bagian ini berisi proses penyiapan data berupa data cleaning sebelum dilakukan *explorasi data* lebih lanjut. Proses cleaning dapat berupa memberi nama baru untuk setiap kolom, mengisi missing values, menghapus kolom yang tidak dipakai, dan lain sebagainya.
   5. *Explorasi Data*\
   Bagian ini berisi explorasi data pada dataset diatas dengan menggunakan query, grouping, visualisasi sederhana, dan lain sebagainya.
   6. Pengambilan Kesimpulan\
   Pada bab terakhir ini, **harus berisi** kesimpulan yang mencerminkan hasil yang didapat dengan dibandingkan dengan *objective* yang sudah ditulis di bagian pengenalan.
4. *Notebook* harus diupload dalam akun GitHub masing-masing siswa untuk selanjutnya dinilai.

## Assignment Submission

- Simpan assignment pada sesi ini dengan nama `h8dsft_P0W1`.
- Push Assigment yang telah kalian buat ke akun Github kalian masing-masing.

## Assignment Objectives

*Graded Challenge 1* ini dibuat guna mengevaluasi konsep Basic Python, Numpy, serta Data Preparation with Pandas sebagai berikut:

- Mampu memuat data dengan Pandas
- Mampu menangani missing values pada dataset
- Mampu melakukan manipulasi kolom
- Mampu membuat query terhadap dataset
- Mampu melakukan grouping terhadap dataset
- Mampu melakukan visualisasi sederhana menggunakan Pandas

---

## Assignment Rubrics

### Code Review

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Data Loading|Mampu memuat data dengan Pandas| 1 pts |
|Missing Value|Mampu menangani missing values; tidak ada missing values dalam dataset| 5 pts |
|Manipulating Columns|Mampu mengganti nama kolom; Mampu menghapus kolom yang tidak digunakan| 2 pts |
|Data Query|Mampu membuat minimal 3 query data| 5 each (max 15) |
|Grouping and Aggregating|Mampu melakukan pengelompokan data minimal 3 kelompok| 5 each (max 15) |
|Pandas Visualization|Mampu membuat Bar Plot dengan Pandas| 2 pts |
|Apakah Kode Berjalan Tanpa Ada Error?|Kode Berjalan Tanpa Ada Error. Seluruh Kode Berfungsi Dan Dibuat Dengan Benar.| 5 pts |

### Readability

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Tertata Dengan Baik|Semua Cell Di Notebook Terdokumentasi Dengan Baik Dengan Markdown Pada Tiap Cell Untuk Penjelasan Kode.| 10 pts |

### Analysis

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Overall Analysis|Menarik Informasi/Kesimpulan Dari Keseluruhan Explorasi yang Dilakukan.| 10 pts |

---

```{admonition} Total Points
**65**
```
