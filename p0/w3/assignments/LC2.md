# Live Code 2

# Instruction

Live Code ini dikerjakan dalam format ***notebook*** isi *notebook* harus mengikuti *outline* di bawah ini:
1. Perkenalan\
   Bab pengenalan harus diisi dengan identitas
2. **Judul/Penanda Soal**\
    Sediakan *Cell* Markdown sebelum cell import pustaka yang berisi nomor soal dan judul problem yang dikerjakan di tiap soalnya. Tiap soal mengikuti format nomor 2-6.
3. *Import* pustaka yang dibutuhkan\
   *Cell* pertama pada *notebook* **harus berisi dan hanya berisi** semua *library* yang digunakan dalam *project*.
4. *Data Loading*\
   Bagian ini berisi proses *data loading* yang kemudian dilanjutkan dengan *explorasi data* secara sederhana.
5. *Mathematical Calculations*\
   Bagian ini berisi proses pengolahan data dengan perhitungan matematis yang diperlukan.
6. Hasil\
   Pada bab terakhir ini berisi jawaban dari pertanyaan soal.

---

# Problems

1. Diketahui toko buah X menjual 10 produk dengan label nama A-J. Data penjualan serta pendapatan total toko X selalu dicatat setiap harinya dan berikut data penjualan 10 hari terakhir:

| Hari ke- | A | B | C | D | E | F | G | H | I | J | Pendapatan |
|:---------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:------------:|
|1|14|19|2|44|9|1|3|40|17|22|1402500|
|2|7|26|26|24|54|2|2|4|22|18|2325000|
|3|37|54|1|43|46|23|37|36|18|17|3307000|
|4|19|19|45|41|43|21|38|51|56|37|4077000|
|5|47|28|50|10|44|54|3|47|2|21|3998000|
|6|12|41|31|25|44|13|16|9|47|3|2674500|
|7|20|19|53|56|34|6|60|37|35|49|4014000|
|8|60|44|1|16|9|24|55|55|30|10|2754500|
|9|41|55|50|28|59|54|40|9|45|34|5511500|
|10|14|11|39|2|26|17|51|19|38|39|3338500|

Berapa harga masing-masing produk A-J?

2. Menggunakan konsep integral, tentukan luas negara Swiss jika diketahui koordinat batas-batasnya!
Dataset koordinat batas Swiss dapat diakses pada link berikut: https://raw.githubusercontent.com/fahmimnalfrzki/Dataset/main/Swiss_boundaries.txt?token=AEZDEHXBTS7OMF32RTYPKZDA2FELA

**Hint dan Note**:
- Wilayah Swiss dapat dibagi menjadi dua bagian yaitu Northern dan Southern supaya mempermudah dalam menghitung Integral
- Tidak perlu memperhatikan satuan

---

## Assignment Rubrics

### Code Review

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Data Loading|Mampu memuat data dengan Pandas| 4 pts/number (8 total)|
|Linear Algebra Implementation|Mampu menerapkan konsep aljabar linear pada data dengan NumPy/SciPy| 10 pts |
|Calculus Implementation|Mampu menerapkan konsep Kalkulus pada data dengan SciPy| 10 pts |

### Readability

|Criteria|Meet Expectations|Points|
|--- |--- |--- |
|Tertata Dengan Baik|Semua Cell Di Notebook Terdokumentasi Dengan Baik Dengan Markdown Pada Tiap Cell Untuk Penjelasan Kode.| 12 pts |

---

```{admonition} Total Points
**50**
```