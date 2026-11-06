// ==========================================
// 1. ÇáÊÍŞŞ ãä äãæĞÌ ÇÊÕá ÈäÇ 
// ==========================================
const contactForm = document.getElementById('contactForm');
const alertPlaceholder = document.getElementById('alertPlaceholder');

// äÊÃßÏ ÃæáÇğ ÃääÇ İí ÕİÍÉ "ÇÊÕá ÈäÇ" æÃä ÇáİæÑã ãæÌæÏ
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        // äãäÚ ÇáÕİÍÉ ãä ÅÚÇÏÉ ÇáÊÍãíá (Refresh) ÚäÏ ÇáÖÛØ Úáì ÅÑÓÇá
        event.preventDefault();

        // äÌíÈ ÇáŞíã Çááí ÃÏÎáåÇ ÇáãÓÊÎÏã
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageInput').value;

        // ÊİÑíÛ ãßÇä ÇáÑÓÇÆá ÇáŞÏíãÉ (ÚÔÇä ãÇ ÊÊÑÇßã İæŞ ÈÚÖ)
        alertPlaceholder.innerHTML = '';

        // -- ÇáÊÍŞŞ ÇáÈÓíØ --
        if (name === '' || email === '' || message === '') {
            // ÅĞÇ İí ÍŞá İÇÖí: äØÈÚ Alert ÎØÃ ãä ÇáÈæÊÓÊÑÇÈ
            alertPlaceholder.innerHTML = '<div class="alert alert-danger">ÇáÑÌÇÁ ÊÚÈÆÉ ÌãíÚ ÇáÍŞæá ÇáãØáæÈÉ!</div>';
        }
        else if (email.indexOf('@') === -1) {
            // ÊÍŞŞ ÈÓíØ ãä ÕíÛÉ ÇáÅíãíá (áÇÒã íÍÊæí Úáì @)
            alertPlaceholder.innerHTML = '<div class="alert alert-danger">ÇáÑÌÇÁ ÅÏÎÇá ÈÑíÏ ÅáßÊÑæäí ÕÍíÍ íÍæí ÅÔÇÑÉ @!</div>';
        }
        else {
            // ÅĞÇ ßá ÔíÁ ÊãÇã: äØÈÚ Alert äÌÇÍ
            alertPlaceholder.innerHTML = '<div class="alert alert-success">Êã ÅÑÓÇá ÑÓÇáÊß ÈäÌÇÍ! ÔßÑÇğ áÊæÇÕáß ãÚäÇ.</div>';

            // ÊİÑíÛ ÇáÍŞæá ÈÚÏ ÇáÅÑÓÇá ÇáäÇÌÍ
            contactForm.reset();
        }
    });
}

// ==========================================
// 2. İáÊÑÉ ÇáİÚÇáíÇÊ (Events Filter)
// ==========================================
const filterBtn = document.getElementById('filterBtn');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

// äÌãÚ ßá ßÑæÊ ÇáİÚÇáíÇÊ Çááí ÚØíäÇåÇ ßáÇÓ event-item
const eventItems = document.querySelectorAll('.event-item');

// äÊÃßÏ ÃääÇ İí ÕİÍÉ "ÇáİÚÇáíÇÊ" æÃä ÒÑ ÇáİáÊÑÉ ãæÌæÏ
if (filterBtn) {
    filterBtn.addEventListener('click', function () {

        const selectedCategory = categoryFilter.value;
        const searchText = searchInput.value.trim(); // trim ÚÔÇä äÔíá ÇáãÓÇİÇÊ ÇáİÇÖíÉ

        // äãÑ Úáì ßá ÇáİÚÇáíÇÊ ÈÍáŞÉ for ÚÇÏíÉ
        for (let i = 0; i < eventItems.length; i++) {
            const currentItem = eventItems[i];

            // äÌíÈ ßáãÉ ÇáÊÕäíİ ãä ÇáÜ badge ÇáãæÌæÏ ÌæÇ ÇáßÑÊ
            const badgeText = currentItem.querySelector('.badge').textContent;
            // äÌíÈ ÚäæÇä ÇáİÚÇáíÉ ÚÔÇä ÇáÈÍË ÇáäÕí
            const titleText = currentItem.querySelector('.card-title').textContent;

            // ÇáÔÑæØ: 
            // 1. åá ÇáÊÕäíİ ÇáãÎÊÇÑ İÇÖí (íÚäí "Çáßá") Ãæ íØÇÈŞ ÔÇÑÉ ÇáßÑÊ¿
            let categoryMatch = (selectedCategory === '' || badgeText === selectedCategory);

            // 2. åá ÍŞá ÇáÈÍË İÇÖí Ãæ ÇáÚäæÇä ÈíÍÊæí Úáì ÇáßáãÉ ÇáãßÊæÈÉ¿
            let searchMatch = (searchText === '' || titleText.includes(searchText));

            // ÅĞÇ ÊÍŞŞ ÇáÔÑØíä¡ ÈäÚÑÖ ÇáßÑÊ¡ æÅáÇ ÈäÎİíå
            if (categoryMatch && searchMatch) {
                currentItem.style.display = 'block';
            } else {
                currentItem.style.display = 'none'; // ÅÎİÇÁ ÇáÚäÕÑ
            }
        }
    });
}