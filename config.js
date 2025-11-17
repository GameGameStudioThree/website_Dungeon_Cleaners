// Configuration file for Dungeon Janitor website
// Modify these values to easily adjust sizes throughout the site

const CONFIG = {
    // Mini-game settings
    miniGame: {
        mopSize: 60,              // Size of the cleaning brush (in pixels)
        slimeSpots: 50,           // Number of slime spots on the dirty screen
        slimeMinSize: 50,         // Minimum radius of slime spots
        slimeMaxSize: 150,        // Maximum radius of slime spots
        cleanThreshold: 85,       // Percentage of screen that needs to be clean to finish (0-100)
        progressCheckInterval: 200, // How often to check cleaning progress (milliseconds)
        sampleStep: 20,           // Pixel sampling rate for performance (higher = faster but less accurate)
    },
    
    // Typography sizes (Tailwind classes are dynamic via CSS variables)
    typography: {
        heroTitleMobile: '3rem',       // Mobile hero title size
        heroTitleDesktop: '4.5rem',    // Desktop hero title size
        intraTitleMobile: '2.5rem',    // Mobile intro title
        intraTitleDesktop: '3.75rem',  // Desktop intro title
        sectionTitleMobile: '1.875rem',// Mobile section titles
        sectionTitleDesktop: '2.25rem',// Desktop section titles
    },
    
    // Spacing
    spacing: {
        sectionPadding: '5rem',        // Vertical padding for sections
        containerMaxWidth: '80rem',    // Max width of content containers
    },
    
    // Animation timings
    animations: {
        floatDuration: 4,              // Float animation duration (seconds)
        dirtFadeOut: 500,              // Dirt layer fade out time (milliseconds)
        floorFadeOut: 1000,            // Floor fade out time (milliseconds)
        floorFadeDelay: 800,           // Delay before floor starts fading (milliseconds)
    },
    
    // Colors (for JavaScript use)
    colors: {
        dirtBase: '#1a1a1a',
        slimeVariant1: '#1e291b',
        slimeVariant2: '#0f172a',
        primaryGreen: '#22c55e',
        accentGreen: '#16a34a',
    }
};

// Apply configuration to the page
function applyConfig() {
    // Apply typography sizes
    const root = document.documentElement;
    root.style.setProperty('--hero-title-mobile', CONFIG.typography.heroTitleMobile);
    root.style.setProperty('--hero-title-desktop', CONFIG.typography.heroTitleDesktop);
    root.style.setProperty('--section-padding', CONFIG.spacing.sectionPadding);
    
    // Apply animation durations
    const floatElements = document.querySelectorAll('.float-anim');
    floatElements.forEach(el => {
        el.style.animationDuration = CONFIG.animations.floatDuration + 's';
    });
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
