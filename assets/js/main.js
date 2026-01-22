// ============================================
// MINTCHI J. SERVICES - MAIN JAVASCRIPT
// ============================================

// ============================================
// MOBILE NAVIGATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .step, .property-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// STICKY HEADER
// ============================================

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
});

// Add transition to header
if (header) {
    header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
}

// ============================================
// LOADING ANIMATION
// ============================================

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ============================================
// FORM VALIDATION HELPERS
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    // Benin phone format: +229 XX XX XX XX XX
    const re = /^(\+229)?[0-9\s]{8,}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function formatPhone(phone) {
    // Remove all non-digit characters
    let cleaned = phone.replace(/\D/g, '');
    
    // Add Benin country code if not present
    if (!cleaned.startsWith('229') && cleaned.length === 8) {
        cleaned = '229' + cleaned;
    }
    
    return cleaned;
}

// ============================================
// WHATSAPP HELPER
// ============================================

function sendWhatsAppMessage(message, phone = '22901966985') {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copié dans le presse-papiers !');
        }).catch(err => {
            console.error('Erreur lors de la copie:', err);
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showNotification('Copié dans le presse-papiers !');
        } catch (err) {
            console.error('Erreur lors de la copie:', err);
        }
        document.body.removeChild(textArea);
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : '#ef4444',
        color: '#ffffff',
        padding: '15px 25px',
        borderRadius: '50px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: '9999',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        animation: 'slideInRight 0.3s ease',
        fontWeight: '600'
    });

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

// Create back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.setAttribute('aria-label', 'Retour en haut');

Object.assign(backToTopBtn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #2563eb, #1e40af)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    fontSize: '1.2rem',
    cursor: 'pointer',
    opacity: '0',
    visibility: 'hidden',
    transition: 'all 0.3s ease',
    zIndex: '1000',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
});

document.body.appendChild(backToTopBtn);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'translateY(-5px)';
    backToTopBtn.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'translateY(0)';
    backToTopBtn.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
});

// ============================================
// PRINT PREVENTION FOR SENSITIVE CONTENT
// ============================================

// Optionally prevent printing of certain pages
// window.addEventListener('beforeprint', function(e) {
//     if (confirm('Voulez-vous vraiment imprimer cette page ?')) {
//         return true;
//     } else {
//         e.preventDefault();
//         return false;
//     }
// });

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to open search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Open search modal if implemented
        console.log('Search shortcut pressed');
    }

    // ESC to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            if (typeof closeModal === 'function') {
                closeModal();
            }
        });
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🎨 MINTCHI J. SERVICES', 'color: #2563eb; font-size: 24px; font-weight: bold;');
console.log('%c✨ Site web professionnel | Développé avec soin', 'color: #10b981; font-size: 14px;');
console.log('%c📧 Contact: +229 01 96 69 64 85', 'color: #666; font-size: 12px;');

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            if (pageLoadTime > 3000) {
                console.warn(`⚠️ Page load time: ${pageLoadTime}ms (consider optimization)`);
            } else {
                console.log(`✅ Page load time: ${pageLoadTime}ms`);
            }
        }, 0);
    });
}

// ============================================
// EXPORT UTILITIES
// ============================================

// Make utilities available globally if needed
window.mintchiUtils = {
    validateEmail,
    validatePhone,
    formatPhone,
    sendWhatsAppMessage,
    copyToClipboard,
    showNotification
};