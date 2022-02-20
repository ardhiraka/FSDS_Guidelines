# Milestones 1

_Milestones ini dibuat guna mengevaluasi pembelajaran pada Hacktiv8 Data Science Fulltime Program khususnya pada Phase 0._

---

## Dataset Description

Unduh dataset yang akan digunakan [disini](https://www.kaggle.com/aungpyaeap/supermarket-sales).

## Assignment Instructions

*Milestones 1* dikerjakan dalam bentuk dashboard Streamlit dengan beberapa **kriteria wajib** di bawah ini:

1. *Library* utama yang digunakan adalah **Streamlit**.

2. *Project* dinyatakan selesai dan diterima untuk dinilai jika sudah di-deploy ke Heroku.

3. Dashboard yang dibuat terdiri dari minimal 2 layout : `Visualisasi` dan `Hypothesis Testing`.

4. Untuk layout `Visualisasi` :
   1. Minimal ada 4 figure yang ditampilkan dalam halaman.
   2. Ada callback untuk interactivity figure yang telah dibuat.

5. Untuk layout `Hypothesis Testing` :
   1. Buatlah 1 hypothesis testing terhadap dataset yang ada.
   2. Tulis proses testing serta hasil analisa dalam bentuk Markdown pada layout hypothesis testing.

6. Tetap lakukan cleaning dan preprocessing pada data. Data yang ditampilkan pada dashboard adalah data clean yang telah melalui proses preprocessing.

7. Deploy dashboard yang telah dibuat ke heroku dengan format url berupa `nama_student-batch-p0m1.herokuapp.com`, misal `raka-ardhi-ftds-001-p0m1.herokuapp.com`.

8. Presentasikan dashboard yang telah dibuat pada P1W1D4PM.

## Assignment Submission

1. Simpan assignment pada sesi ini dengan nama `h8dsft_Milestone1_<nama-student>.ipynb`, misal `h8dsft_Milestone1_raka_ardhi.ipynb`.

2. Pada file `.ipynb` poin 1 diatas, tambahkan URL deployment Heroku masing-masing student. Tidak adanya URL Heroku di file `.ipynb` akan menyebabkan tidak dinilainya deployment Streamlit.

3. File yang berkaitan dengan Streamlit juga wajib diupload. Akan lebih bagus jika file deployment Streamlit masuk ke dalam folder yang berbeda dengan file `.ipynb`. Contoh hasil commit tugas yang baik : 
   * `h8dsft_Milestone1_raka_ardhi.ipynb`
   * `/deployment`
     - `requirements.txt`
     - `Procfile`
     - `app.py`
     - etc

4. Ketidaklengkapan jawaban yang diupload, seperti hanya melampirkan file `ipynb` saja atau hanya melampirkan file deployment Streamlit saja, akan menyebabkan pengurangan nilai yang signifikan pada tugas kali ini.

5. Push Assigment yang telah dibuat ke akun Github masing-masing student.

## Assignment Objectives

*Milestones 1* ini dibuat guna mengevaluasi Pembelajaran Phase 0 sebagai berikut:

- Mampu melakukan hypothesis testing terhadap dataset yang diberikan.
- Mampu membuat dashboard interaktif terhadap dataset yang diberikan.
- Mampu mempresentasikan hasil visualisasi data dan temuan.

---

## Assignment Rubrics

### Code Review

| Criteria|Meet Expectations|Points|
| --- | --- | --- |
| Streamlit Figure | Mampu membuat minimal 4 figure dengan Streamlit | 20 pts each (Max 80) |
| Streamlit Callback | Mampu membuat callback dengan Streamlit | 50 pts |
| Hypothesis Testing | Mampu melakukan hypothesis testing dan menampilkannya dengan Streamlit | 50 pts |

### Readability

| Criteria | Meet Expectations | Points|
| --- | --- | --- |
| Tertata Dengan Baik | Semua baris kode terdokumentasi dengan baik dengan menggunakan Markdown untuk penjelasan kode. | 10 pts |

### Analysis

| Criteria | Meet Expectations | Points |
| --- | --- | --- |
| Overall Analysis | Menarik informasi/kesimpulan dari keseluruhan eksplorasi yang dilakukan. | 10 pts |

---

```
Total Points : 200

Catatan : Penilaian Milestone  juga dapat dipengaruhi oleh aktivitas student selama Phase 0 berlangsung, baik sesi kelas maupun sesi mentoring dengan buddy-nya masing-masing sehingga terdapat kemungkinan adanya penambahan atau pengurangan nilai diluar rubric yang telah disebutkan diatas.
```
