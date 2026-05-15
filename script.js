document.querySelectorAll('.request-form').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        window.open('https://t.me/bointex', '_blank', 'noopener,noreferrer');
    });
});