// ambil elemen DOM dari image carousel
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

// console.log(wrapper, carousel, images, buttons);
let imageIndex = 1
let intervalId;

const autoSlide = () => {
    // start slideshow dengan memanggil fungsi slideImage setiap 2 detik
    intervalId = setInterval(() => slideImage(++imageIndex), 2000)
}

autoSlide()

const slideImage = () => {
    // menghitung index image yang update
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;

    // update tampilan carousel untuk menampilkan spesifik image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
}

const updateClick = (e) => {
    // stop slideshow otomatis
    clearInterval(intervalId)

    // menghitung image yang update berdasarkan tombol yang di klik
    imageIndex += e.target.id === "next" ? 1 : -1
    slideImage(imageIndex)

    // restart slideshow otomatis
    autoSlide()
}

// tambahkan event listener untuk button
buttons.forEach((button) => button.addEventListener("click", updateClick))

// tambah mouseover event listener untuk menstop auto sliding
wrapper.addEventListener('mouseover', () => clearInterval(intervalId))

// tambah mouseleave event listener untuk melanjutkan auto sliding ketika tidak di mouseover
wrapper.addEventListener('mouseleave', autoSlide)