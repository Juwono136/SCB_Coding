# 02 HTML Dasar - Hyperlink and Multipages

## Materi ini terdiri dari:
- [Fungsi id](https://github.com/Juwono136/SCB_Coding/tree/master/02%20HTML%20Dasar%20-%20Hyperlink%20and%20Multipages#fungsi-id)
- [Hyperlink](https://github.com/Juwono136/SCB_Coding/tree/master/02%20HTML%20Dasar%20-%20Hyperlink%20and%20Multipages#hyperlink)
- [Cara membuat multipages dengan hyperlink](https://github.com/Juwono136/SCB_Coding/tree/master/02%20HTML%20Dasar%20-%20Hyperlink%20and%20Multipages#cara-membuat-multipages-dengan-hyperlink)

## Fungsi id
`id` adalah sebuah atribut dalam html yang digunakan untuk membuat suatu tag html, tag id memungkinkan sebuah content menjadi unik dan spesifik.
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
1. kita buat terlebih dahulu file, misalnya page1.html yang berisi halaman sederhana seperti berikut:
```html5
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman 1</title>
</head>
<body>
    <h1>Ini adalah halaman 1</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi perspiciatis vitae obcaecati distinctio velit architecto dolorum aspernatur nam aliquid, voluptatum, eius quae quidem, placeat incidunt quasi omnis dolores tempora unde! Molestias laborum distinctio natus a est cum dignissimos possimus quos accusantium ad suscipit maxime vel quia ut harum asperiores sunt, fuga officiis vitae. Facere exercitationem hic voluptate in soluta adipisci sit quidem. Assumenda distinctio saepe sint sunt culpa architecto, blanditiis maiores sapiente molestiae tempore praesentium hic provident, qui quo consequuntur sit ipsum corrupti beatae molestias. Accusamus quisquam dolorem voluptas voluptates earum deleniti officiis commodi, corrupti nesciunt adipisci impedit sequi quos quod nisi libero eum quaerat minus harum. Voluptatum facilis blanditiis, dolores dolorem error eaque sit fugiat minima pariatur officia iure quam, eum officiis adipisci modi deserunt odit eius delectus. Odio ab porro quis maiores eligendi aut omnis commodi amet hic incidunt sit, et quidem. Iusto tempore cupiditate repudiandae cum nam provident molestias, error porro esse recusandae modi. Repellat animi facilis quas corrupti assumenda enim libero laborum quasi soluta exercitationem aperiam porro reiciendis tenetur, ab nihil. Veniam recusandae reiciendis aperiam exercitationem fugit asperiores et hic vel quae distinctio, rem ullam doloremque culpa, rerum debitis. Omnis, repudiandae earum molestias quasi voluptas consequuntur esse ipsa explicabo recusandae fugiat, distinctio, provident ducimus cumque dolorum molestiae eos veritatis odio maiores dolor totam delectus! Fugit, eligendi nisi, recusandae aspernatur velit impedit consequuntur corporis temporibus exercitationem ex sunt eveniet minima quaerat veritatis, accusantium soluta. Assumenda perspiciatis nihil sunt deserunt rerum minima blanditiis quam quaerat eius voluptate, est nobis maiores earum voluptas dignissimos quibusdam nostrum magnam? Incidunt sunt minima saepe. Nulla adipisci aliquid expedita recusandae amet sed, minus harum iusto molestiae repellat quo nobis quos odio et magni quod tempora dolorem modi natus reiciendis. Temporibus ab beatae adipisci ipsam aliquam nesciunt quasi, atque doloribus, magnam unde optio?</p>

    <p>lanjut ke halaman berikutnya, <a href="page2.html">klik disini</a></p>
</body>
</html>
```
Perhatikan bahwa, di bagian bawah, yaitu `<p>lanjut ke halaman berikutnya, <a href="page2.html">klik disini</a></p>` kita buatkan tag a atau hyperlink dimana atribut href-nya mengarah ke file page2.html.

2. Selanjutnya kita buat file page2.html untuk membuat halaman ke-2
```html5
<h4>kembali? <a href="page1.html">klik disini</a></h4>
    
    <h1 id="halaman2">Ini adalah halaman 2</h1>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eos vitae dicta minus assumenda, nisi, culpa ab recusandae corrupti eius fugit? Consequatur alias iste quia facilis iure aliquid ab numquam fuga doloribus accusamus culpa, nesciunt reprehenderit quisquam voluptatum. Repellat cupiditate incidunt architecto quidem fugit fuga dolore necessitatibus facere quas id fugiat quibusdam sint facilis aliquam, rem suscipit itaque molestias est laboriosam accusantium obcaecati perspiciatis dolor omnis? Placeat ipsam quae corrupti excepturi eius saepe, unde quis illo inventore recusandae! Facere nihil beatae illo laboriosam, sapiente, mollitia repudiandae corporis possimus, asperiores quaerat quos saepe. Temporibus sapiente quis vel ipsum ratione quia consequuntur cum. Quos ipsam expedita, eos, totam aspernatur perspiciatis eaque illo eius incidunt error, aliquid voluptates? In, itaque quo consectetur placeat ex dignissimos laudantium quos nam dolorem libero animi consequatur eos aliquam voluptatem ratione nesciunt dolor quae veniam soluta! Assumenda eius quod, porro eligendi quisquam odit. Dolorum dolore error hic eum neque architecto quod expedita necessitatibus, aspernatur non placeat suscipit aut facere, laudantium sunt tempore, beatae adipisci quos quisquam nihil incidunt quis? Placeat earum pariatur vero deserunt eaque ut ullam necessitatibus facilis vitae consequuntur error repellat eveniet ad labore ipsa, dolor eius blanditiis veniam voluptatem magnam consectetur corporis. Illum, voluptas optio.</p>
```

Kita juga membuat tag a di file page2.html yaitu `<h4>kembali? <a href="page1.html">klik disini</a></h4>` agar user bisa mengklik dan kemudian kembali ke halaman 1 (page1.html) dengan mudah.

3. Selanjutnya kita akan membuat bookmark dengan cara menargetkan tag tertentu dengan bantuan hyperlink, Ingat, kita gunakan hashtag (#) untuk menargetkan halaman
Misal, kita buatkan sebuah daftar isi di halaman 2 (page2.html):
```html5
<h2>Daftar isi buku:</h2>

    <ul>
        <li><a href="#daftar1">Daftar 1</a></li>
        <li><a href="#daftar2">Daftar 2</a></li>
        <li><a href="#daftar3">Daftar 3</a></li>
        <li><a href="#daftar4">Daftar 4</a></li>
        <li><a href="#daftar5">Daftar 5</a></li>
    </ul>
```
Perhatikan bahwa masing-masing tag a di dalam tag list sudah di buat target dengan menambahkan hashtag (#) di depan value-nya.

Kemudian, kita bisa buat hyperlinknya sebagai tujuan target halaman dengan bantuan tag a, misal untuk list daftar 1:
```html5
 <h3 id="daftar1">Daftar 1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste veritatis eaque qui natus accusantium nam ex, culpa officia tempora nemo possimus iure error similique deserunt sint sapiente earum maiores rerum illum quis corrupti cupiditate! Iusto quia inventore tempore vitae aspernatur architecto reprehenderit sunt deleniti temporibus repudiandae expedita nam harum odit deserunt, distinctio quasi iste ex molestias at similique officiis!</p>
```
maka, ketika list `daftar 1` di klik, secara otomatis akan di arahkan ke konten `Daftar 1`

*Untuk melihat demo, kalian bisa download full source code nya pada folder ini*

