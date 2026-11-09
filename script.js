(function () {
    'use strict';

    const WHATSAPP_BASE = 'https://wa.me/zahidoverflow';

    function formatUSD(amount) {
        return '$' + Number(amount).toLocaleString('en-US');
    }

    // 1. Update all package cards and WhatsApp links based on selected add-ons (USD only)
    function updateAllPricing() {
        // Update Add-on price labels
        document.querySelectorAll('.addon-price[data-usd]').forEach(el => {
            const usd = Number(el.getAttribute('data-usd'));
            const suffix = el.getAttribute('data-suffix') || '';
            el.textContent = `+${formatUSD(usd)}${suffix}`;
        });

        // Update each Service Block (Packages + Checked Add-ons + WhatsApp links)
        document.querySelectorAll('.service-category-block').forEach(block => {
            const serviceTitle = block.getAttribute('data-service-name') || 'Digital Service';

            // Calculate checked add-ons in this service block
            let addonUsdTotal = 0;
            const selectedAddons = [];

            block.querySelectorAll('.addon-checkbox:checked').forEach(cb => {
                const usd = Number(cb.getAttribute('data-usd') || 0);
                const name = cb.getAttribute('data-addon-name') || 'Add-on';
                addonUsdTotal += usd;
                selectedAddons.push(name);
            });

            // Update each package tier card inside this service block
            block.querySelectorAll('.package-card').forEach(card => {
                const tierName = card.getAttribute('data-tier') || 'Standard';
                const pkgTitle = card.getAttribute('data-package-title') || tierName;
                const baseUsd = Number(card.getAttribute('data-usd') || 0);
                const delivery = card.getAttribute('data-delivery') || '';

                const totalUsd = baseUsd + addonUsdTotal;

                const primaryEl = card.querySelector('.price-primary');
                const secondaryEl = card.querySelector('.price-secondary');

                if (primaryEl) {
                    primaryEl.textContent = `${formatUSD(totalUsd)}`;
                }
                if (secondaryEl) {
                    secondaryEl.textContent = selectedAddons.length > 0
                        ? `USD (+${selectedAddons.length} Add-on${selectedAddons.length > 1 ? 's' : ''})`
                        : 'USD';
                }

                // Update WhatsApp CTA button in this card
                const ctaBtn = card.querySelector('.package-order-btn');
                if (ctaBtn) {
                    const addonText = selectedAddons.length > 0
                        ? `\n• Add-ons: ${selectedAddons.join(', ')}`
                        : '';
                    const msg = `Hi @techoverflowbd! I want to order/inquire about:\n• Service: ${serviceTitle}\n• Package: ${tierName} (${pkgTitle})\n• Estimated Price: ${formatUSD(totalUsd)} USD${delivery ? '\n• Delivery: ' + delivery : ''}${addonText}\n\nPlease share the next steps!`;
                    ctaBtn.setAttribute('href', `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`);
                }
            });
        });
    }

    // 2. Add-on Checkboxes Listeners
    document.querySelectorAll('.addon-checkbox').forEach(cb => {
        cb.addEventListener('change', updateAllPricing);
    });

    // 3. Service Category Filter Pills
    document.querySelectorAll('[data-service-filter]').forEach(pill => {
        pill.addEventListener('click', () => {
            const target = pill.getAttribute('data-service-filter');
            document.querySelectorAll('[data-service-filter]').forEach(p => {
                p.classList.toggle('active', p === pill);
            });

            document.querySelectorAll('.service-category-block').forEach(block => {
                const cat = block.getAttribute('data-service-category');
                if (target === 'all' || cat === target) {
                    block.removeAttribute('hidden');
                } else {
                    block.setAttribute('hidden', 'true');
                }
            });
        });
    });

    // 4. Mobile Package Tier Tabs (Basic / Standard / Premium switcher on smaller screens)
    document.querySelectorAll('.service-category-block').forEach(block => {
        const tabs = block.querySelectorAll('.mobile-tier-tab');
        const cards = block.querySelectorAll('.package-card');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const selectedTier = tab.getAttribute('data-tier-select');
                tabs.forEach(t => t.classList.toggle('active', t === tab));
                cards.forEach(c => {
                    const cardTier = c.getAttribute('data-tier');
                    if (cardTier === selectedTier) {
                        c.removeAttribute('data-tier-hidden');
                    } else {
                        c.setAttribute('data-tier-hidden', 'true');
                    }
                });
            });
        });
    });

    // 5. Product Catalog Search & Category Filter
    const productSearchInput = document.getElementById('product-search');
    const productFilterPills = document.querySelectorAll('[data-product-filter]');
    let activeProductCategory = 'all';

    function filterProducts() {
        const query = (productSearchInput ? productSearchInput.value : '').trim().toLowerCase();
        let visibleCount = 0;

        document.querySelectorAll('.product-grid .product-card').forEach(card => {
            const category = (card.querySelector('.product-category')?.textContent || '').trim().toLowerCase();
            const title = (card.querySelector('h3')?.textContent || '').trim().toLowerCase();
            const desc = (card.querySelector('p')?.textContent || '').trim().toLowerCase();

            const matchesCategory = activeProductCategory === 'all' || category === activeProductCategory.toLowerCase();
            const matchesQuery = !query || title.includes(query) || desc.includes(query) || category.includes(query);

            if (matchesCategory && matchesQuery) {
                card.removeAttribute('hidden');
                visibleCount++;
            } else {
                card.setAttribute('hidden', 'true');
            }
        });

        const countEl = document.getElementById('product-count');
        if (countEl) {
            countEl.textContent = `${visibleCount} item${visibleCount === 1 ? '' : 's'}`;
        }
    }

    if (productSearchInput) {
        productSearchInput.addEventListener('input', filterProducts);
    }

    productFilterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            activeProductCategory = pill.getAttribute('data-product-filter') || 'all';
            productFilterPills.forEach(p => p.classList.toggle('active', p === pill));
            filterProducts();
        });
    });

    // 6. FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            if (!item) return;
            const isOpen = item.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    });

    // 7. Mobile Navigation Drawer Toggle & Active Bottom Nav State
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('nav-open');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            menuToggle.textContent = isOpen ? '✕' : '☰';
        });

        siteNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (siteNav.classList.contains('nav-open')) {
                    siteNav.classList.remove('nav-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.textContent = '☰';
                }
            });
        });
    }

    // Highlight matching item in .mobile-nav based on current pathname
    const currentPath = (window.location.pathname || '/').replace(/\/+$/, '') || '/';
    document.querySelectorAll('.mobile-nav__item:not(.mobile-nav__item--accent)').forEach(item => {
        const href = (item.getAttribute('href') || '').replace(/\/+$/, '') || '/';
        if (href === currentPath || (currentPath.startsWith(href) && href !== '/')) {
            item.classList.add('active');
        }
    });

    // 8. Request / Inquiry Form Submission -> WhatsApp (@techoverflowbd / wa.me/zahidoverflow)
    document.querySelectorAll('.request-form').forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const name = form.querySelector('[name="name"]')?.value?.trim() || 'Client';
            const service = form.querySelector('[name="service"]')?.value?.trim() || 'Digital Service / Subscription';
            const pkg = form.querySelector('[name="package"]')?.value?.trim() || '';
            const market = form.querySelector('[name="market"]')?.value?.trim() || '';
            const notes = form.querySelector('[name="notes"]')?.value?.trim() || '';

            const lines = [
                `Hi @techoverflowbd! I'm ${name}.`,
                `• Interested in: ${service}`
            ];
            if (pkg) lines.push(`• Package Tier: ${pkg}`);
            if (market) lines.push(`• Region: ${market}`);
            if (notes) lines.push(`• Project Details: ${notes}`);

            const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(lines.join('\n'))}`;
            const w = window.open(whatsappUrl, '_blank');
            if (w) w.opener = null;
        });
    });

    // Initialize pricing on DOM ready
    updateAllPricing();
})();
