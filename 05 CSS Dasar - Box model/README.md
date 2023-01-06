# CSS Dasar - Box Model

## Materi ini terdiri dari:
* [Padding](https://github.com/Juwono136/SCB_Coding/tree/master/05%20CSS%20Dasar%20-%20Box%20model#padding)
* [Margin](https://github.com/Juwono136/SCB_Coding/tree/master/05%20CSS%20Dasar%20-%20Box%20model#margin)
* [Border](https://github.com/Juwono136/SCB_Coding/tree/master/05%20CSS%20Dasar%20-%20Box%20model#border)

![box-model-pict](https://user-images.githubusercontent.com/70443393/210940746-a395afb9-6ff0-4947-9fd7-d1266a5e4934.jpg)

***CSS Box Model*** adalah suatu konsep dimana setiap element yang terdapat di dalam sebuah website dikelompokkan dan diproses ke dalam kotak (Box).

Setiap Box terdiri secara umum terdiri dari:
1. **Content** : isi tampilan element, bisa berisi tulisan/teks, gambar, dan sebagainya.
2. **Padding** : Jarak antara content dengan border, atau area kosong yang berada di antara content dan border. Padding tidak terlihat (transparent) tapi mengisi template dari box model.
3. **Margin** : Jarak antar satu box dengan box lainnya, atau area kosong yang berada setelah border. Margin tidak terlihat (transparent) tapi merupakan bagian dari box model
4. **Border** : garis tepi yang membatasi padding dan margin.

## Padding
`padding` property memiliki beberapa jenis yaitu:
* `padding-top` : untuk mengatur padding di bagian atas
* `padding-right` : untuk mengatur padding di bagian kanan
* `padding-bottom` : untuk mengatur padding di bagian bawah
* `padding-left` :  untuk mengatur padding di bagian kiri

Satuan unit value yang dapat diisi di property padding adalah:
* length - yang terdiri dari px, pt, cm, etc.
* % (percent)
* inherit - ukuran spesifik yang mengacu pada parent element

*untuk unit ukuran bisa selengkapnya kalian lihat disini: https://www.w3schools.com/cssref/css_units.php*

`padding` property diatas bisa disingkat (shorthand) menjadi satu baris dengan format: 

`padding: <padding-top> <padding-right> <padding-bottom> <padding-left>;`


Contoh shorthand padding: `padding: 100px 20px 50px 40px;` Dimana:
* 100px adalah `padding-top`
* 20px adalah `padding-right`
* 50px adalah `padding-bottom`
* 40px adalah `padding-left`

Info lebih lengkap mengenai padding: https://www.w3schools.com/css/css_padding.asp

____

## Margin
`margin` property memiliki beberapa jenis yaitu:
* `margin-top` : untuk mengatur margin di bagian atas
* `margin-right` : untuk mengatur margin di bagian kanan
* `margin-bottom` : untuk mengatur margin di bagian bawah
* `margin-left` : untuk mengatur margin di bagian kiri

`margin` property dapat di shorthand menjadi satu baris yaitu:
`margin: <margin-top> <margin-right> <margin-bottom> <margin-left>;`


Contoh shorthand margin: `margin: 20px 10px 15px 30px;`
* 20px adalah `margin-top`
* 10px adalah `margin-right`
* 15px adalah `margin-bottom`
* 30px adalah `margin-left`


Info lebih lengkap mengenai margin: https://www.w3schools.com/css/css_margin.asp

____

## Border

Info mengenai border bisa dilihat disini: https://www.w3schools.com/css/css_border.asp

