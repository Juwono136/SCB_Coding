# 02 HTML Dasar - Hyperlink and Multipages

## Materi ini terdiri dari:
- Fungsi id
- Hyperlink
- Cara membuat multipages dengan hyperlink

## Fungsi id
`id` adalah sebuah atribut dalam html yang digunakan untuk membuat suatu tag html sebuah content menjadi unik dan spesifik.
Karena sifatnya yang unik dan spesifik, kita tidak diperbolehkan menulis nama id yang sama lebih dari satu kali.

Aturan penulisan id di HTML:
- `id` haruslah unik dan spesifik, nilai atau value dari id tidak boleh sama atau lebih dari satu
```html5
<h3 id="daftar1">Daftar 1</h3>
```

- Untuk memberikan target id atau memanggil id tersebut kita gunakan tanda hashtag (#), atau metode ini sering disebut sebagai **bookmark**
```html5
<li><a href="#daftar1">Daftar 1</a></li>
```

___

## Hyperlink
Hyperlink adalah suatu cara agar kita bisa melakukan perpindahan dari satu halaman ke halaman berikutnya dalam suatu website.

Hyperlink di HTML menggunakan tag link yaitu `tag a` atau ditulis dengan `<a href=""></a>` yang memungkinkan kita bisa pindah ke sebuah halaman tertentu ketika kita meng-klik tag a tersebut.

Di dalam tag a terdapat atribut `href` yang bisa kita isi nilai/valuenya dengan nama file atau link website tertentu untuk dijadikan sebagai target/tujuan halaman.

```html5
<p>lanjut ke halaman berikutnya, <a href="page2.html">klik disini</a></p>
```

Dari kode diatas kita bisa lihat bahwa tag a akan diarahkan ke file bernama `page2.html`, sehingga ketika di klik, secara otomatis akan diarahkan ke halaman/file page2.html

Kita bisa memanfaatkan tag a ini untuk membuat halaman yang multipages dalam sebuah website.

## Cara membuat multipages dengan hyperlink
