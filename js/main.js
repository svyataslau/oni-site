(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  document.querySelectorAll("[data-accordion] .accordion-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".accordion-item");
      var panel = item && item.querySelector(".accordion-panel");
      if (!panel) return;

      var expanded = btn.getAttribute("aria-expanded") === "true";
      var root = btn.closest("[data-accordion]");
      if (root) {
        root.querySelectorAll(".accordion-trigger").forEach(function (other) {
          if (other === btn) return;
          other.setAttribute("aria-expanded", "false");
          var p = other.closest(".accordion-item") && other.closest(".accordion-item").querySelector(".accordion-panel");
          if (p) p.setAttribute("hidden", "");
        });
      }

      if (expanded) {
        btn.setAttribute("aria-expanded", "false");
        panel.setAttribute("hidden", "");
      } else {
        btn.setAttribute("aria-expanded", "true");
        panel.removeAttribute("hidden");
      }
    });
  });
})();
