document.addEventListener('DOMContentLoaded', () => {
   
    const contactForm = document.getElementById('contactMeForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
         
            e.preventDefault(); 
            
          
            alert('Terima kasih Sudah Rental di tempat kami, Pesanan kamu sudah berhasil dikirim. Admin akan segera meresponsnya.');
            
            
            contactForm.reset();
        });
    }
});