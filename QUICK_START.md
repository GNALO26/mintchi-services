# 🚀 Guide de Démarrage Rapide - MINTCHI J. SERVICES

## ⏱️ En 5 minutes chrono !

### 1️⃣ Téléchargez tous les fichiers (2 min)

Assurez-vous d'avoir :
```
✅ index.html
✅ services.html
✅ immobilier.html
✅ contact.html
✅ confirmation.html
✅ netlify.toml
✅ Dossier assets/ (avec css/, js/, images/)
```

### 2️⃣ Configuration MINIMALE obligatoire (1 min)

#### A. Remplacez votre clé KKiaPay

**Fichier : `confirmation.html`** (ligne ~200)

```javascript
// AVANT
key: "VOTRE_CLE_PUBLIQUE_KKIAPAY",

// APRÈS
key: "votre_vraie_cle_kkiapay_ici",
```

> 🔑 Obtenez votre clé sur : https://kkiapay.me

#### B. Vérifiez le numéro WhatsApp

**Vérifiez dans TOUS les fichiers HTML :**
- Le numéro actuel : `+229 01 96 69 64 85`
- Si c'est votre numéro, rien à changer !
- Sinon, faites Ctrl+F et remplacez partout

**Fichiers JavaScript :**
- `assets/js/photocopie.js` (ligne 8)
- `assets/js/main.js` (si numéro différent)

### 3️⃣ Déployez sur Netlify (2 min)

#### Option Simple : Drag & Drop

1. **Allez sur** : https://app.netlify.com/drop
2. **Glissez-déposez** le dossier complet `mintchi-services/`
3. **C'est en ligne !** 🎉

Netlify vous donne une URL comme : `https://random-name-123.netlify.app`

#### Option Pro : Via GitHub

```bash
# 1. Initialisez Git
git init
git add .
git commit -m "Initial commit"

# 2. Créez un repo sur GitHub

# 3. Poussez le code
git remote add origin https://github.com/votre-username/mintchi-services.git
git push -u origin main

# 4. Sur Netlify.com
# - New site from Git
# - Choisir GitHub
# - Sélectionner votre repo
# - Deploy !
```

---

## ✅ C'est Prêt !

Votre site est maintenant en ligne avec :
- ✅ Commande de photocopies
- ✅ Paiement KKiaPay
- ✅ Catalogue immobilier
- ✅ Formulaire de contact
- ✅ Integration WhatsApp

---

## 🎨 PERSONNALISATION (Optionnel)

### Ajouter votre logo

**Dans chaque fichier HTML, remplacez :**

```html
<!-- AVANT -->
<div class="logo">
    <i class="fas fa-print"></i>
    <span>MINTCHI J. SERVICES</span>
</div>

<!-- APRÈS -->
<div class="logo">
    <img src="assets/images/logo/logo.png" alt="Logo" style="height: 50px;">
    <span>MINTCHI J. SERVICES</span>
</div>
```

Placez votre logo dans : `assets/images/logo/logo.png`

### Changer les couleurs

**Fichier : `assets/css/style.css`** (lignes 7-15)

```css
:root {
    --primary-color: #2563eb;    /* Votre couleur principale */
    --secondary-color: #10b981;  /* Votre couleur secondaire */
    /* ... */
}
```

### Ajouter vos images immobilières

1. **Placez vos images dans :**
   ```
   assets/images/immobilier/
   ├── terrains/
   │   ├── terrain1.jpg
   │   ├── terrain1-2.jpg
   │   └── terrain1-3.jpg
   ├── maisons/
   │   ├── maison1.jpg
   │   └── maison1-2.jpg
   └── chambres/
       ├── chambre1.jpg
       └── chambre1-2.jpg
   ```

2. **Modifiez les données :**
   
   **Fichier : `assets/js/immobilier.js`**
   
   Éditez l'objet `properties` avec vos vraies données.

### Modifier le prix des photocopies

**Fichier : `assets/js/photocopie.js`** (ligne 8)

```javascript
const PRICE_PER_PAGE = 10; // Changez ici (en FCFA)
```

---

## 🔥 CONFIGURATION PRODUCTION

### Avant de lancer officiellement :

1. **KKiaPay en mode PRODUCTION**
   
   **Fichier : `confirmation.html`**
   ```javascript
   sandbox: false,  // ⚠️ IMPORTANT : Changez true → false
   ```

2. **Testez TOUT**
   - [ ] Formulaire de photocopie
   - [ ] Upload de fichiers
   - [ ] Calcul des prix
   - [ ] Paiement KKiaPay (en sandbox d'abord)
   - [ ] Envoi WhatsApp
   - [ ] Page immobilier
   - [ ] Filtres immobilier
   - [ ] Modal de détails
   - [ ] Formulaire de contact
   - [ ] Navigation mobile

3. **Optimisez vos images**
   
   Utilisez : https://tinypng.com ou https://squoosh.app
   
   Réduisez la taille sans perdre en qualité !

4. **Domaine personnalisé** (optionnel)
   
   Dans Netlify :
   - Domain settings
   - Add custom domain
   - Suivez les instructions

---

## 📱 Test Mobile

Testez sur votre téléphone :

1. **URL temporaire Netlify** : `https://votre-site.netlify.app`
2. **Testez :**
   - Navigation
   - Upload de fichiers
   - Paiement
   - WhatsApp
   - Toutes les pages

---

## 🆘 Problèmes Courants

### ❌ Le paiement ne fonctionne pas
- Vérifiez votre clé KKiaPay
- Vérifiez `sandbox: true` (test) ou `false` (prod)
- Regardez la console (F12) pour les erreurs

### ❌ WhatsApp ne s'ouvre pas
- Le numéro doit être sans espaces : `22901966985`
- Autorisez les pop-ups dans votre navigateur
- Testez sur mobile aussi

### ❌ Les images ne s'affichent pas
- Vérifiez les chemins : `assets/images/...`
- Vérifiez que les fichiers existent
- Regardez la console (F12)

---

## 📞 Besoin d'Aide ?

- 📖 Lisez le **README.md** complet
- 💬 WhatsApp : +229 01 96 69 64 85
- 🌐 Support Netlify : https://answers.netlify.com
- 💳 Support KKiaPay : https://kkiapay.me

---

## 🎯 Checklist Finale

Avant d'annoncer votre site :

- [ ] Clé KKiaPay configurée
- [ ] `sandbox: false` activé
- [ ] Toutes les images ajoutées
- [ ] Numéros de téléphone vérifiés
- [ ] Logo personnalisé (optionnel)
- [ ] Couleurs personnalisées (optionnel)
- [ ] Biens immobiliers ajoutés
- [ ] Testé sur mobile
- [ ] Testé sur desktop
- [ ] Paiement test réussi
- [ ] WhatsApp fonctionne
- [ ] Domaine configuré (optionnel)

---

## 🎊 Félicitations !

Votre site professionnel est maintenant en ligne ! 🚀

Partagez-le :
- Sur vos réseaux sociaux
- Par WhatsApp
- Sur vos cartes de visite
- Dans vos signatures email

**URL à partager :** `https://votre-site.netlify.app`

---

**Bon business avec MINTCHI J. SERVICES ! 💼**