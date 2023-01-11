# CSS Display

## Materi ini terdiri dari:
* [Pengertian CSS Display](https://github.com/Juwono136/SCB_Coding/tree/master/06%20CSS%20Display#pengertian-css-display)
* [Display none](https://github.com/Juwono136/SCB_Coding/tree/master/06%20CSS%20Display#display-none)
* [Display inline](https://github.com/Juwono136/SCB_Coding/tree/master/06%20CSS%20Display#display-inline)
* [Display block](https://github.com/Juwono136/SCB_Coding/tree/master/06%20CSS%20Display#display-block)
* [Display inline-block](https://github.com/Juwono136/SCB_Coding/tree/master/06%20CSS%20Display#display-inline-block)

## Pengertian CSS Display
Setiap tag pada html berada dalam sebuah kotak. Property display pada CSS mengatur perilaku kotak tersebut.

Setiap tag pada html memiliki nilai default untuk property display. Misalnya tag `div` yang property displaynya secara default adalah `block`, dan `span` yang property displaynya secara default adalah `inline`. Tetapi kita juga dapat mengubah perilaku dari tag tersebut dengan mengganti value-nya

Default display secara umum hanya ada 2 yaitu block atau inline:
* `block` adalah element html yang secara default akan menambahkan baris baru ketika dibuat
* `inline` adalah element html yang secara default tidak akan menambahkan baris baru ketika dibuat

Sedangkan value dari property display terdiri dari 4, yaitu `block`, `inline`, `none`, dan `inline-block`

Default sebuah tag element html bisa kita lihat juga melalui browser secara langsung, yaitu dengan cara klik kanan, pilih inspect -> computed -> lalu cari display

![Screenshot 2023-01-11 083514](https://user-images.githubusercontent.com/70443393/211697634-00dbc52a-8d6b-4436-bd42-afc628e7a50b.jpg)

____

## Display none
Membuat element html menjadi tidak terlihat. Contohnya:

```css
h1 {
  display: none;
}
```

____

## Display inline
* Element html yang secara default tidak menambahkan baris baru ketika dibuat
* Lebar dan tinggi elemennya sebesar konten yang ada di dalamnya
* Kita tidak dapat mengatur tinggi dan lebar dari element inline, kecuali tag `img`
* Margin dan padding hanya mempengaruhi element secara **horizontal**, tidak vertikal

Berikut adalah beberapa tag html yang mempunyai property defaultnya adalah inline: `b, strong, i, em, img, a, span, sub, sup, button, input, label, textarea, span`, dan sebagainya.

```css
img {
  display: inline;
}
```

____

## Display block
* Element html yang secara default menambahkan baris baru
* Jika kita tidak atur lebarnya, maka lebar default dari element block akan memenuhi lebar dari browser/parent-nya
* kita dapat mengatur tinggi dan lebar dari element block
* di dalam element block, kita dapat menyimpan tag dengan element inline, inline-block atau bahkan element block lagi

Berikut adalah beberapa tag html yang mempunyai property defaultnya adalah block: `h1-h6, p, ol, ul, li, form, hr, div`, dan sebagainya.

```css
div {
  display: block;
}
```
____

## Display inline-block
Tidak ada element yang secara default memiliki property display `inline-block`. Jadi kita harus ubah secara manual properti tersebut.

* Perilaku dasarnya mirip dengan element inline
* Perbedaannya, elemen inline-block dapat kita atur tinggi dan lebarnya

```css
a {
  display: inline-block;
}
```
