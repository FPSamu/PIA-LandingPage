// Scroll animation script
let isScrolling = false;
let scrollProgress = 0;

function handleScroll() {
    if (!isScrolling) {
        requestAnimationFrame(updateScrollAnimation);
        isScrolling = true;
    }
}

function updateScrollAnimation() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    
    // Calculate scroll progress (0 to 1)
    scrollProgress = Math.min(scrollTop / (windowHeight * 2), 1);
    
    const phoneImage = document.getElementById('phoneImage');
    const phoneContainer = document.getElementById('phoneContainer');
    const phoneGlow = document.getElementById('phoneGlow');
    const backgroundOverlay = document.getElementById('backgroundOverlay');
    const contentElements = document.querySelectorAll('.content-overlay');
    
    if (scrollProgress > 0) {
        // Calculate scale factor (from 1 to ~8 to cover full screen)
        const maxScale = Math.max(window.innerWidth / 350, window.innerHeight / 600) * 1.2;
        const scale = 1 + (maxScale - 1) * scrollProgress;
        
        // Apply transformations
        phoneImage.style.transform = `scale(${scale})`;
        phoneGlow.style.transform = `scale(${scale * 1.05})`;
        
        // Fade out content elements
        const contentOpacity = Math.max(0, 1 - scrollProgress * 2);
        contentElements.forEach(element => {
            element.style.opacity = contentOpacity;
        });
        
        // Show background overlay
        backgroundOverlay.style.opacity = Math.min(scrollProgress * 1.5, 0.9);
        
        // Position phone container
        if (scrollProgress > 0.3) {
            phoneContainer.classList.add('scroll-triggered');
        } else {
            phoneContainer.classList.remove('scroll-triggered');
        }
        
        // Adjust glow opacity
        phoneGlow.style.opacity = Math.max(0.3, 1 - scrollProgress * 0.7);
        
    } else {
        // Reset to initial state
        phoneImage.style.transform = 'scale(1)';
        phoneGlow.style.transform = 'scale(1.05)';
        phoneGlow.style.opacity = '1';
        backgroundOverlay.style.opacity = '0';
        phoneContainer.classList.remove('scroll-triggered');
        
        contentElements.forEach(element => {
            element.style.opacity = '1';
        });
    }
    
    isScrolling = false;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll, { passive: true });

// Initial call
updateScrollAnimation();