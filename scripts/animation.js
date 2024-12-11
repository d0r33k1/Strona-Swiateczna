document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.navigation ul li a');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
