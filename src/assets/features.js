// Datos para cada sección
const tabsData = {
    insights: {
        text: "Gain a comprehensive view of your finances with PIA's real-time dashboard, where you can monitor your total balance, track income streams, and analyze expenses with ease. The AI-powered interface automatically updates your financial snapshot, offering a clear picture of your savings and spending patterns, all tailored to help you make informed decisions.",
        image: "assets/insights.png",
        alt: "PIA Insights Dashboard"
    },
    transactions: {
        text: "Track every transaction with intelligent categorization and detailed analysis. PIA automatically organizes your spending into meaningful categories, identifies patterns, and provides insights about your spending habits. Never lose track of where your money goes with our advanced transaction monitoring system.",
        image: "assets/transaction.png",
        alt: "PIA Transactions View"
    },
    tips: {
        text: "Receive personalized financial advice powered by AI that adapts to your spending patterns and goals. Get actionable recommendations on saving opportunities, budget optimization, and smart financial decisions. Our AI learns from your behavior to provide increasingly relevant and valuable tips over time.",
        image: "assets/tips.png",
        alt: "PIA Smart Tips"
    }
};

function initializeTabs() {
    const tabs = document.querySelectorAll('#secondary nav ul li');
    const textElement = document.querySelector('#secondary div p');
    const imageElement = document.querySelector('#secondary #image img');
    
    if (!tabs.length || !textElement || !imageElement) {
        console.error('No se encontraron elementos necesarios para las tabs');
        return;
    }

    // Función para cambiar el contenido
    function changeContent(tabName, clickedTab) {
        const data = tabsData[tabName];
        if (!data) return;

        // Actualizar estilos de tabs
        tabs.forEach(tab => {
            tab.classList.remove('text-[#4A90E2]', 'active-tab');
            tab.classList.add('text-[#6D7B8C]');
        });
        
        // Marcar tab activo
        clickedTab.classList.remove('text-[#6D7B8C]');
        clickedTab.classList.add('text-[#4A90E2]', 'active-tab');

        // Animación de fade out
        textElement.style.opacity = '0';
        imageElement.style.opacity = '0';
        
        // Cambiar contenido después de la animación
        setTimeout(() => {
            textElement.textContent = data.text;
            imageElement.src = data.image;
            imageElement.alt = data.alt;
            
            // Fade in
            textElement.style.opacity = '1';
            imageElement.style.opacity = '1';
        }, 300);
    }

    // Agregar event listeners
    tabs.forEach((tab, index) => {
        const tabNames = ['insights', 'transactions', 'tips'];
        const tabName = tabNames[index];
        
        // Agregar cursor pointer
        tab.style.cursor = 'pointer';
        
        // Agregar transición
        tab.style.transition = 'color 0.3s ease';
        
        tab.addEventListener('click', () => {
            changeContent(tabName, tab);
        });

        // Hover effects
        tab.addEventListener('mouseenter', () => {
            if (!tab.classList.contains('active-tab')) {
                tab.style.color = '#7BA3E8';
            }
        });

        tab.addEventListener('mouseleave', () => {
            if (!tab.classList.contains('active-tab')) {
                tab.style.color = '#6D7B8C';
            }
        });
    });

    // Agregar transiciones al texto e imagen
    textElement.style.transition = 'opacity 0.3s ease';
    imageElement.style.transition = 'opacity 0.3s ease';

    // Establecer "Insights" como activo por defecto
    changeContent('insights', tabs[0]);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTabs);
} else {
    initializeTabs;
}