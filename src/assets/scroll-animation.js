function handleScrollAnimation() {
    const main = document.querySelector('main');
    const body = document.body;
    
    if (!main || !body) {
        console.error('No se encontraron elementos main o body');
        return;
    }
    
    function updateAnimation() {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Detectar orientación
        const isPortrait = window.innerHeight > window.innerWidth;
        
        // Configurar rangos según orientación
        let fadeStart, fadeEnd, colorStart, colorEnd;
        
        if (isPortrait) {
            // Rangos para móvil/portrait - empezar más tarde en el scroll
            fadeStart = viewportHeight * 1;
            fadeEnd = viewportHeight * 1.6;
            colorStart = viewportHeight * 0.8;
            colorEnd = viewportHeight * 1.2;
        } else {
            // Rangos para desktop/landscape - más temprano
            fadeStart = viewportHeight * 0.1;
            fadeEnd = viewportHeight * 0.3;
            colorStart = viewportHeight * 0.1;
            colorEnd = viewportHeight * 0.3;
        }
        
        // Aplicar fade del main
        if (scrollPosition >= fadeStart && scrollPosition <= fadeEnd) {
            const fadeProgress = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
            const opacity = Math.max(0, Math.min(1, 1 - fadeProgress));
            main.style.opacity = opacity;
            main.style.transition = 'none'; // Quitar transición para scroll suave
        } else if (scrollPosition > fadeEnd) {
            main.style.opacity = '0';
        } else {
            main.style.opacity = '1';
        }
        
        // Aplicar cambio de background
        if (scrollPosition >= colorStart && scrollPosition <= colorEnd) {
            const colorProgress = (scrollPosition - colorStart) / (colorEnd - colorStart);
            const startColor = { r: 26, g: 31, b: 46 }; // #1A1F2E
            const endColor = { r: 245, g: 246, b: 250 }; // #F5F6FA
            
            const r = Math.round(startColor.r + (endColor.r - startColor.r) * colorProgress);
            const g = Math.round(startColor.g + (endColor.g - startColor.g) * colorProgress);
            const b = Math.round(startColor.b + (endColor.b - startColor.b) * colorProgress);
            
            body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            body.style.transition = 'none'; // Quitar transición para scroll suave
        } else if (scrollPosition > colorEnd) {
            body.style.backgroundColor = 'rgb(245, 246, 250)';
        } else {
            body.style.backgroundColor = 'rgb(26, 31, 46)';
        }
        
        // Debug (descomenta para ver valores)
        // console.log(`Scroll: ${scrollPosition}, VH: ${viewportHeight}, FadeStart: ${fadeStart}, FadeEnd: ${fadeEnd}, ColorStart: ${colorStart}, ColorEnd: ${colorEnd}`);
    }

    // Throttled scroll listener
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateAnimation();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Event listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateAnimation, { passive: true });
    
    // Initial update
    updateAnimation();
}

// Función para deshabilitar animaciones CSS que interfieren
function disableNativeScrollAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        main {
            animation: none !important;
            animation-timeline: none !important;
        }
        body {
            animation: none !important;
            animation-timeline: none !important;
        }
    `;
    document.head.appendChild(style);
}

// Detectar si necesitamos JavaScript fallback
function needsJavaScriptAnimation() {
    // Siempre usar JavaScript para mayor control
    return true;
    
    // Alternativamente, puedes usar esta lógica:
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // const supportsScrollTimeline = CSS && CSS.supports && CSS.supports('animation-timeline: scroll()');
    // return isMobile || !supportsScrollTimeline;
}

// Inicializar
if (needsJavaScriptAnimation()) {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            disableNativeScrollAnimations();
            handleScrollAnimation();
        });
    } else {
        disableNativeScrollAnimations();
        handleScrollAnimation();
    }
}