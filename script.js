document.querySelectorAll('.request-form').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        const name = form.querySelector('input[name="name"]').value || 'Customer';
        const service = form.querySelector('input[name="service"]').value || 'a subscription';
        const notes = form.querySelector('textarea[name="notes"]').value || '';
        
        const message = `Hi! I'm ${name} and I'm interested in: ${service}. ${notes ? 'Notes: ' + notes : ''}`;
        const whatsappUrl = `https://wa.me/8801707370774?text=${encodeURIComponent(message)}`;
        const w = window.open(whatsappUrl, '_blank');
        if (w) w.opener = null;
    });
});