function handleScrollAnimation() {
    const main = document.querySelector('main');
    const body = document.body;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const scrollPercent = Math.abs(entry.boundingClientRect.y / window.innerHeight * 100);
            
            // Fade out main content
            if (scrollPercent >= 40 && scrollPercent <= 70) {
                const opacity = 1 - ((scrollPercent - 40) / 30);
                main.style.opacity = Math.max(0, opacity);
            }
            
            // Change background color
            if (scrollPercent >= 45 && scrollPercent <= 80) {
                const progress = (scrollPercent - 45) / 35;
                const startColor = { r: 26, g: 31, b: 46 }; // #1A1F2E
                const endColor = { r: 245, g: 246, b: 250 }; // #F5F6FA
                
                const r = Math.round(startColor.r + (endColor.r - startColor.r) * progress);
                const g = Math.round(startColor.g + (endColor.g - startColor.g) * progress);
                const b = Math.round(startColor.b + (endColor.b - startColor.b) * progress);
                
                body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });
    }, {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100)
    });

    observer.observe(main);
}

// Check if the browser supports scroll timeline
if (!CSS.supports('animation-timeline: scroll()')) {
    handleScrollAnimation();
}