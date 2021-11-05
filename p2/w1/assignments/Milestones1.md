# Phase 2 - Milestones 1

```{attention}
This page is still on development.
```

_Milestones ini dibuat guna mengevaluasi pembelajaran pada Hacktiv8 Data Science Full Time Program Phase 2 khususnya pada Artificial Neural Network._

---

## Data Sources

Silakan download dataset [disini](https://www.kaggle.com/blastchar/telco-customer-churn)

## Assignment Instructions

*Milestones 1* dikerjakan dalam format *notebook* dengan/atau dengan *model deployment* (Opsional) dengan beberapa *kriteria wajib* di bawah ini:

1. Deep Learning framework yang digunakan adalah *Tensorflow*.
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
   Bagian ini berisi proses penyiapan data berupa data cleaning sebelum dilakukan *eksplorasi data* lebih lanjut. Proses cleaning dapat berupa memberi nama baru untuk setiap kolom, mengisi missing values, menghapus kolom yang tidak dipakai, dan lain sebagainya.
   1. *Eksplorasi Data*\
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
   Bagian ini diisi dengan model inference, dimana model yang sudah kita latih akan dicoba pada data selain data yang sudah tersedia. Data yang dimaksud bisa berupa data buatan oleh student, ataupun data yang ada pada internet.
   1. *Pengambilan Kesimpulan*\
   Pada bab terakhir ini, **harus berisi** kesimpulan yang mencerminkan hasil yang didapat dengan dibandingkan dengan *objective* yang sudah ditulis di bagian pengenalan.
5. *Notebook* harus diupload dalam akun GitHub organization untuk selanjutnya dinilai.
6. Penilaian project dilakukan berdasarkan *notebook* dan *service/API* model yang sudah di-deploy (Jika melakukan model deployment).
7. Presentasikan model yang telah dibuat pada P2W2D2AM.

## Assignment Submission

- Simpan assignment pada sesi ini dengan nama `h8dsft_Milestone1P2`.
- Tambahkan url deployment kedalam README file.
- Push Assigment yang telah kalian buat ke akun Github organization.
- Buat nama branch dengan nama lengkap. Contoh : `raka_adhi`

## Assignment Objectives

*Milestones 1* ini dibuat guna mengevaluasi Pembelajaran Phase 2 :

- Mampu memahami konsep Artificial Neural Network.
- Mampu mempersiapkan data untuk digunakan dalam model Artificial Neural Network.
- Mampu mengimplementasikan Artificial Neural Network dengan data yang diberikan.
- Mampu menganalisis dan menjelaskan layer yang dibuat.

---

## Assignment Rubrics

### Code Review

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Feature Engineering|Mampu Melakukan Proses Feature Engineering| 30 pts|
|Pipelines|Mampu membangun Pipeline. **Pipeline yang dinilai hanya Pipeline yang menggunakan modul `Tensorflow`** | 40 pts |
|Modeling| Membuat model Artifical Neural Network dengan menggunakan Sequential API dan Functional API  | 30 pts (untuk Sequential API), 30 pts (untuk Functional API) |
|Model Evaluation| Mampu Melakukan Model Evaluation | 40 pts |
|Model Improvement| Mampu Melakukan Model Improvement | 40 pts |
|Model Inference| Mencoba model yang telah dibuat dengan data baru | 20 pts |
|Apakah Kode Berjalan Tanpa Ada Error?|Kode Berjalan Tanpa Ada Error. Seluruh Kode Berfungsi Dan Dibuat Dengan Benar.| 10 pts |

### Readability

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Tertata Dengan Baik|Semua baris kode terdokumentasi Dengan Baik Dengan Markdown Untuk Penjelasan Kode.| 10 pts |

### Analysis

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|EDA Analysis| Menarik informasi/kesimpulan dari keseluruhan eksplorasi data yang dilakukan.| 30 pts |
|Model Analysis| Menganalisa informasi dari model yang telah dibuat. | 40 pts |

### Deployment (Bonus Point) (Optional)

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Deployment| Membuat webapps terhadap project yang telah dibuat.| 30 pts |

---

```{admonition} Total Points 
** 320 (Tanpa Deployment) **
** 350 (Dengan Deployment) **
```

```{tip}
Penilaian pada milestone dapat bersifat subyektif tergantung daripada pemilihan algoritma, penulisan kesimpulan, presentasi dan lain sebagainya diluar dari rubrik yang tertera.
```
