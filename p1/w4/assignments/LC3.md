# Live Code 3

```{attention}
This page is still on development.
```


## Instruction

Live Code ini dikerjakan dalam format ***notebook*** isi *notebook* harus mengikuti *outline* di bawah ini:
1. Perkenalan\
   Bab pengenalan harus diisi dengan identitas
2. **Judul/Penanda Soal**\
    Sediakan *Cell* Markdown sebelum cell import pustaka yang berisi nomor soal dan judul problem yang dikerjakan di tiap soalnya. Tiap soal mengikuti format nomor 2-7.
3. *Import* pustaka yang dibutuhkan\
   *Cell* pertama pada *notebook* **harus berisi dan hanya berisi** semua *library* yang digunakan dalam *project*.
4. *Data Loading*\
   Bagian ini berisi proses *data loading* yang kemudian dilanjutkan dengan *explorasi data*.
5. *Data Preprocessing*\
   Bagian ini berisi proses persiapan data, data cleaning, data manipulation, feature extraction, dsb.
6. *Data Training and Model Evaluation*\
   Pada bab ini berisi proses training data dan evaluasi model.
7. *Analysis*
   Pada bab ini berisi hasil dan analisa dari training data dan evaluasi model.

---

## Problems

1. Menggunakan dataset https://www.kaggle.com/amansaxena/lifeexpectancy, buatlah model machine learning unsupervised menggunakan KMeans untuk mendeteksi kelompok negara. Kesimpulan apa yang dapat diambil?

---

## Assignment Rubrics

### Code Review

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Data Loading|Mampu memuat data dengan Pandas| 4 pts  |
|Data Processing and Cleaning|Mampu melakukan pengolahan data dan data cleaning | 15 pts |
|Feature Extraction|Mampu mengekstrak feature untuk ditraining| 15 pts |
|Unsupervised Model Implementation|Mampu melakukan training data dengan model KMeans| 20 pts |
|Model Evaluation|Mampu melakukan evaluasi model untuk menentukan nilai K/jumlah grup| 15 pts |

### Readability

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Tertata Dengan Baik|Semua Cell Di Notebook Terdokumentasi Dengan Baik Dengan Markdown Pada Tiap Cell Untuk Penjelasan Kode.| 6 pts|

### Analysis

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Overall Analysis|Menarik Informasi/Kesimpulan Dari Analisa.| 10 pts |

---

```{admonition} Total Points
**85**
```