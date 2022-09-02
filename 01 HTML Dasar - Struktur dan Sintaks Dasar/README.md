# 01 HTML Dasar - Struktur dan Sintaks Dasar

## Materi ini terdiri dari:
* [Struktur dasar HTML](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#struktur-dasar-html)
* [Tag title](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-title)
* [Tag link - Add Favicon](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-link---add-favicon)
* [Tag Heading](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-heading)
* [Tag Paragraph and Tag Pre](https://github.com/Juwono136/SCB_Coding/tree/master/01%20HTML%20Dasar%20-%20Struktur%20dan%20Sintaks%20Dasar#tag-paragraph-and-tag-pre)
* [Tag br]
* [Tag hr]
* [Tag a]
* [Tag img]
* [Tag video]
* [Tag iframe]

## Struktur dasar HTML

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
* `<head></head>` yang berfungsi untuk memberikan metadata dan judul halaman website.
* `<body></body>` yang berfungsi untuk menuliskan isi/content ke halaman website, seperti memberikan teks, gambar, video atau yang lainnya.

## Tag title
`tag title` atau `<title></title>` di letakkan di dalam `tag head`, dan berfungsi untuk memberikan judul halaman website.

```html5
<title>Ini adalah judul halaman website</title>
```

## Tag link - Add Favicon
`tag link - favicon` di letakkan di dalam tag head (biasanya diatas tag title), dan berfungsi untuk memberikan icon website (favicon) dengan format file .ico
Masukkan link favicon ke dalam atribut `href`

```html5
<link rel="shortcut icon" href="image/html5.ico" type="image/x-icon" />
```

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
