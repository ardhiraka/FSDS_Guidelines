# Milestones 1

_Milestones ini dibuat guna mengevaluasi pembelajaran pada Hacktiv8 Data Science Fulltime Program khususnya pada Phase 1 dalam konsep Supervised Learning._

---

## Dataset Description

Unduh dataset yang akan digunakan [disini](https://archive.ics.uci.edu/ml/datasets/Bank+Marketing). Gunakan file dengan nama `bank-additional-full.csv`.

## Assignment Instructions

*Milestones 1* dikerjakan dalam format ***notebook*** dengen beberapa **kriteria wajib** di bawah ini:

1. Machine learning framework yang digunakan adalah *Scikit-Learn*.

2. Ada penggunaan library visualisasi, seperti *matplotlib*, *seaborn*, atau yang lain.

3. Isi *notebook* harus mengikuti *outline* di bawah ini:
   1. Perkenalan
      > Bab pengenalan harus diisi dengan identitas, gambaran besar dataset yang digunakan, dan *objective* yang ingin dicapai.
   
   2. Import Libraries
      > *Cell* pertama pada *notebook* **harus berisi dan hanya berisi** semua *library* yang digunakan dalam *project*.
   
   3. Data Loading
      > Bagian ini berisi proses penyiapan data sebelum dilakukan eksplorasi data lebih lanjut. Proses Data Loading dapat berupa memberi nama baru untuk setiap kolom, mengecek ukuran dataset, dll.
   
   4. Exploratory Data Analysis (EDA)
      > Bagian ini berisi eksplorasi data pada dataset diatas dengan menggunakan query, grouping, visualisasi sederhana, dan lain sebagainya.
   
   5. Data Preprocessing
      > Bagian ini berisi proses penyiapan data untuk proses pelatihan model, seperti pembagian data menjadi train-dev-test, transformasi data (normalisasi, encoding, dll.), dan proses-proses lain yang dibutuhkan.
   
   6. Model Definition
      > Bagian ini berisi cell untuk mendefinisikan model. Jelaskan alasan menggunakan suatu algoritma/model, hyperparameter yang dipakai, jenis penggunaan metrics yang dipakai, dan hal lain yang terkait dengan model.

   7. Model Training
      > Cell pada bagian ini hanya berisi code untuk melatih model dan output yang dihasilkan. Lakukan beberapa kali proses training dengan hyperparameter yang berbeda untuk melihat hasil yang didapatkan. Analisis dan narasikan hasil ini pada bagian Model Evaluation.
   
   8. Model Evaluation
      > Pada bagian ini, dilakukan evaluasi model yang harus menunjukkan bagaimana performa model berdasarkan metrics yang dipilih. Hal ini harus dibuktikan dengan visualisasi tren performa dan/atau tingkat kesalahan model. **Lakukan analisis terkait dengan hasil pada model dan tuliskan hasil analisisnya**.

   9. Model Inference
      > Model yang sudah dilatih akan dicoba pada data yang bukan termasuk ke dalam train-set ataupun test-set. Data ini harus dalam format yang asli, bukan data yang sudah di-scaled.
   
   10. Pengambilan Kesimpulan
       > Pada bagian terakhir ini, **harus berisi** kesimpulan yang mencerminkan hasil yang didapat dengan *objective* yang sudah ditulis di bagian pengenalan.

4. *Notebook* harus diupload dalam akun GitHub masing-masing siswa untuk selanjutnya dinilai.

## Assignment Submission

- Simpan assignment pada sesi ini dengan nama `h8dsft_P1Milestone1_<nama-student>.ipynb` misal `h8dsft_P1Milestone1_raka_ardhi.ipynb`.
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

| Criteria | Meet Expectations | Points |
| --- | --- | --- |
| Preprocessing | Mampu melakukan preprocessing dataset sebelum melakukan proses modeling (split data, normalisasi, encoding, dll) | 20 pts |
| Logistic Regression | Mengimplementasikan Logistic Regression dan menentukan hyperparameter yang tepat dengan Scikit-Learn | 20 pts |
| SVM | Mengimplementasikan SVM dan menentukan hyperparameter yang tepat dengan Scikit-Learn | 20 pts |
| Decision Tree | Mengimplementasikan Decision Tree dan menentukan hyperparameter yang tepat dengan Scikit-Learn | 20 pts |
| Random Forest | Mengimplementasikan Random Forest dan menentukan hyperparameter yang tepat dengan Scikit-Learn | 20 pts |
| KNN | Mengimplementasikan KNN dan menentukan hyperparameter yang tepat dengan Scikit-Learn | 20 pts |
| Naive Bayes | Mengimplementasikan Naive Bayes dan menentukan hyperparameter yang tepat dengan Scikit-Learn | 20 pts |
| Other Algorithm | Mengimplementasikan algoritma lain selain yang tersebut diatas dan menentukan hyperparameter yang tepat dengan Scikit-Learn | 40 pts |
| Cross Validation | Mengimplementasikan Cross Validation dengan Scikit-Learn | 40 pts |
| Grid Search | Mengimplementasikan Grid Search dengan Scikit-Learn | 40 pts |
| Model Inference | Mencoba model yang telah dibuat dengan data baru | 20 pts |
| Apakah Kode Berjalan Tanpa Ada Error? | Kode berjalan tanpa ada error. Seluruh kode berfungsi dan dibuat dengan benar | 10 pts |

### Readability

| Criteria | Meet Expectations | Points |
| --- | --- | --- |
| Tertata Dengan Baik | Semua baris kode terdokumentasi dengan baik dengan Markdown untuk penjelasan kode | 10 pts |

### Analysis

| Criteria | Meet Expectations | Points|
| --- | --- | --- |
| Model Analysis | Menganalisa informasi dari model yang telah dibuat | 30 pts |
| Overall Analysis | Menarik informasi/kesimpulan dari keseluruhan kegiatan yang dilakukan | 20 pts |

---

```
Total Points : 350

Penilaian pada milestone dapat bersifat subyektif tergantung daripada pemilihan algoritma, penulisan kesimpulan, presentasi, dan lain sebagainya diluar dari rubric yang tertera.
```

---

## Notes

* **Deadline : P1W3D3 pukul 23:59 WIB.**

* **Keterlambatan pengumpulan tugas mengakibatkan skor Milestone 1 menjadi 0.**
