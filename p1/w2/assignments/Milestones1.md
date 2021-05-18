# Milestones 1

```{attention}
This page is still on development.
```

_Milestones ini dibuat guna mengevaluasi pembelajaran pada Hacktiv8 Data Science Fulltime Program khususnya pada Phase 1 dalam konsep Supervised Learning._

---

## Dataset Description

Unduh dataset yang akan digunakan [disini](https://archive.ics.uci.edu/ml/datasets/Bank+Marketing).

## Assignment Instructions

*Milestones 1* dikerjakan dalam format *notebook* dengan/atau dengan *model deployment* (Opsional) dengan beberapa *kriteria wajib* di bawah ini:

1. Machine learning framework yang digunakan adalah *Scikit-Learn*.
2. Ada penggunaan library visualisasi, seperti *matplotlib* atau *seaborn*.
3. *Project* dinyatakan selesai dan diterima untuk dinilai jika saat dilakukan `Run All` pada *notebook*, semua *cell* berhasil tereksekusi sampai akhir.
4. Isi *notebook* harus mengikuti *outline* di bawah ini:
   1. *Perkenalan*\
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
   Pada bagian ini, dilakukan evaluasi model yang harus menunjukkan bagaimana performa model berdasarkan metrics yang dipilih. Hal ini harus dibuktikan dengan visualisasi tren performa dan/atau tingkat kesalahan model. Jika memilih untuk melakukan model deployment, lanjut ke poin dibawah. Jika tidak, lanjut ke poin 11 dan 12.
   1. *Model Saving*\
   Dengan melihat hasil evaluasi model, pilih model terbaik untuk disimpan. Model terbaik ini akan digunakan kembali dalam melakukan deployment di Heroku.
   1. *Model Inference*\
   Bagian ini diisi dengan model inference, di mana model yang sudah kita latih akan dicoba pada data selain data yang sudah tersedia. Data yang dimaksud bisa berupa data buatan oleh student, ataupun data yang ada pada internet.
   1. *Pengambilan Kesimpulan*\
   Pada bab terakhir ini, **harus berisi** kesimpulan yang mencerminkan hasil yang didapat dengan dibandingkan dengan *objective* yang sudah ditulis di bagian pengenalan.
5. *Notebook* harus diupload dalam akun GitHub masing-masing siswa untuk selanjutnya dinilai.
6. Penilaian project dilakukan berdasarkan *notebook* dan *service/API* model yang sudah di-deploy (Jika melakukan model deployment).
7. Presentasikan model yang telah dibuat pada W3D2AM.

## Assignment Submission

- Simpan assignment pada sesi ini dengan nama `h8dsft_Milestone1`.
- Tambahkan url deployment kedalam README file.
- Push Assigment yang telah kalian buat ke akun Github kalian masing-masing.

## Assignment Objectives

*Milestones 1* ini dibuat guna mengevaluasi Pembelajaran Phase 1 dalam konsep Supervised Learning sebagai berikut:

- Mampu memahami konsep supervised learning
- Mampu mempersiapkan data untuk digunakan dalam model supervised learning
- Mampu mengimplementasikan supervised learning dengan data yang diberikan
- Mampu melakukan evaluasi model
- Mampu melakukan model tuning

---

## Assignment Rubrics

### Code Review

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Preprocessing|Mampu Melakukan Preproses Dataset Sebelum Melakukan Proses Modeling (Feature Scaling, Pipelines)| 10 pts each|
|Logistic Regression| Mengimplementasikan Logistic Regression Dengan Scikit-Learn | 20 pts |
|SVM| Mengimplementasikan SVM Dengan Scikit-Learn | 20 pts |
|Decision Tree| Mengimplementasikan Decision Tree Dengan Scikit-Learn | 20 pts |
|Random Forest| Mengimplementasikan Random Forest Dengan Scikit-Learn | 20 pts |
|KNN| Mengimplementasikan KNN Dengan Scikit-Learn | 20 pts |
|Naive Bayes| Mengimplementasikan Naive Bayes Dengan Scikit-Learn | 20 pts |
|Other Algorithm| Mengimplementasikan Algoritma lain selain yang tersebut diatas Dengan Scikit-Learn | 40 pts |
|Cross Validation| Mengimplementasikan Cross Validation Dengan Scikit-Learn | 30 pts |
|Grid Search| Mengimplementasikan Grid Search Dengan Scikit-Learn | 40 pts |
|Model Inference| Mencoba model yang telah dibuat dengan data baru yang disediakan | 20 pts |
|Apakah Kode Berjalan Tanpa Ada Error?|Kode Berjalan Tanpa Ada Error. Seluruh Kode Berfungsi Dan Dibuat Dengan Benar.| 10 pts |

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
**340**
```

```{tip}
Penilaian pada milestone dapat bersifat subyektif tergantung daripada pemilihan algoritma, penulisan kesimpulan, presentasi dan lain sebagainya diluar dari rubric yang tertera.
```
