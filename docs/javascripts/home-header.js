(function () {
  var header = document.querySelector(".md-header");
  if (!header || !document.querySelector(".home-landing")) return;

  var range = 160;

  // Publish the fade as a custom property instead of writing
  // `style.backgroundColor`. An inline colour beats every stylesheet rule, so
  // the old version left the header see-through even with the mobile drawer
  // open — the drawer's own title block showed through the header band. CSS
  // now owns the colour and can force it opaque when the drawer is open.
  function paint() {
    var t = Math.min(1, window.scrollY / range);
    header.style.setProperty("--home-header-fade", String(t));
  }

  paint();
  window.addEventListener("scroll", paint, { passive: true });
})();
