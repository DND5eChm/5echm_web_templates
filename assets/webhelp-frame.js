(function () {
  "use strict";

  var frame = document.getElementById("content");
  var fallback = document.body.getAttribute("data-default-page") || "";

  function pageValue() {
    try {
      var url = new URL(window.location.href);
      var query = url.searchParams.get("page");
      if (query) return query;
    } catch (error) {}
    var match = /(?:^#|[&#])page=([^&]*)/i.exec(window.location.hash || "");
    if (!match) return fallback;
    try { return decodeURIComponent(match[1]); } catch (error) { return match[1]; }
  }

  function path(value) {
    var source = String(value || "").replace(/\\/g, "/").replace(/^topics\//i, "");
    try { source = decodeURIComponent(source); } catch (error) {}
    var parts = source.split("/").filter(function (part) { return part && part !== "." && part !== ".."; });
    return "topics/" + parts.map(function (part) { return encodeURIComponent(part); }).join("/");
  }

  frame.src = path(pageValue());
})();
