/* Лёгкие компоненты витрины: данные подставляет API, в демо — статическая разметка. */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function count(el) {
    const target = Number(el.dataset.count || 0), suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    const start = performance.now(), duration = 650;
    function frame(now) {
      const p = Math.min((now - start) / duration, 1), value = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = value + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    entry.target.querySelectorAll('[data-count]').forEach(count);
    observer.unobserve(entry.target);
  }), { threshold: .2 });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  window.LandingCharts = { count };
}());
