(function () {
  const state = {
    lang: localStorage.getItem("toshiba-canvio-basics-lang") || "zh"
  };

  function t(key) {
    return translations[state.lang][key] || translations.zh[key] || key;
  }

  function localizeText(root) {
    root.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll(".lang-toggle").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === state.lang);
    });
  }

  function productName(product) {
    return product.name[state.lang] || product.name.zh;
  }

  function productCategory(product) {
    return product.category[state.lang] || product.category.zh;
  }

  function renderProductGrid() {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    grid.innerHTML = products.map((product) => `
      <article class="product-card">
        <a class="product-image-link" href="${product.page}" aria-label="${productName(product)}">
          <img src="${product.image}" alt="${productName(product)}">
        </a>
        <div class="product-card-body">
          <span class="product-category">${productCategory(product)}</span>
          <h3>${productName(product)}</h3>
          <p>${product.short[state.lang] || product.short.zh}</p>
          <div class="product-meta">
            <strong>${product.price}</strong>
            <a href="${product.page}">${t("products.view")}</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  function renderProductDetail() {
    const detail = document.querySelector("[data-product-detail]");
    if (!detail) return;

    const id = Number(detail.dataset.productDetail);
    const product = products.find((item) => item.id === id) || products[0];
    const nextProduct = products[(product.id % products.length)];

    document.title = `${productName(product)} | Toshiba Canvio Basics`;

    const specs = product.specs.map((spec) => `
      <li>${spec[state.lang] || spec.zh}</li>
    `).join("");

    detail.innerHTML = `
      <section class="detail-hero">
        <div class="detail-copy">
          <a class="back-link" href="index.html">${t("detail.back")}</a>
          <span class="product-category">${productCategory(product)}</span>
          <h1>${productName(product)}</h1>
          <p>${product.desc[state.lang] || product.desc.zh}</p>
          <div class="detail-actions">
            <strong>${product.price}</strong>
            <a class="primary-btn" href="mailto:hello@toshiba-canvio-basics.example">${t("detail.contact")}</a>
          </div>
          <p class="detail-note">${t("detail.note")}</p>
        </div>
        <div class="detail-image-panel">
          <img src="${product.image}" alt="${productName(product)}">
        </div>
      </section>

      <section class="detail-info">
        <div>
          <span class="section-kicker">${t("detail.overview")}</span>
          <h2>${productName(product)}</h2>
          <p>${product.short[state.lang] || product.short.zh}</p>
        </div>
        <div>
          <span class="section-kicker">${t("detail.specs")}</span>
          <ul class="spec-list">${specs}</ul>
        </div>
      </section>

      <section class="next-product">
        <span>${t("detail.next")}</span>
        <a href="${nextProduct.page}">${productName(nextProduct)}</a>
      </section>
    `;
  }

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem("toshiba-canvio-basics-lang", lang);
    localizeText(document);
    renderProductGrid();
    renderProductDetail();
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".lang-toggle");
    if (!button) return;
    applyLanguage(button.dataset.lang);
  });

  applyLanguage(state.lang);
})();
