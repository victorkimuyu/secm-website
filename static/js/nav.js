// Navigation Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            // Scrolled state: White background, dark text, shadow
            nav.classList.remove('bg-transparent', 'text-white');
            nav.classList.add('bg-white', 'text-slate-900', 'shadow-md');
        } else {
            // Top state: Transparent background, white text, no shadow
            nav.classList.add('bg-transparent', 'text-white');
            nav.classList.remove('bg-white', 'text-slate-900', 'shadow-md');
        }
    };

    // Initial check
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
});
