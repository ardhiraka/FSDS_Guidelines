# Graded Challenge 2

```{attention}
This page is still on development.
```

_Graded Challenge ini dibuat guna mengevaluasi pembelajaran pada Hacktiv8 Data Science Fulltime Program khususnya pada konsep Classification terutama Logistic Regression dan SVM._

---

## Dataset Description

Unduh dataset yang akan digunakan [disini](https://www.kaggle.com/jsphyg/weather-dataset-rattle-package).

## Assignment Instructions

*Graded Challenge 2* dikerjakan dalam format ***notebook*** dengen beberapa **kriteria wajib** di bawah ini:

1. Machine learning framework yang digunakan adalah *Scikit-Learn*.
2. Ada penggunaan library visualisasi, seperti *matplotlib* atau *seaborn*.
3. *Project* dinyatakan selesai dan diterima untuk dinilai jika saat dilakukan `Run All` pada *notebook*, semua *cell* berhasil tereksekusi sampai akhir.
4. Isi *notebook* harus mengikuti *outline* di bawah ini:
   1. Perkenalan\
   Bab pengenalan harus diisi dengan identitas, gambaran besar dataset yang digunakan, dan *objective* yang ingin dicapai.
   1. *Import* pustaka yang dibutuhkan\
   *Cell* pertama pada *notebook* **harus berisi dan hanya berisi** semua *library* yang digunakan dalam *project*.
   1. *Data Loading*\
   Bagian ini berisi proses *data loading* yang kemudian dilanjutkan dengan *explorasi data* secara sederhana.
   1. *Data Cleaning*\
   Bagian ini berisi proses penyiapan data berupa data cleaning sebelum dilakukan *explorasi data* lebih lanjut. Proses cleaning dapat berupa memberi nama baru untuk setiap kolom, mengisi missing values, menghapus kolom yang tidak dipakai, dan lain sebagainya.
   1. *Explorasi Data*\
   Bagian ini berisi explorasi data pada dataset diatas dengan menggunakan query, grouping, visualisasi sederhana, dan lain sebagainya.
   1. *Data Preprocessing*\
   Bagian ini berisi proses penyiapan data untuk proses pelatihan model, seperti pembagian data menjadi train-dev-test, transformasi data (normalisasi, encoding, dll.), dan proses-proses lain yang dibutuhkan.
   1. *Pendefinisian Model*\
   Bagian ini berisi cell untuk mendefinisikan model sampai kompilasi model. Akan lebih bagus jika didahului dengan penjelasan mengapa memilih arsitektur atau jenis model tertentu, alasan memilih nilai hyperparameter, dan hal lain yang berkaitan.
   1. *Pelatihan Model*\
   Cell pada bagian ini hanya berisi code untuk melatih model dan output yang dihasilkan.
   1. *Evaluasi Model*\
   Pada bagian ini, dilakukan evaluasi model yang harus menunjukkan bagaimana performa model berdasarkan metrics yang dipilih. Hal ini harus dibuktikan dengan visualisasi tren performa dan/atau tingkat kesalahan model.
   1. *Model Inference*\
   Bagian ini diisi dengan model inference, di mana model yang sudah kita latih akan dicoba pada data selain data yang sudah tersedia. Data yang dimaksud bisa berupa data buatan oleh student, ataupun data yang ada pada internet.
   1. *Pengambilan Kesimpulan*\
   Pada bab terakhir ini, **harus berisi** kesimpulan yang mencerminkan hasil yang didapat dengan dibandingkan dengan *objective* yang sudah ditulis di bagian pengenalan.
5. *Notebook* harus diupload dalam akun GitHub masing-masing siswa untuk selanjutnya dinilai.

## Assignment Submission

- Simpan assignment pada sesi ini dengan nama `h8dsft_P1W1LGSVM`.
- Push Assigment yang telah kalian buat ke akun Github kalian masing-masing.

## Assignment Objectives

*Graded Challenge 2* ini dibuat guna mengevaluasi konsep Logistic Regression dan SVM sebagai berikut:

- Mampu memahami konsep Classification dengan Logistic Regression dan SVM
- Mampu mempersiapkan data untuk digunakan dalam model Logistic Regression dan SVM
- Mampu mengimplementasikan Logistic Regression dan SVM untuk membuat prediksi

---

## Assignment Rubrics

### Code Review

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Preprocessing|Mampu Melakukan Preproses Dataset Sebelum Melakukan Proses Modeling| 10 pts |
|Logistic Regression| Mengimplementasikan Logistic Regression Dengan Scikit-Learn | 40 pts |
|SVM| Mengimplementasikan SVM Dengan Scikit-Learn | 40 pts |
|Model Inference| Mencoba model yang telah dibuat dengan data baru yang disediakan | 20 pts |
|Apakah Kode Berjalan Tanpa Ada Error?|Kode Berjalan Tanpa Ada Error. Seluruh Kode Berfungsi Dan Dibuat Dengan Benar| 10 pts |

### Readability

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Tertata Dengan Baik|Semua baris kode terdokumentasi Dengan Baik Dengan Markdown Untuk Penjelasan Kode.| 10 pts |

### Analysis

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Model Analysis| Menganalisa informasi dari model yang telah dibuat| 30 pts |
|Overall Analysis|Menarik Informasi/Kesimpulan Dari Keseluruhan Kegiatan yang Dilakukan.| 20 pts |

---

```{admonition} Total Points
**180**
```
