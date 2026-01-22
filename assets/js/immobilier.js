// ============================================
// MINTCHI J. SERVICES - IMMOBILIER MANAGEMENT
// ============================================

// Database de propriétés (à remplacer par une vraie base de données)
const properties = {
    1: {
        id: 1,
        category: 'terrain',
        title: 'Terrain à Akpakpa',
        location: 'Akpakpa, Cotonou',
        price: 'Prix à négocier',
        surface: '500 m²',
        description: 'Terrain viabilisé dans un quartier calme et sécurisé, proche de toutes les commodités. Idéal pour construction résidentielle ou petit immeuble. Titre foncier disponible.',
        specs: {
            surface: '500 m²',
            type: 'Titre foncier',
            access: 'Route bitumée',
            electricity: 'Disponible',
            water: 'Disponible'
        },
        features: [
            'Titre foncier',
            'Quartier calme',
            'Proche des écoles',
            'Accès facile',
            'Zone résidentielle',
            'Électricité disponible',
            'Eau courante',
            'Sécurisé'
        ],
        images: [
            'assets/images/immobilier/terrains/terrain1.jpg',
            'assets/images/immobilier/terrains/terrain1-2.jpg',
            'assets/images/immobilier/terrains/terrain1-3.jpg'
        ]
    },
    2: {
        id: 2,
        category: 'terrain',
        title: 'Grand Terrain à Godomey',
        location: 'Godomey, Abomey-Calavi',
        price: 'Prix à négocier',
        surface: '1000 m²',
        description: 'Terrain spacieux parfait pour projet immobilier d\'envergure. Bien situé avec accès facile depuis la route principale. Zone en pleine expansion.',
        specs: {
            surface: '1000 m²',
            type: 'Titre foncier',
            access: 'Route principale',
            electricity: 'Disponible',
            water: 'Disponible'
        },
        features: [
            'Grande superficie',
            'Titre foncier',
            'Zone en développement',
            'Proche route principale',
            'Idéal investissement',
            'Électricité et eau',
            'Bon prix',
            'Document en règle'
        ],
        images: [
            'assets/images/immobilier/terrains/terrain2.jpg',
            'assets/images/immobilier/terrains/terrain2-2.jpg'
        ]
    },
    3: {
        id: 3,
        category: 'maison',
        title: 'Belle Maison F4',
        location: 'Akpakpa, Cotonou',
        price: '150 000 FCFA/mois',
        bedrooms: '4 chambres',
        bathrooms: '2 salles de bain',
        description: 'Maison moderne et spacieuse avec salon confortable, cuisine équipée, dans un quartier sécurisé. Parfait pour une famille.',
        specs: {
            bedrooms: '4 chambres',
            bathrooms: '2 salles de bain',
            living: 'Grand salon',
            kitchen: 'Cuisine équipée',
            parking: 'Disponible',
            surface: '180 m²'
        },
        features: [
            'Cuisine équipée',
            'Grand salon',
            'Parking privé',
            'Quartier sécurisé',
            'Proche marché',
            'Climatisation',
            'Eau courante',
            'Groupe électrogène'
        ],
        images: [
            'assets/images/immobilier/maisons/maison1.jpg',
            'assets/images/immobilier/maisons/maison1-2.jpg',
            'assets/images/immobilier/maisons/maison1-3.jpg',
            'assets/images/immobilier/maisons/maison1-4.jpg'
        ]
    },
    4: {
        id: 4,
        category: 'maison',
        title: 'Villa Moderne Cadjehoun',
        location: 'Cadjehoun, Cotonou',
        price: '300 000 FCFA/mois',
        bedrooms: '5 chambres',
        bathrooms: '3 salles de bain',
        description: 'Villa haut standing avec piscine, jardin spacieux, proche de l\'aéroport. Finitions luxueuses et équipements modernes.',
        specs: {
            bedrooms: '5 chambres',
            bathrooms: '3 salles de bain',
            living: 'Double salon',
            kitchen: 'Cuisine américaine',
            pool: 'Piscine',
            garden: 'Grand jardin',
            surface: '350 m²'
        },
        features: [
            'Piscine privée',
            'Grand jardin',
            'Cuisine américaine',
            'Double salon',
            'Climatisation centrale',
            'Système de sécurité',
            'Parking 3 voitures',
            'Proche aéroport',
            'Groupe électrogène',
            'WiFi inclus'
        ],
        images: [
            'assets/images/immobilier/maisons/maison2.jpg',
            'assets/images/immobilier/maisons/maison2-2.jpg',
            'assets/images/immobilier/maisons/maison2-3.jpg'
        ]
    },
    5: {
        id: 5,
        category: 'chambre',
        title: 'Chambre Meublée Fidjrossè',
        location: 'Fidjrossè, Cotonou',
        price: '35 000 FCFA/mois',
        description: 'Chambre confortable avec salle de bain privée, cuisine partagée. Idéale pour étudiant ou jeune professionnel. Quartier calme et sécurisé.',
        specs: {
            type: 'Chambre meublée',
            bathroom: 'Salle de bain privée',
            kitchen: 'Cuisine partagée',
            wifi: 'Internet inclus',
            surface: '20 m²'
        },
        features: [
            'Meublée',
            'Salle de bain privée',
            'WiFi inclus',
            'Électricité incluse',
            'Eau incluse',
            'Quartier calme',
            'Proche université',
            'Sécurisé'
        ],
        images: [
            'assets/images/immobilier/chambres/chambre1.jpg',
            'assets/images/immobilier/chambres/chambre1-2.jpg'
        ]
    },
    6: {
        id: 6,
        category: 'chambre',
        title: 'Studio Indépendant Haie Vive',
        location: 'Haie Vive, Cotonou',
        price: '50 000 FCFA/mois',
        description: 'Studio moderne tout équipé avec kitchenette et salle de bain privée. Parfait pour personne seule. Proche des universités et commerces.',
        specs: {
            type: 'Studio indépendant',
            bathroom: 'Salle de bain privée',
            kitchen: 'Kitchenette équipée',
            wifi: 'Internet inclus',
            surface: '30 m²'
        },
        features: [
            'Studio indépendant',
            'Tout équipé',
            'Kitchenette',
            'Salle de bain privée',
            'WiFi inclus',
            'Climatisation',
            'Proche universités',
            'Commerces à proximité',
            'Charges incluses'
        ],
        images: [
            'assets/images/immobilier/chambres/chambre2.jpg',
            'assets/images/immobilier/chambres/chambre2-2.jpg',
            'assets/images/immobilier/chambres/chambre2-3.jpg'
        ]
    }
};

let currentPropertyId = null;
let currentImageIndex = 0;

// ============================================
// FILTER FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter properties
            const filter = this.getAttribute('data-filter');
            filterProperties(filter);
        });
    });
});

function filterProperties(category) {
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
            setTimeout(() => {
                card.style.display = 'block';
            }, 10);
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.display = 'block';
                }, 10);
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }
    });
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

function viewProperty(id) {
    currentPropertyId = id;
    currentImageIndex = 0;
    
    const property = properties[id];
    if (!property) return;
    
    // Populate modal content
    populateModal(property);
    
    // Show modal
    const modal = document.getElementById('propertyModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function populateModal(property) {
    // Set main image
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = property.images[0] || 'https://via.placeholder.com/800x600/2563eb/ffffff?text=' + property.title;
    
    // Create thumbnails
    const thumbnailList = document.getElementById('thumbnailList');
    thumbnailList.innerHTML = '';
    
    property.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
        thumb.innerHTML = `<img src="${img}" alt="${property.title}" onerror="this.src='https://via.placeholder.com/100x80/2563eb/ffffff?text=Photo'">`;
        thumb.onclick = () => selectImage(index);
        thumbnailList.appendChild(thumb);
    });
    
    // Populate details
    const detailsDiv = document.getElementById('modalDetails');
    
    let specsHTML = '';
    for (let [key, value] of Object.entries(property.specs)) {
        const labels = {
            surface: 'Surface',
            bedrooms: 'Chambres',
            bathrooms: 'Salles de bain',
            type: 'Type',
            access: 'Accès',
            electricity: 'Électricité',
            water: 'Eau',
            living: 'Salon',
            kitchen: 'Cuisine',
            parking: 'Parking',
            pool: 'Piscine',
            garden: 'Jardin',
            bathroom: 'Salle de bain',
            wifi: 'Internet'
        };
        
        const icon = {
            surface: 'fa-ruler-combined',
            bedrooms: 'fa-bed',
            bathrooms: 'fa-bath',
            type: 'fa-file-contract',
            access: 'fa-road',
            electricity: 'fa-plug',
            water: 'fa-tint',
            living: 'fa-couch',
            kitchen: 'fa-utensils',
            parking: 'fa-car',
            pool: 'fa-swimming-pool',
            garden: 'fa-tree',
            bathroom: 'fa-bath',
            wifi: 'fa-wifi'
        }[key] || 'fa-check';
        
        specsHTML += `
            <div class="spec-item">
                <i class="fas ${icon}"></i>
                <div class="spec-details">
                    <span class="spec-label">${labels[key] || key}</span>
                    <span class="spec-value">${value}</span>
                </div>
            </div>
        `;
    }
    
    let featuresHTML = '';
    property.features.forEach(feature => {
        featuresHTML += `
            <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <span>${feature}</span>
            </div>
        `;
    });
    
    detailsDiv.innerHTML = `
        <h2>${property.title}</h2>
        <div class="modal-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>${property.location}</span>
        </div>
        
        <div class="modal-specs">
            ${specsHTML}
        </div>
        
        <div class="modal-description">
            <h3>Description</h3>
            <p>${property.description}</p>
        </div>
        
        <div class="modal-features">
            <h3>Caractéristiques</h3>
            <div class="features-list">
                ${featuresHTML}
            </div>
        </div>
        
        <div class="modal-price">
            <h3>${property.category === 'terrain' ? 'Prix' : 'Loyer mensuel'}</h3>
            <div class="price">${property.price}</div>
        </div>
    `;
}

function selectImage(index) {
    currentImageIndex = index;
    const property = properties[currentPropertyId];
    
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = property.images[index];
    
    // Update thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function prevImage() {
    const property = properties[currentPropertyId];
    currentImageIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
    selectImage(currentImageIndex);
}

function nextImage() {
    const property = properties[currentPropertyId];
    currentImageIndex = (currentImageIndex + 1) % property.images.length;
    selectImage(currentImageIndex);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('propertyModal');
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});

// ============================================
// PLACEHOLDER IMAGES
// ============================================

// Replace placeholder images when real images fail to load
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[onerror]');
    images.forEach(img => {
        if (!img.complete || img.naturalHeight === 0) {
            img.onerror();
        }
    });
});