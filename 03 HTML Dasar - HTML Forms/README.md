# 03 HTML Dasar - HTML Forms

## Materi ini terdiri dari:
* [Tag form](https://github.com/Juwono136/SCB_Coding/tree/master/03%20HTML%20Dasar%20-%20HTML%20Forms#tag-form)
* [Form elements: input](https://github.com/Juwono136/SCB_Coding/tree/master/03%20HTML%20Dasar%20-%20HTML%20Forms#form-elements-input)
* [Form elements: label](https://github.com/Juwono136/SCB_Coding/tree/master/03%20HTML%20Dasar%20-%20HTML%20Forms#form-elements-label)
* [Tipe input: radio](https://github.com/Juwono136/SCB_Coding/tree/master/03%20HTML%20Dasar%20-%20HTML%20Forms#tipe-input-radio)
* [Tipe input: checkbox](https://github.com/Juwono136/SCB_Coding/tree/master/03%20HTML%20Dasar%20-%20HTML%20Forms#tipe-input-checkbox)
* [Tag textarea](https://github.com/Juwono136/SCB_Coding/tree/master/03%20HTML%20Dasar%20-%20HTML%20Forms#tag-textarea)
* [Tipe input: submit](https://github.com/Juwono136/SCB_Coding/tree/master/03%20HTML%20Dasar%20-%20HTML%20Forms#tipe-input-submit)

## Tag form
`tag form` adalah sebuah tag HTML yang digunakan untuk mengambil input dari user. input dari user biasanya selanjutnya akan di teruskan ke server.

Berikut adalah format tag form dalam HTML:
```html5
<form>
.
form elements
.
</form>
```

Di dalam tag form terdapat `form elements` yang terdiri dari banyak sekali elements yang bisa kita gunakan untuk mengambil data dari berbagai jenis inputan user. untuk info lebih lengkapnya kalian bisa lihat dokumentasinya di https://www.w3schools.com/html/html_forms.asp

Di materi kita kali ini, hanya beberapa form elements yang dibahas dan sering digunakan dalam pembuatan suatu website. Kita akan membuat sebuah form sederhana seperti gambar dibawah ini:
![Belajar-HTML-Forms](https://user-images.githubusercontent.com/70443393/189599331-47f4fb0b-7ad7-47b6-b120-118a2eb8be81.png)

Jika kita perhatikan, ada beberapa form elements yang kita gunakan, tapi tahukah kalian bahwa ada 2 element penting form yang sering digunakan yaitu `tag input` dan `tag label`

____

## Form elements: input
tag `<input />` adalah tag dimana user bisa mengisi sesuatu atau melakukan input ke dalam form, inputannya bisa berbagai jenis dari mulai teks, email, password dan sebagainya.

Ada berbagai jenis tipe input kalian bisa lihat di https://www.w3schools.com/html/html_form_input_types.asp

### Tipe inputan teks
```html5
<label for="name">Nama Lengkap:</label>
<input type="text" id="name" name="name" placeholder="Nama Lengkap" />
```

Di dalam tag input terdapat beberapa atribut seperti:
* `type` = menerangkan jenis tipe inputannya, dalam contoh diatas menggunakan tipe "text" untuk memasukkan inputan teks
* `id` = bersifat unik dan spesifik, nama id biasanya sama dengan "for" di tag label agar mereka menjadi komponen yang sama dan bukan terpisah
* `name` = memberikan nama yang spesifik untuk inputannya, atribu name nanti kedepannya bisa kita manfaatkan untuk di panggil di javascript agar inputan bisa dimanipulasi
* `placeholder` = memberikan teks transparan dan memberikan keterangan tambahan ke dalam inputannya
* `value` = memberikan nilai inputan default secara otomatis tanpa perlu user isi sebelumnya

### Tipe inputan email
```html5
<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="Email anda" />
```

Inputan tipe `email` artinya jenis inputan harus bertipe email, dimana user harus memasukkan format email (emailkamu@email.com), jika user tidak memasukkan inputan dengan format email maka html secara otomatis akan menolak jenis inputannya ketika data sebelum di submit.

### Tipe inputan tanggal lahir
```html5
<label for="tgl">Tanggal lahir:</label>
<input type="date" id="tgl" name="tanggal_lahir" />
```

Inputan tipe `date` memungkinkan user untuk menginput data dalam bentuk format tanggal/bulan/tahun (dd/mm/yyyy).

![name](https://user-images.githubusercontent.com/70443393/189604227-ac434e3d-1df0-49ad-98e5-cefbe51d5d4b.jpg)

____

## Form elements: label
tag `<label></label>` berfungsi untuk memberikan label pada inputan, tag ini biasanya berpasangan dengan tag input karena bisa menjelaskan/memberikan keterangan (label) pada inputan yang dimasukkan user

```html5
<label for="name">Nama Lengkap:</label>
```

