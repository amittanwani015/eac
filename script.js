// ===== Elite Accountants & Consultants =====

document.getElementById('year').textContent = new Date().getFullYear();

// ---- Services data ----
const ICONS = {
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  building: '<path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18"/><path d="M2 22h20"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/>',
  cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.3-2A5 5 0 0 0 6.5 19Z"/>',
  receipt: '<path d="M4 2h16v20l-3-2-3 2-3-2-3 2-3-2-1 1z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  home: '<path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  bar: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>'
};

const SERVICES = [
  { icon: 'fileText', title: 'Self Assessment & Personal Tax Returns', desc: 'Accurate, on-time Self Assessment filing for individuals, sole traders and directors.', price: '£150' },
  { icon: 'briefcase', title: 'Sole Trader Accounts', desc: 'Year-end accounts prepared and filed for self-employed businesses.', price: '£200' },
  { icon: 'building', title: 'Limited Company Accounts & Corporation Tax', desc: 'Statutory accounts, Corporation Tax returns and Companies House filing.', price: '£400' },
  { icon: 'cloud', title: 'Bookkeeping & Accounting Software', desc: 'Ongoing bookkeeping using Xero or QuickBooks, kept accurate and current.', price: '£75/mo' },
  { icon: 'receipt', title: 'VAT Registration & VAT Returns', desc: 'VAT registration and quarterly returns, handled and filed correctly.', price: '£75' },
  { icon: 'users', title: 'Payroll, PAYE & Auto-Enrolment', desc: 'Monthly payroll processing, PAYE submissions and pension auto-enrolment.', price: '£20/mo' },
  { icon: 'shield', title: 'CIS Registration & Monthly Returns', desc: 'CIS registration for contractors and subcontractors, plus monthly returns.', price: '£50' },
  { icon: 'home', title: 'Landlord & Property Accounts', desc: 'Rental income accounts and tax returns for individual and portfolio landlords.', price: '£200' },
  { icon: 'chart', title: 'Tax Planning & Advisory', desc: 'Proactive advice to structure your affairs tax-efficiently and legally.', price: '£100' },
  { icon: 'bar', title: 'Management Accounts, Budgeting & Forecasting', desc: 'Regular management accounts and forecasts to help you steer the business.', price: '£150' },
  { icon: 'cog', title: 'Company Formation & Companies House Services', desc: 'New company set-up and ongoing Companies House compliance filings.', price: '£75' },
  { icon: 'fileText', title: 'Share/Director Changes & Company Secretarial', desc: 'Share allotments, director changes and other secretarial filings.', price: '£75' },
  { icon: 'rocket', title: 'Business Start-up & Accounting Setup', desc: 'End-to-end setup for new businesses — structure, software and processes.', price: '£75' },
  { icon: 'help', title: 'HMRC Enquiries & Tax Support', desc: 'Expert representation and support if HMRC opens an enquiry into your affairs.', price: '£100' },
  { icon: 'calc', title: 'Financial Reporting & Business Consultancy', desc: 'Clear financial reporting and consultancy to support key business decisions.', price: '£100' }
];

const grid = document.getElementById('servicesGrid');
if (grid) {
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card">
      <div class="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.icon] || ICONS.doc}</svg>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <span class="price-tag">from <span>${s.price}</span></span>
    </div>
  `).join('');
}

// ---- Mobile menu ----
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));
}

// ---- FAQ accordion ----
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-question');
  const a = item.querySelector('.faq-answer');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(open => {
      open.classList.remove('open');
      open.querySelector('.faq-answer').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// ---- Back to top ----
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---- Google Analytics event tracking ----
// Fires custom events for the actions that actually matter (CTA clicks, form
// submissions) rather than relying on pageviews alone. Safe no-op if GA is
// blocked or not yet loaded.
function trackEvent(name, params) {
  if (typeof gtag === 'function') gtag('event', name, params || {});
}

document.querySelectorAll('a.btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('cta_click', { cta_label: btn.textContent.trim(), cta_location: btn.closest('section')?.id || 'header' });
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', () => {
    const service = document.getElementById('service');
    trackEvent('generate_lead', { service_interest: service ? service.value : undefined });
  });
}

document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', () => trackEvent('phone_click', { phone_number: link.getAttribute('href').replace('tel:', '') }));
});

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', () => trackEvent('email_click', {}));
});
