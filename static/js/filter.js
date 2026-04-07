document.addEventListener('DOMContentLoaded', function () {

  // ── Projects page ──────────────────────────────────────────
  var projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    var pCards   = projectsGrid.querySelectorAll('.card');
    var pFilter  = document.getElementById('projects-filter');
    var pButtons = pFilter ? pFilter.querySelectorAll('.filter-btn') : [];
    var pSearch  = document.querySelector('.filter-search');

    function applyProjectFilter() {
      var activeBtn = pFilter ? pFilter.querySelector('.filter-btn.active') : null;
      var active = activeBtn ? activeBtn.dataset.filter : 'all';
      var term   = pSearch ? pSearch.value.trim().toLowerCase() : '';

      pCards.forEach(function (card) {
        var tags  = (card.dataset.tags  || '').toLowerCase();
        var title = (card.dataset.title || '').toLowerCase();
        var matchTag    = active === 'all' || tags.split(',').map(function(t){ return t.trim(); }).indexOf(active.toLowerCase()) > -1;
        var matchSearch = !term || title.indexOf(term) > -1 || tags.indexOf(term) > -1;
        card.style.display = (matchTag && matchSearch) ? '' : 'none';
      });
    }

    pButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        pButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        applyProjectFilter();
      });
    });

    if (pSearch) pSearch.addEventListener('input', applyProjectFilter);
  }

  // ── Blog page ──────────────────────────────────────────────
  var blogGrid = document.getElementById('blog-grid');
  if (blogGrid) {
    var bCards   = blogGrid.querySelectorAll('.card');
    var bFilter  = document.getElementById('blog-filter');
    var bButtons = bFilter ? bFilter.querySelectorAll('.filter-btn') : [];

    bButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.dataset.filter.toLowerCase();
        bButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        bCards.forEach(function (card) {
          var tags = (card.dataset.tags || '').toLowerCase().split(',').map(function(t){ return t.trim(); });
          card.style.display = (filter === 'all' || tags.indexOf(filter) > -1) ? '' : 'none';
        });
      });
    });
  }

});
