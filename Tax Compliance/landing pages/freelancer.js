// Get the tax cards container and sections
const taxCardsContainer = document.getElementById('tax-cards-container');
const taxCardsSection = document.getElementById('tax-cards-section');
const uploadSection = document.getElementById('upload-section');
const documentMessage = document.getElementById('document-message');
const backBtn = document.getElementById('back-btn');  // back button on the upload page

// Freelancer Tax Data
const freelancerTaxData = [
    { name: "Income Tax", description: "Tax on earnings from freelancing services provided.", documents: [
        "PAN", "Income Tax Returns (ITR)", "Invoices", "Bank Statements", "TDS Certificates (Form 16/16A)"
    ]},
    { name: "GST (Goods and Services Tax)", description: "Tax on services provided as a freelancer, applicable if turnover exceeds a certain threshold.", documents: [
        "PAN", "GST Returns", "Invoices", "Payment Receipts"
    ]},
    { name: "Professional Tax", description: "Tax applicable to freelancers based on the profession or trade.", documents: [
        "PAN", "Professional Tax Registration Certificate", "Professional Tax Returns"
    ]},
    { name: "TDS (Tax Deducted at Source)", description: "Tax deducted by clients on payments made to freelancers.", documents: [
        "PAN", "TDS Certificates", "Invoices"
    ]},
    { name: "Self-Employment Tax", description: "Tax applicable on earnings for self-employed individuals, including freelancers.", documents: [
        "PAN", "Income Statement", "Bank Statements", "Profit & Loss Statement"
    ]}
];

// Display tax cards for freelancer
window.addEventListener('load', () => {
    freelancerTaxData.forEach(tax => {
        const taxCard = document.createElement('div');
        taxCard.classList.add('tax-card');
        taxCard.innerHTML = `<h4>${tax.name}</h4><p>${tax.description}</p>`;
        
        taxCard.addEventListener('click', () => displayUploadSection(tax));
        taxCardsContainer.appendChild(taxCard);
    });
});

// Function to display upload section with documents for each tax
function displayUploadSection(tax) {
    taxCardsSection.style.display = 'none';
    uploadSection.style.display = 'block';
    
    documentMessage.textContent = `Please upload the required documents for ${tax.name}.`;

    // Create a list of required documents
    const documentList = document.createElement('ul');
    tax.documents.forEach(doc => {
        const listItem = document.createElement('li');
        listItem.textContent = doc;
        documentList.appendChild(listItem);
    });

    // Remove previous document list and add the new one
    const previousList = uploadSection.querySelector('ul');
    if (previousList) {
        previousList.remove();
    }
    uploadSection.appendChild(documentList);
}

// Back button to go to tax cards section from the upload page
backBtn.addEventListener('click', () => {
    uploadSection.style.display = 'none';
    taxCardsSection.style.display = 'block';
});
