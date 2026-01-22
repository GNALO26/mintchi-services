# 🖨️ MINTCHI J. SERVICES - Site Web Professionnel

Site web moderne pour MINTCHI J. SERVICES - Service de photocopie, impression et immobilier à Cotonou, Bénin.

## 📋 Fonctionnalités

### 🖨️ Service de Photocopie
- **Commande en ligne** : Upload de documents (PDF, DOC, DOCX, JPG, PNG)
- **Configuration flexible** : Sélection de pages spécifiques ou document complet
- **Nombre d'exemplaires** : Choix du nombre de copies
- **Calcul automatique** : Prix calculé en temps réel (10 FCFA/page)
- **Paiement sécurisé** : 
  - 80% en ligne via KKiaPay
  - 20% à la livraison
- **Validation WhatsApp** : Documents envoyés sur WhatsApp pour confirmation
- **Livraison à domicile**

### 🏠 Immobilier
- **Catalogue de biens** : Terrains, maisons, chambres
- **Filtres par catégorie** : Navigation facile
- **Galerie photos** : Plusieurs images par bien
- **Détails complets** : Surface, caractéristiques, prix
- **Modal de détails** : Affichage immersif avec navigation
- **Contact direct** : WhatsApp et téléphone

### 📞 Contact
- **Formulaire de contact** : Envoi direct sur WhatsApp
- **Informations complètes** : Téléphone, adresse, horaires
- **Carte Google Maps** : Localisation
- **Réseaux sociaux** : Facebook, Instagram, WhatsApp

## 🚀 Installation

### Prérequis
- Un compte Netlify (gratuit)
- Un compte KKiaPay pour les paiements

### Étapes d'installation

1. **Télécharger le projet**
   ```bash
   # Clonez ou téléchargez tous les fichiers
   ```

2. **Structure des fichiers**
   ```
   mintchi-services/
   ├── index.html
   ├── services.html
   ├── immobilier.html
   ├── contact.html
   ├── confirmation.html
   ├── netlify.toml
   ├── README.md
   └── assets/
       ├── css/
       │   ├── style.css
       │   ├── photocopie.css
       │   └── immobilier.css
       ├── js/
       │   ├── main.js
       │   ├── photocopie.js
       │   └── immobilier.js
       └── images/
           ├── logo/
           ├── services/
           └── immobilier/
               ├── terrains/
               ├── maisons/
               └── chambres/
   ```

3. **Ajouter vos images**
   - Placez vos images dans les dossiers appropriés
   - Nommez-les de manière cohérente (ex: terrain1.jpg, terrain1-2.jpg)

4. **Configurer KKiaPay**
   
   Dans `confirmation.html`, ligne ~200, remplacez :
   ```javascript
   key: "VOTRE_CLE_PUBLIQUE_KKIAPAY"
   ```
   
   Obtenez votre clé sur [https://kkiapay.me](https://kkiapay.me)

5. **Déployer sur Netlify**

   **Option 1 : Via GitHub**
   - Créez un repository GitHub
   - Poussez le code
   - Connectez Netlify à votre repo
   - Déployez automatiquement

   **Option 2 : Drag & Drop**
   - Allez sur [netlify.com](https://netlify.com)
   - Glissez-déposez le dossier complet
   - Le site sera déployé instantanément

## ⚙️ Configuration

### 1. Modifier les informations de contact

Dans **tous les fichiers HTML**, remplacez :
- Numéro WhatsApp : `+229 01 96 69 64 85`
- Recherchez `22901966985` et remplacez par votre numéro
- Recherchez `+229 01 96 69 64 85` et remplacez

### 2. Personnaliser les tarifs

Dans `assets/js/photocopie.js`, ligne 8 :
```javascript
const PRICE_PER_PAGE = 10; // Modifiez ici
```

### 3. Ajouter/Modifier des biens immobiliers

Dans `assets/js/immobilier.js`, modifiez l'objet `properties` :

```javascript
const properties = {
    1: {
        id: 1,
        category: 'terrain', // terrain, maison, chambre
        title: 'Votre titre',
        location: 'Votre localisation',
        price: 'Votre prix',
        // ... autres propriétés
    },
    // Ajoutez d'autres biens...
};
```

### 4. Modifier les couleurs

Dans `assets/css/style.css`, lignes 7-15 :
```css
:root {
    --primary-color: #2563eb;    /* Couleur principale */
    --secondary-color: #10b981;  /* Couleur secondaire */
    --dark-color: #1f2937;       /* Couleur sombre */
    /* ... */
}
```

### 5. Configurer KKiaPay en production

Dans `confirmation.html` :
```javascript
openKkiapayWidget({
    amount: orderData.payNow,
    key: "VOTRE_CLE_PUBLIQUE_KKIAPAY", // ⚠️ À REMPLACER
    sandbox: false, // ⚠️ Mettre à false en production
    // ...
});
```

## 📱 Fonctionnalités Techniques

### Responsive Design
- ✅ Mobile-first
- ✅ Tablette optimisé
- ✅ Desktop adapté
- ✅ Navigation hamburger

### Performance
- ✅ Lazy loading images
- ✅ CSS et JS minifiés
- ✅ Cache optimisé
- ✅ Compression activée

### Sécurité
- ✅ Headers de sécurité configurés
- ✅ Paiement sécurisé KKiaPay
- ✅ Validation des formulaires
- ✅ Protection XSS

### UX/UI
- ✅ Animations fluides
- ✅ Feedback utilisateur
- ✅ Messages de confirmation
- ✅ Navigation intuitive
- ✅ Accessibilité

## 🔧 Maintenance

### Ajouter une nouvelle propriété immobilière

1. Ajoutez les images dans `assets/images/immobilier/[categorie]/`
2. Modifiez `assets/js/immobilier.js`
3. Ajoutez l'objet de propriété avec le prochain ID

### Modifier les prix

- **Photocopie** : `assets/js/photocopie.js` → `PRICE_PER_PAGE`
- **Immobilier** : `assets/js/immobilier.js` → `properties[id].price`

### Mettre à jour le contenu

Tous les textes sont dans les fichiers HTML, faciles à modifier directement.

## 📊 Analytics (Optionnel)

Pour ajouter Google Analytics :

```html
<!-- Dans le <head> de chaque page HTML -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Résolution de problèmes

### Les images ne s'affichent pas
- Vérifiez que les chemins sont corrects
- Les images doivent être dans `assets/images/`
- Formats supportés : JPG, PNG, SVG

### Le paiement KKiaPay ne fonctionne pas
- Vérifiez votre clé API
- Assurez-vous que `sandbox: false` en production
- Vérifiez la console navigateur pour les erreurs

### WhatsApp ne s'ouvre pas
- Vérifiez le numéro (format : 22901966985)
- Pas de + dans l'URL WhatsApp
- Le navigateur doit autoriser les pop-ups

### Le formulaire ne s'envoie pas
- Vérifiez la connexion internet
- Regardez la console pour les erreurs
- Vérifiez que tous les champs requis sont remplis

## 📞 Support

Pour toute question ou assistance :
- 📱 WhatsApp : +229 01 96 69 64 85
- 📧 Via le formulaire de contact du site

## 📝 License

© 2026 MINTCHI J. SERVICES. Tous droits réservés.

---

## ✨ Checklist de déploiement

Avant de mettre en ligne :

- [ ] Remplacer la clé KKiaPay
- [ ] Vérifier tous les numéros de téléphone
- [ ] Ajouter vos vraies images
- [ ] Tester tous les formulaires
- [ ] Tester le paiement en sandbox
- [ ] Mettre `sandbox: false` pour KKiaPay
- [ ] Vérifier sur mobile
- [ ] Vérifier sur tablette
- [ ] Vérifier sur desktop
- [ ] Tester WhatsApp integration
- [ ] Optimiser les images (compression)
- [ ] Ajouter un favicon
- [ ] Configurer le domaine personnalisé (optionnel)

## 🎨 Personnalisation avancée

### Changer le logo
Remplacez le HTML du logo dans chaque fichier :
```html
<div class="logo">
    <img src="assets/images/logo/logo.png" alt="Logo">
    <span>MINTCHI J. SERVICES</span>
</div>
```

### Ajouter une nouvelle page
1. Créez `nouvelle-page.html`
2. Copiez la structure d'une page existante
3. Ajoutez le lien dans la navigation
4. Mettez à jour `netlify.toml` si besoin

### Modifier les animations
Dans `assets/css/style.css`, section `ANIMATIONS`

## 🚀 Performance Tips

1. **Compresser les images** : Utilisez TinyPNG ou Squoosh
2. **Format WebP** : Convertir les images en WebP pour de meilleures performances
3. **CDN** : Netlify fournit automatiquement un CDN global
4. **Lazy loading** : Déjà implémenté pour les images

---

**Développé avec ❤️ pour MINTCHI J. SERVICES**#   m i n t c h i - s e r v i c e s  
 