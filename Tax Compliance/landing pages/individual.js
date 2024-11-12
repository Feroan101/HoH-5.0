// Get elements
const taxCardsSection = document.getElementById('tax-cards-section');
const taxCardsContainer = document.getElementById('tax-cards-container');
const uploadSection = document.getElementById('upload-section');
const backBtn = document.getElementById('back-btn');
const documentMessage = document.getElementById('document-message');

// Tax data for individual
const individualTaxData = [
    { name: "Income Tax", description: "A tax on an individual’s income, including salary, wages, etc.", documents: [
        "PAN", "Income Tax Returns (ITR)", "Salary Slip / Form 16", "Bank Statements", "TDS Certificates (Form 16)"
    ]},
    { name: "Capital Gains Tax", description: "A tax on the profit from the sale of assets or investments.", documents: [
        "PAN", "Capital Gains Statement", "Sale Agreement", "Bank Statements"
    ]},
    { name: "GST (Goods and Services Tax)", description: "A consumption tax on goods and services, applicable in some cases.", documents: [
        "PAN", "GST Returns", "Invoices", "Payment Receipts"
    ]},
    { name: "Tax on Salary/Employment", description: "Taxes deducted from salary at source.", documents: [
        "PAN", "Salary Slip / Form 16", "TDS Certificates"
    ]},
    { name: "Property Tax", description: "A tax levied on property owned by individuals.", documents: [
        "PAN", "Property Tax Receipt", "Ownership Documents"
    ]},
    { name: "Wealth Tax", description: "A tax on the value of assets owned by an individual.", documents: [
        "PAN", "Wealth Tax Returns", "Asset Valuation Documents"
    ]}
];

// Show tax cards when individual category is clicked
function displayTaxCardsForIndividual() {
    taxCardsSection.style.display = 'block';
    taxCardsContainer.innerHTML = '';  // Clear any previous tax cards

    individualTaxData.forEach(tax => {
        const taxCard = document.createElement('div');
        taxCard.classList.add('tax-card');
        taxCard.innerHTML = `<h4>${tax.name}</h4><p>${tax.description}</p>`;

        // Event listener for tax card clicks
        taxCard.addEventListener('click', () => displayUploadSection(tax));

        taxCardsContainer.appendChild(taxCard);
    });
}

// Function to display the upload section with required documents for each tax
function displayUploadSection(tax) {
    taxCardsSection.style.display = 'none';
    uploadSection.style.display = 'block';
    
    // Set the message for document upload
    documentMessage.textContent = `Please upload the required documents for ${tax.name}.`;

    // Create a list of required documents for the selected tax
    const documentList = document.createElement('ul');
    tax.documents.forEach(doc => {
        const listItem = document.createElement('li');
        listItem.textContent = doc;
        documentList.appendChild(listItem);
    });

    // Clear the previous document list and add the new one
    const previousList = uploadSection.querySelector('ul');
    if (previousList) {
        previousList.remove();
    }
    
    uploadSection.appendChild(documentList);
}



// Initialize tax cards
displayTaxCardsForIndividual();
