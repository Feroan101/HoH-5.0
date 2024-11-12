// Get elements
const taxCardsSection = document.getElementById('tax-cards-section');
const taxCardsContainer = document.getElementById('tax-cards-container');
const uploadSection = document.getElementById('upload-section');
const documentMessage = document.getElementById('document-message');

// Tax data for business
const businessTaxData = [
    { name: "Corporate Tax", description: "A tax on the income or capital of corporations.", documents: [
        "PAN", "GST Returns", "Income Tax Returns (ITR)", "Balance Sheet", "Profit & Loss Statement", "Audit Report"
    ]},
    { name: "GST (Goods and Services Tax)", description: "A consumption tax on goods and services, applicable to businesses.", documents: [
        "PAN", "GST Returns", "Invoices", "Payment Receipts"
    ]},
    { name: "TDS (Tax Deducted at Source)", description: "Tax deducted at source on payments made by the business.", documents: [
        "PAN", "TDS Returns", "Payment Receipts"
    ]},
    { name: "Income Tax", description: "Tax levied on business income.", documents: [
        "PAN", "Income Tax Returns", "Financial Statements", "Balance Sheet"
    ]},
    { name: "Payroll Taxes", description: "Taxes related to the employees of the business, including social security, etc.", documents: [
        "PAN", "Employee Pay Slips", "Employee Tax Certificates"
    ]},
    { name: "Excise Duty", description: "A tax on the production or sale of goods within the business.", documents: [
        "PAN", "Excise Returns", "Invoices", "Payment Receipts"
    ]}
];

// Show tax cards when business category is clicked
function displayTaxCardsForBusiness() {
    taxCardsSection.style.display = 'block';
    taxCardsContainer.innerHTML = '';  // Clear any previous tax cards

    businessTaxData.forEach(tax => {
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

// Back button functionality for upload section


// Initialize tax cards
displayTaxCardsForBusiness();
