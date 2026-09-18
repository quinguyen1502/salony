(function () {
  var KEY = "salony-lang";
  var offered = { en: true, vi: true };

  function isPrefix(path, prefix) {
    return path === prefix || path === prefix + "/" || path.indexOf(prefix + "/") === 0;
  }

  function pageLang() {
    var path = location.pathname;
    if (isPrefix(path, "/vi") || isPrefix(path, "/salony/vi")) return "vi";
    return "en";
  }

  function migrateLegacyEn(pathname) {
    if (pathname === "/salony/en" || pathname === "/salony/en/") return "/salony/";
    if (pathname.indexOf("/salony/en/") === 0) {
      return "/salony/" + pathname.slice("/salony/en/".length);
    }
    if (pathname === "/en" || pathname === "/en/") return "/";
    if (pathname.indexOf("/en/") === 0) return pathname.slice(3);
    return null;
  }

  function fromNavigator() {
    var list =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
    for (var i = 0; i < list.length; i++) {
      var primary = String(list[i] || "")
        .toLowerCase()
        .split("-")[0];
      if (offered[primary]) return primary;
    }
    return "en";
  }

  function stored() {
    try {
      var value = localStorage.getItem(KEY);
      if (offered[value]) return value;
    } catch (e) {}
    return null;
  }

  function save(lang) {
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
  }

  function stripLang(pathname) {
    var migrated = migrateLegacyEn(pathname);
    if (migrated !== null) pathname = migrated;
    if (pathname === "/salony/vi" || pathname === "/salony/vi/") return "/salony/";
    if (pathname.indexOf("/salony/vi/") === 0) {
      return "/salony/" + pathname.slice("/salony/vi/".length);
    }
    if (pathname === "/vi" || pathname === "/vi/") return "/";
    if (pathname.indexOf("/vi/") === 0) return pathname.slice(3);
    return pathname;
  }

  function addLang(stripped, lang) {
    if (lang !== "vi") return stripped;
    if (stripped === "/salony" || stripped === "/salony/") return "/salony/vi/";
    if (stripped.indexOf("/salony/") === 0) {
      return "/salony/vi/" + stripped.slice("/salony/".length);
    }
    if (stripped === "/") return "/vi/";
    return "/vi" + stripped;
  }

  function alternateHref(lang) {
    var links = document.querySelectorAll('link[rel="alternate"][hreflang]');
    for (var i = 0; i < links.length; i++) {
      var hl = (links[i].getAttribute("hreflang") || "").toLowerCase();
      if (hl === lang || hl.indexOf(lang + "-") === 0) return links[i].href;
    }
    var a = document.querySelector('a[hreflang="' + lang + '"]');
    return a ? a.href : "";
  }

  document.addEventListener(
    "click",
    function (e) {
      var a = e.target.closest && e.target.closest("a[hreflang]");
      if (!a) return;
      var lang = (a.getAttribute("hreflang") || "").toLowerCase().split("-")[0];
      if (offered[lang]) save(lang);
    },
    true
  );

  var legacy = migrateLegacyEn(location.pathname);
  if (legacy !== null) {
    location.replace(legacy + location.search + location.hash);
    return;
  }

  var want = stored() || fromNavigator();
  if (!stored()) save(want);
  var have = pageLang();
  if (want === have) return;

  var href = alternateHref(want);
  if (!href) {
    href =
      addLang(stripLang(location.pathname), want) +
      location.search +
      location.hash;
  }
  if (!href) return;
  var here = location.pathname + location.search + location.hash;
  var dest = href;
  try {
    dest = new URL(href, location.href);
    dest = dest.pathname + dest.search + dest.hash;
  } catch (e) {}
  if (dest !== here) location.replace(href);
})();
