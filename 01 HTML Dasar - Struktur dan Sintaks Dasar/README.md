# 01 HTML Dasar - Struktur dan Sintaks Dasar

## Materi ini terdiri dari:
* [Struktur dasar HTML](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#struktur-dasar-html)
* [Tag title](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-title)
* [Tag link - Add Favicon](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-link---add-favicon)
* [Tag Heading](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-heading)
* [Tag Paragraph and Tag Pre](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-paragraph-and-tag-pre)
* [Tag br](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-br)
* [Tag hr](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-hr)
* [Tag a](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-a)
* [Tag img](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-img)
* [Tag video](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-video)
* [Tag iframe](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-iframe)

## Struktur dasar HTML
`HTML` atau `HyperText Markup Language` adalah sebuah bahasa standar yang digunakan di sebuah website atau aplikasi web. HTML adalah kerangka dasar yang menyusun suatu website. 

Sekompleks apapun teknologi yang digunakan dalam suatu website, pasti di dalamnya mengandung sebuah HTML. Maka dari pada itu, penting sekali kita belajar HTML sebagai awalan ketika belajar sebuah teknologi website.

<div align="center">
    <img src="https://user-images.githubusercontent.com/70443393/189566212-66b99088-4643-4b95-b320-d665eaf5a5d2.png" width="280" height="300" />
</div>

Berikut adalah struktur dasar HTML:
```html5
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ini adalah judul halaman website</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

Struktur HTML terdiri dari:
* `<html></html>` yang berfungsi sebagai tag awalan dan penanda bahwa tag yang kita buat berformat html yang didalamnya terdapat tag head dan body
* `<head></head>` yang berfungsi untuk memberikan metadata dan judul halaman website.
* `<body></body>` yang berfungsi untuk menuliskan isi/content ke halaman website, seperti memberikan teks, gambar, video atau yang lainnya.

___

## Tag title
`tag title` atau `<title></title>` di letakkan di dalam `tag head`, dan berfungsi untuk memberikan judul halaman website.

```html5
<title>Ini adalah judul halaman website</title>
```
![title](https://user-images.githubusercontent.com/70443393/189567682-fb41379d-a3a8-40fe-b77c-cadeb20836a1.jpg)

___

## Tag link - Add Favicon
`tag link - favicon` di letakkan di dalam tag head (biasanya diatas tag title), dan berfungsi untuk memberikan icon website (favicon) dengan format file .ico
Masukkan link favicon ke dalam atribut `href`

```html5
<link rel="shortcut icon" href="image/html5.ico" type="image/x-icon" />
```
___

## Tag Heading
`tag h1` sampai `h6` merupakan tag heading untuk memberikan tulisan heading/cetak tebal dan biasanya digunakan sebagai judul sebuah paragraf.

```html5
<h1>Ini adalah heading 1</h1>
<h2>Ini adalah heading 2</h2>
<h3>Ini adalah heading 3</h3>
<h4>Ini adalah heading 4</h4>
<h5>Ini adalah heading 5</h5>
<h6>Ini adalah heading 6</h6>
```

![heading](https://user-images.githubusercontent.com/70443393/188074622-1c922f3e-257f-44c6-9eb2-18c8e6d6a3d6.jpg)

___

## Tag Paragraph and Tag Pre
* `tag p` berfungsi untuk memberikan teks paragraph, baik itu paragraph yang singkat atau panjang.
* `tag pre` berfungsi untuk memberikan teks preformatted/teks yang sudah di format

Tag Paragraph:
```html5
<p>Ini adalah paragraf pertama yang singkat</p>
<p>
  Ini adalah paragraf kedua yang panjang => Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum eius saepe, consequuntur labore
  temporibus assumenda quos voluptates aut quidem iusto id facilis in
  maiores voluptas nam blanditiis accusamus dolorem quia tenetur quam? Cum,
  vitae eum.
</p>
```

![paragraph](https://user-images.githubusercontent.com/70443393/188075621-4eb1c430-386c-4522-af7a-2d28bc860a57.jpg)

Tag Pre:
```html5
<pre>
   My Bonnie lies over the ocean.

   My Bonnie lies over the sea.

   My Bonnie lies over the ocean.

   Oh, bring back my Bonnie to me.
</pre>
```

![pre](https://user-images.githubusercontent.com/70443393/188075660-99c02f0b-5aa9-4693-9734-8722ef3ecca2.jpg)

___

## Tag br
`tag br` berfungsi untuk memberikan baris baru/enter ke baris berikutnya

```html5
<br />
```
___

## Tag hr
`tag hr` berfungsi untuk memberikan garis/line sepanjang satu baris full di halaman website

```html5
<hr />
```
___

## Tag a
`tag a` berfungsi untuk membuat sebuah link menuju suatu halaman/website tertentu
```html5
<a href="https://www.w3schools.com/html" target="_blank">Silahkan klik link berikut ini.</a>
```

![image](https://user-images.githubusercontent.com/70443393/188352101-2e731653-397f-4ac5-9dcc-7ed55d67bee9.png)

___

## Tag img
`tag img` berfungsi untuk memberikan/menyisipkan gambar ke dalam halaman web.
Caranya kita buat folder `image`, lalu di dalamnya kita masukkan file gambar (misal img1.jpg), dan selanjutnya kita masukkan lokasi path-nya ke dalam atribut src yang ada di tag img
```html5
<img src="image/img1.jpg" alt="gambar_1" width="400px" height="250px" />
```

![image](https://user-images.githubusercontent.com/70443393/188352532-3c9138a6-e71c-4cab-9fb3-603e8f84c94c.png)

___

## Tag video
`tag video` berfungsi untuk memmasukkan/menyisipkan file video ke dalam halaman web.
```html5
<video src="video/video1.mp4" width="600" height="400" autoplay loop></video>
```

* autoplay berfungsi agar video berjalan/play secara otomatis
* loop berfungsi agar video berjalan/play secara berulang tanpa jeda
* Tag video lebih disarankan/sering digunakan dibandingkan tag iframe, karena proses pengambilan video berasal dari lokal

https://user-images.githubusercontent.com/70443393/188353237-1844f096-27b8-4161-bc90-c6f1ce280add.mp4

___

## Tag iframe
`tag iframe` berfungsi untuk mengambil sebuah spesifiki frame, bisa dalam bentuk data atau link website halaman tertentu untuk ditampilkan di halaman web kita.

Contoh tag iframe yang mengambil dari youtube link:
```html5
<iframe
      width="600"
      height="400"
      src="https://www.youtube.com/embed/gdheyyNnJyk"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
></iframe>
```

![image](https://user-images.githubusercontent.com/70443393/188354364-8c5f9340-3a41-4868-baf4-86cb21e96694.png)


*full source code bisa kamu lihat selengkapnya di index.html pada folder ini.*
