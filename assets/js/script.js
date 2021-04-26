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

// Start:Footer Year
const date = new Date();
const footerYear = document.getElementById("footer-year");
footerYear.innerHTML = date.getFullYear();
// End:Footer Year