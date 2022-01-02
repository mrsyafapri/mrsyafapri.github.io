// Start:Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbx7lOidrnuyMbOFmrn7zRsit90nRJHmB6fKl0wQDpsPVmdW66RHAdxoMjIKEtARX5Uu/exec';
const form = document.forms['mrsyafapri-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
// End:Contact Form

// Start:PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
// End:PWA

// Start:AOS
AOS.init({
    once: true,
    duration: 1000,
});
// End:AOS

// Start:GSAP
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', {
    duration: 1.5,
    delay: 1.5,
    text: 'Student | Web Developer | GDSC Lead'
})
gsap.from('.jumbotron img', {
    duration: 1,
    rotateY: 360,
    opacity: 0,
});
gsap.from('.navbar', {
    duration: 1.5,
    y: -150,
    opacity: 0,
    ease: 'bounce',
});
gsap.from('.display-4', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});
// End:GSAP

// Start:Footer Year
const date = new Date();
const footerYear = document.getElementById("footer-year");
footerYear.innerHTML = date.getFullYear();
// End:Footer Year