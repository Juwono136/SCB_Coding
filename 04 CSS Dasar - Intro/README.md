# 04 CSS Dasar - Intro

## Materi ini terdiri dari:
* [Pengenalan singkat tentang CSS](https://github.com/Juwono136/SCB_Coding/tree/master/04%20CSS%20Dasar%20-%20Intro#pengenalan-singkat-tentang-css)
* [CSS Syntax](https://github.com/Juwono136/SCB_Coding/tree/master/04%20CSS%20Dasar%20-%20Intro#css-syntax)
* [CSS Selector](https://github.com/Juwono136/SCB_Coding/tree/master/04%20CSS%20Dasar%20-%20Intro#css-selector)
* [CSS Property yang sering digunakan](https://github.com/Juwono136/SCB_Coding/tree/master/04%20CSS%20Dasar%20-%20Intro#css-property-yang-sering-digunakan)
* [Cara menghubungkan CSS dengan element html](https://github.com/Juwono136/SCB_Coding/tree/master/04%20CSS%20Dasar%20-%20Intro#cara-menghubungkan-css-dengan-element-html)


## Pengenalan singkat tentang CSS

***CCS (Cascading Style Sheets)*** adalah sebuah standar penulisan pada halaman web yang berfungsi untuk mengatur style atau menghias tampilan halaman web agar terlihat lebih menarik. CSS mendeskripsikan bagaimana element html ditampilkan dalam sebuah halaman web.

Jadi CSS membuat sebuah website tampil lebih menarik dan terlihat nyaman bagi user/pengguna, bahkan css memungkinkan tampilan website menjadi lebih responsive (bisa dibuka di semua platform)

Berikut adalah sebuah website tanpa menggunakan CSS (hanya HTML):
![nocss](https://user-images.githubusercontent.com/70443393/210477633-cf9a72a9-642c-44ed-83c7-cde7eacc66fa.jpg)

Sedangkan, berikut adalah sebuah website yang diberikan CSS, tampilannya jadi lebih menarik bukan?
![withcss](https://user-images.githubusercontent.com/70443393/210477770-a2a0bf3c-dd0d-4980-8720-4c55a07a7cba.jpg)

____

## CSS Syntax
Berikut adalah strukut dari sintaks CSS:
![css-syntax](https://user-images.githubusercontent.com/70443393/210479785-720dffb6-9397-47d4-a5cf-ce734f3d8fe8.jpg)


Terdiri dari:
* `Selector` adalah tag html atau inisial point yang berasal dari element html yang akan di ubah style-nya menggunakan CSS
* `Declaration` adalah tempat kita menuliskan property CSS untuk mengubah tampilan element html/selectornya. Declaration CSS di mulai dan diakhiri dengan simbol kurung kurawal atau "{}". Dan setiap deklarasi (yang terdiri dari property dan value) harus diakhiri dengan simbol titik koma (;)
* `Property` adalah sintax yang bisa diberikan untuk mengubah tampilan selector
* `value` adalah nilai yang bisa diberikan untuk property css. Nilainya bisa berupa satuan fixed (px, cm, m, dsb..), satuan non fixed (fr, hv, dsb..), dan nilai lain dari masing-masing property css.

Contoh penulisan syntax css:
```css
h1 {
  color: blue;
  font-size: 12px;
};
```

* `h1` adalah selector, h1 berasal dari tag html `h1`
* `color dan font-size` adalah property css
* `blue dan 12px` adalah value dari masing-masing property

____

## CSS Selector
CSS Selector digunakan untuk mencari atau 'select' elemetn HTML untuk diberikan sebuah style di css

Ada beberapa tipe CSS selector yaitu:
1. Simple selector (memilih element html berdasarkan tag, class, atau id)
Contoh selector tag:
```css
p {
  text-align: center;
  color: red;
}
```

Untuk selector class html, gunakan simbol titik (.) sebelum nama class-nya:
```css
.judul01 {
  color: red;
  font-size: 30px;
}
```

Untuk selector id html, gunakan simbol hastag (#) sebelum nama id-nya:
```css
#para1 {
  text-align: center;
  color: red;
}
```

2. Combinator Selectors </br>
Silahkan baca penjelasannya di link berikut: https://www.w3schools.com/css/css_combinators.asp

3. Pseudo-class Selectors </br>
Silahkan baca penjelasannya di link berikut: https://www.w3schools.com/css/css_pseudo_classes.asp

4. Pseudo-element Selectors </br>
Silahkan baca penjelasannya di link berikut: https://www.w3schools.com/css/css_pseudo_elements.asp

5. Attribute Selectors </br>
Silahkan baca penjelasannya di link berikut: https://www.w3schools.com/css/css_attribute_selectors.asp

____

## CSS Property yang sering digunakan
CSS memiliki banyak sekali property berguna yang bisa digunakan. Property tersebut ada yang memiliki fungsi untuk tata letak, warna, tulisan, dan sebagainya. Untuk selengkapnya kita bisa lihat disini: https://www.w3schools.com/cssref/index.php

Berikut adalah CSS Property dasar yang sering digunakan:
* `color` : untuk memberikan warna teks
* `background-color` : untuk memberikan warna background
* `border` : untuk memberikan border (garis tepi) pada sebuah element
* `font-size` : untuk mengubah ukuran teks
* `font-family` : untuk mengubah jenis teks, default jenis teksnya adalah "sans-serif"
* `height` : untuk mengatur tinggi suatu element
* `weight` : untuk mengatur lebar suatu element

____

## Cara menghubungkan CSS dengan element html
Berikut adalah beberapa cara agar kita bisa menggunakan/menghubungkan css di element html website kita

1. Dengan tag style di html (internal css)

Dengan menggunakan tag `<style></style>` yang kita letakkan di dalam tag `head`, maka dengan mudah kita bisa memberikan css ke dalam element html kita
Contoh:
```html5
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-color: linen;
  }

  h1 {
    color: maroon;
    margin-left: 40px;
  }
</style>
</head>
  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>
```

2. Dengan membuat file baru dengan format .css (external css) (RECOMMENDED)

Pertama kita buat file baru, misalnya dengan nama "styles.css" yang isinya css:
```html5
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

Kemudian, kita hubungkan ke dalam file htmlnya, dengan cara menggunakan tag `<link></link>` yang diletakkan di dalam tag `head`. Gunakan atribut href untuk memilih lokasi filenya:
```html5
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>
```

3. Menulis secara langsung di dalam tag html (inline css)

Dengan cara menambahkan atribut `style` di dalam tag html, lalu kita bisa memberikan property css secara langsung di element html:
```html5
<!DOCTYPE html>
<html>
<body>

  <h1 style="color:blue;text-align:center;">This is a heading</h1>
  <p style="color:red;">This is a paragraph.</p>

</body>
</html>
```
