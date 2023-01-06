# CSS Dasar - Box Model

## Materi ini terdiri dari:
* [Padding]
* [Margin]
* [Border]

![box-model-pict](https://user-images.githubusercontent.com/70443393/210925275-b0c5f817-b79f-486c-ab2a-d39de01ee73f.jpg)

***CSS Box Model*** adalah suatu konsep dimana setiap element yang terdapat di dalam sebuah website dikelompokkan dan diproses ke dalam kotak (Box).

Setiap Box terdiri secara umum terdiri dari:
1. **Content** : isi tampilan element, bisa berisi tulisan/teks, gambar, dan sebagainya.
2. **Padding** : Jarak antara content dengan border, atau area kosong yang berada di antara content dan border. Padding tidak terlihat (transparent) tapi mengisi template dari box model.
3. **Margin** : Jarak antar satu box dengan box lainnya, atau area kosong yang berada setelah border. Margin tidak terlihat (transparent) tapi merupakan bagian dari box model
4. **Border** : garis tepi yang membatasi padding dan margin.

## Padding
Property `padding` memiliki beberapa jenis yaitu:
* `padding-top` : untuk mengatur padding di bagian atas
* `padding-right` : untuk mengatur padding di bagian kanan
* `padding-bottom` : untuk mengatur padding di bagian bawah
* `padding-left` :  untuk mengatur padding di bagian kiri

Satuan unit value yang dapat diisi di property padding adalah:
* length - yang terdiri dari px, pt, cm, etc.
* % (percent)
* inherit - ukuran spesifik yang mengacu pada parent element
*untuk unit ukuran bisa selengkapnya kalian lihat disini: https://www.w3schools.com/cssref/css_units.php*

Property `padding` diatas bisa disingkat (shorthand) menjadi satu baris dengan format: `padding: <padding-top> <padding-right> <padding-bottom> <padding-left>;`

Contoh shorthand padding: `padding: 100px 20px 50px 40px;`

