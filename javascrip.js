<script>
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Animate the hamburger into an 'X'
        hamburger.classList.toggle('toggle');
    });
</script>