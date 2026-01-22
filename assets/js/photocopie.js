// ============================================
// MINTCHI J. SERVICES - PHOTOCOPIE MANAGEMENT
// ============================================

const PRICE_PER_PAGE = 10; // FCFA
const WHATSAPP_NUMBER = '22901966985';

// State management
let uploadedFiles = [];
let currentStep = 1;
let orderData = {
    customerName: '',
    customerPhone: '',
    files: [],
    documents: [],
    copies: 1,
    deliveryAddress: '',
    notes: '',
    totalPages: 0,
    totalAmount: 0,
    payNow: 0,
    payLater: 0
};

// ============================================
// FILE UPLOAD HANDLING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileUpload');
    const fileList = document.getElementById('fileList');

    // Click to upload
    uploadArea.addEventListener('click', () => fileInput.click());

    // File input change
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    // Form submit
    document.getElementById('orderForm').addEventListener('submit', handleFormSubmit);

    // Copies input change
    document.getElementById('copies').addEventListener('input', updateOrderSummary);
});

function handleFiles(files) {
    const fileList = document.getElementById('fileList');
    
    Array.from(files).forEach(file => {
        // Validate file
        if (!validateFile(file)) return;

        // Add to uploaded files
        uploadedFiles.push(file);

        // Display file
        const fileItem = createFileItem(file);
        fileList.appendChild(fileItem);
    });

    // Show next button if files uploaded
    if (uploadedFiles.length > 0) {
        document.querySelector('#step1 .btn-next').disabled = false;
    }
}

function validateFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10 MB
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 
                         'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (!allowedTypes.includes(file.type)) {
        alert('Type de fichier non autorisé. Formats acceptés: PDF, DOC, DOCX, JPG, PNG');
        return false;
    }

    if (file.size > maxSize) {
        alert(`Le fichier ${file.name} est trop volumineux (max 10 Mo)`);
        return false;
    }

    return true;
}

function createFileItem(file) {
    const div = document.createElement('div');
    div.className = 'file-item';
    div.innerHTML = `
        <div class="file-info">
            <div class="file-icon">
                <i class="fas fa-file-${getFileIcon(file.type)}"></i>
            </div>
            <div class="file-details">
                <div class="file-name">${file.name}</div>
                <div class="file-size">${formatFileSize(file.size)}</div>
            </div>
        </div>
        <button type="button" class="file-remove" onclick="removeFile('${file.name}')">
            <i class="fas fa-times"></i>
        </button>
    `;
    return div;
}

function getFileIcon(type) {
    if (type.includes('pdf')) return 'pdf';
    if (type.includes('word')) return 'word';
    if (type.includes('image')) return 'image';
    return 'alt';
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function removeFile(fileName) {
    uploadedFiles = uploadedFiles.filter(f => f.name !== fileName);
    
    // Remove from display
    const fileItems = document.querySelectorAll('.file-item');
    fileItems.forEach(item => {
        if (item.querySelector('.file-name').textContent === fileName) {
            item.remove();
        }
    });

    // Disable next button if no files
    if (uploadedFiles.length === 0) {
        document.querySelector('#step1 .btn-next').disabled = true;
    }
}

// ============================================
// STEP NAVIGATION
// ============================================

function nextStep(step) {
    // Validate current step
    if (!validateStep(currentStep)) return;

    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
    document.querySelector(`[data-step="${currentStep}"]`).classList.add('completed');

    // Show next step
    currentStep = step;
    document.getElementById(`step${step}`).classList.add('active');
    document.querySelector(`[data-step="${step}"]`).classList.add('active');

    // Prepare step content
    if (step === 2) {
        prepareStep2();
    } else if (step === 3) {
        prepareStep3();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep(step) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');

    currentStep = step;
    document.getElementById(`step${step}`).classList.add('active');
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    document.querySelector(`[data-step="${step + 1}"]`).classList.remove('completed');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateStep(step) {
    if (step === 1) {
        const name = document.getElementById('customerName').value.trim();
        const phone = document.getElementById('customerPhone').value.trim();

        if (!name) {
            alert('Veuillez entrer votre nom complet');
            return false;
        }

        if (!phone) {
            alert('Veuillez entrer votre numéro de téléphone');
            return false;
        }

        if (uploadedFiles.length === 0) {
            alert('Veuillez télécharger au moins un document');
            return false;
        }

        orderData.customerName = name;
        orderData.customerPhone = phone;
        orderData.files = uploadedFiles;

        return true;
    }

    if (step === 2) {
        const address = document.getElementById('deliveryAddress').value.trim();
        
        if (!address) {
            alert('Veuillez entrer votre adresse de livraison');
            return false;
        }

        // Collect document configurations
        collectDocumentConfigs();

        if (orderData.totalPages === 0) {
            alert('Veuillez configurer au moins un document');
            return false;
        }

        orderData.deliveryAddress = address;
        orderData.notes = document.getElementById('notes').value.trim();
        orderData.copies = parseInt(document.getElementById('copies').value);

        calculateTotal();
        return true;
    }

    if (step === 3) {
        const acceptTerms = document.getElementById('acceptTerms').checked;
        
        if (!acceptTerms) {
            alert('Veuillez accepter les conditions générales');
            return false;
        }

        return true;
    }

    return true;
}

// ============================================
// STEP 2: DOCUMENT CONFIGURATION
// ============================================

function prepareStep2() {
    const container = document.getElementById('documentsConfig');
    container.innerHTML = '';

    uploadedFiles.forEach((file, index) => {
        const configDiv = document.createElement('div');
        configDiv.className = 'document-config';
        configDiv.innerHTML = `
            <h4><i class="fas fa-file"></i> ${file.name}</h4>
            <div class="page-range-options">
                <label>
                    <input type="radio" name="range_${index}" value="all" checked onchange="togglePageRange(${index})">
                    Tout le document
                </label>
                <label>
                    <input type="radio" name="range_${index}" value="custom" onchange="togglePageRange(${index})">
                    Pages spécifiques
                </label>
            </div>
            <div id="pageRange_${index}" style="display: none;">
                <div class="page-input-group">
                    <div class="form-group">
                        <label>De la page</label>
                        <input type="number" id="pageFrom_${index}" min="1" value="1" class="page-input">
                    </div>
                    <div class="form-group">
                        <label>À la page</label>
                        <input type="number" id="pageTo_${index}" min="1" value="1" class="page-input">
                    </div>
                </div>
            </div>
        `;
        container.appendChild(configDiv);
    });
}

function togglePageRange(index) {
    const isCustom = document.querySelector(`input[name="range_${index}"]:checked`).value === 'custom';
    const rangeDiv = document.getElementById(`pageRange_${index}`);
    rangeDiv.style.display = isCustom ? 'block' : 'none';
}

function collectDocumentConfigs() {
    orderData.documents = [];
    let totalPages = 0;

    uploadedFiles.forEach((file, index) => {
        const rangeType = document.querySelector(`input[name="range_${index}"]:checked`).value;
        let pages = 0;

        if (rangeType === 'all') {
            // Estimate pages (for PDF we'd need actual parsing, here we use a default)
            pages = 10; // Default estimate
        } else {
            const from = parseInt(document.getElementById(`pageFrom_${index}`).value) || 1;
            const to = parseInt(document.getElementById(`pageTo_${index}`).value) || 1;
            pages = Math.max(0, to - from + 1);
        }

        orderData.documents.push({
            name: file.name,
            rangeType: rangeType,
            pageFrom: rangeType === 'custom' ? document.getElementById(`pageFrom_${index}`).value : null,
            pageTo: rangeType === 'custom' ? document.getElementById(`pageTo_${index}`).value : null,
            pages: pages
        });

        totalPages += pages;
    });

    orderData.totalPages = totalPages;
}

// ============================================
// STEP 3: CONFIRMATION
// ============================================

function prepareStep3() {
    const summaryDiv = document.getElementById('finalSummary');
    
    let html = `
        <div class="confirmation-item">
            <span>Nom:</span>
            <strong>${orderData.customerName}</strong>
        </div>
        <div class="confirmation-item">
            <span>Téléphone:</span>
            <strong>${orderData.customerPhone}</strong>
        </div>
        <div class="confirmation-item">
            <span>Nombre de documents:</span>
            <strong>${orderData.files.length}</strong>
        </div>
    `;

    orderData.documents.forEach(doc => {
        html += `
            <div class="confirmation-item">
                <span>${doc.name}:</span>
                <strong>${doc.pages} pages</strong>
            </div>
        `;
    });

    html += `
        <div class="confirmation-item">
            <span>Exemplaires:</span>
            <strong>${orderData.copies}</strong>
        </div>
        <div class="confirmation-item">
            <span>Total de pages à imprimer:</span>
            <strong>${orderData.totalPages * orderData.copies}</strong>
        </div>
        <div class="confirmation-item">
            <span>Adresse de livraison:</span>
            <strong>${orderData.deliveryAddress}</strong>
        </div>
        <div class="confirmation-item" style="border-top: 2px solid #e5e7eb; margin-top: 15px; padding-top: 15px;">
            <span>Montant total:</span>
            <strong style="font-size: 1.3rem; color: var(--primary-color);">${orderData.totalAmount} FCFA</strong>
        </div>
        <div class="confirmation-item">
            <span>À payer maintenant (80%):</span>
            <strong style="color: var(--secondary-color);">${orderData.payNow} FCFA</strong>
        </div>
        <div class="confirmation-item">
            <span>À payer à la livraison (20%):</span>
            <strong>${orderData.payLater} FCFA</strong>
        </div>
    `;

    summaryDiv.innerHTML = html;
}

// ============================================
// CALCULATIONS
// ============================================

function calculateTotal() {
    const totalPages = orderData.totalPages * orderData.copies;
    const total = totalPages * PRICE_PER_PAGE;
    const payNow = Math.round(total * 0.8);
    const payLater = total - payNow;

    orderData.totalAmount = total;
    orderData.payNow = payNow;
    orderData.payLater = payLater;

    updateOrderSummary();
}

function updateOrderSummary() {
    const summary = document.getElementById('orderSummary');
    const copies = parseInt(document.getElementById('copies').value) || 1;

    if (orderData.totalPages > 0) {
        summary.style.display = 'block';
        
        document.getElementById('summaryPages').textContent = orderData.totalPages;
        document.getElementById('summaryCopies').textContent = copies;
        document.getElementById('summaryTotalPages').textContent = orderData.totalPages * copies;
        
        const total = orderData.totalPages * copies * PRICE_PER_PAGE;
        const payNow = Math.round(total * 0.8);
        const payLater = total - payNow;
        
        document.getElementById('summaryTotal').textContent = total + ' FCFA';
        document.getElementById('summaryPayNow').textContent = payNow + ' FCFA';
        document.getElementById('summaryPayLater').textContent = payLater + ' FCFA';
    }
}

// ============================================
// FORM SUBMISSION
// ============================================

async function handleFormSubmit(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

    try {
        // Send to WhatsApp first
        await sendToWhatsApp();

        // Redirect to confirmation page with payment info
        localStorage.setItem('orderData', JSON.stringify(orderData));
        window.location.href = 'confirmation.html';

    } catch (error) {
        alert('Erreur lors de l\'envoi de la commande. Veuillez réessayer.');
        console.error(error);
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer la commande';
    }
}

async function sendToWhatsApp() {
    // Create message
    let message = `🔔 *NOUVELLE COMMANDE PHOTOCOPIE*\n\n`;
    message += `👤 *Client:* ${orderData.customerName}\n`;
    message += `📞 *Téléphone:* ${orderData.customerPhone}\n`;
    message += `📍 *Adresse:* ${orderData.deliveryAddress}\n\n`;
    
    message += `📄 *Documents:*\n`;
    orderData.documents.forEach(doc => {
        message += `  • ${doc.name} - ${doc.pages} pages\n`;
    });
    
    message += `\n📋 *Détails:*\n`;
    message += `  • Exemplaires: ${orderData.copies}\n`;
    message += `  • Total pages: ${orderData.totalPages * orderData.copies}\n`;
    message += `  • Montant total: ${orderData.totalAmount} FCFA\n`;
    message += `  • À payer maintenant (80%): ${orderData.payNow} FCFA\n`;
    message += `  • À payer à la livraison (20%): ${orderData.payLater} FCFA\n`;
    
    if (orderData.notes) {
        message += `\n📝 *Notes:* ${orderData.notes}\n`;
    }

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Wait a bit for WhatsApp to open
    await new Promise(resolve => setTimeout(resolve, 2000));
}