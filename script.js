const products = [
  {
    id: "pro-grip-handle",
    name: "Pro Grip Handle X1",
    category: "Ручки",
    price: 1290,
    shortDescription: "Ергономічна ручка для силових підйомів і стабільної роботи зап'ястя.",
    description: "Легка алюмінієва ручка для армреслінг-тренувань з м'якою накладкою та глибоким хватом. Підходить для блочних тренажерів, канатів та домашніх станцій.",
    badge: "Хіт продажу",
    specs: {
      material: "Алюміній + гума",
      weight: "0.7 кг",
      level: "Початківець / Pro",
      shipping: "Україна та Польща"
    },
    image: svgImage("Pro Grip Handle X1", "#1f8dd8", "#9ce9ff", "Ручка для армреслінгу")
  },
  {
    id: "hook-master-handle",
    name: "Hook Master Handle",
    category: "Ручки",
    price: 1490,
    shortDescription: "Для відпрацювання hook-позиції з акцентом на пальці та пронацію.",
    description: "Компактна силова ручка з щільним ремінним вузлом для тяг на верхньому і нижньому блоці. Добре імітує бойову траєкторію руху.",
    badge: "Hook focus",
    specs: {
      material: "Сталь + нейлон",
      weight: "0.9 кг",
      level: "Середній",
      shipping: "Україна та Польща"
    },
    image: svgImage("Hook Master Handle", "#16659a", "#65ccff", "Тренувальна ручка")
  },
  {
    id: "table-compact",
    name: "Compact Arm Table",
    category: "Столи",
    price: 14900,
    shortDescription: "Стіл для дому та клубу з регульованими подушками та стійкою рамою.",
    description: "Повноцінний армрестлінг-стіл з порошковим фарбуванням, зручною геометрією та надійними опорами. Оптимальний для клубів, секцій та домашніх залів.",
    badge: "Клубний формат",
    specs: {
      material: "Сталева рама",
      weight: "38 кг",
      level: "Клуб / Home gym",
      shipping: "Кур'єр / Самовивіз"
    },
    image: svgImage("Compact Arm Table", "#0f517b", "#6fe2ff", "Стіл для армреслінгу")
  },
  {
    id: "table-tournament",
    name: "Tournament Table Pro",
    category: "Столи",
    price: 19800,
    shortDescription: "Змагальна модель столу з посиленою рамою та професійним покриттям.",
    description: "Стіл для інтенсивних тренувань та спарингів. Підсилені вузли, стійка платформа й оббивка, що зберігає форму навіть при великих навантаженнях.",
    badge: "Pro series",
    specs: {
      material: "Посилена сталь",
      weight: "46 кг",
      level: "Професіонал",
      shipping: "Україна / Польща"
    },
    image: svgImage("Tournament Table Pro", "#1d7ebc", "#9fe7ff", "Професійний стіл")
  },
  {
    id: "trainer-pulley",
    name: "Pulley Trainer Station",
    category: "Тренажери",
    price: 6900,
    shortDescription: "Універсальна станція для тяги, пронації, cup та верхнього тиску.",
    description: "Силова станція для домашніх тренувань рукоборців з плавним ходом і широким набором вправ. Працює з ручками, ременями й карабінами.",
    badge: "Універсальний",
    specs: {
      material: "Сталь / ролики",
      weight: "18 кг",
      level: "Усі рівні",
      shipping: "Україна та Польща"
    },
    image: svgImage("Pulley Trainer Station", "#155b85", "#90e8ff", "Тренажер для тяги")
  },
  {
    id: "trainer-wrist",
    name: "Wrist Force Machine",
    category: "Тренажери",
    price: 5400,
    shortDescription: "Машина для цілеспрямованого розвитку зап'ястя, пальців і зв'язок.",
    description: "Тренажер для покращення cup, riser та утримання руки в критичних кутах. Підходить для технічних і силових циклів підготовки.",
    badge: "Wrist power",
    specs: {
      material: "Метал + м'які валики",
      weight: "12 кг",
      level: "Середній / Pro",
      shipping: "Україна та Польща"
    },
    image: svgImage("Wrist Force Machine", "#1878b0", "#8be2ff", "Тренажер для зап'ястя")
  },
  {
    id: "strap-elite",
    name: "Elite Strap Set",
    category: "Аксесуари",
    price: 590,
    shortDescription: "Набір ременів для тяги, ізометрії та роботи на верхньому блоці.",
    description: "Міцні ремені з посиленою прошивкою для тренувань hook, top-roll і статики. Корисний аксесуар для клубу або домашньої станції.",
    badge: "Must-have",
    specs: {
      material: "Нейлон",
      weight: "0.3 кг",
      level: "Усі рівні",
      shipping: "Україна та Польща"
    },
    image: svgImage("Elite Strap Set", "#115376", "#88ddff", "Набір ременів")
  },
  {
    id: "peg-kit",
    name: "Table Peg Kit",
    category: "Аксесуари",
    price: 890,
    shortDescription: "Знімні пеги для армстолу з прогумованою поверхнею та надійним хватом.",
    description: "Комплект змінних пегів для тренувальних і змагальних столів. Дає впевнену опору та комфорт при довгих спарингах.",
    badge: "Аксесуар",
    specs: {
      material: "Сталь + гума",
      weight: "1.1 кг",
      level: "Клуб / Pro",
      shipping: "Україна та Польща"
    },
    image: svgImage("Table Peg Kit", "#2489c8", "#adeeff", "Пеги для столу")
  }
];

const categoryOrder = ["Ручки", "Столи", "Тренажери", "Аксесуари"];
const categoryAnchors = {
  "Ручки": "handles",
  "Столи": "tables",
  "Тренажери": "trainers",
  "Аксесуари": "accessories"
};
const storageKeys = {
  cart: "hobbyt-cart",
  favorites: "hobbyt-favorites"
};

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderCounters();
  initActions();

  const page = document.body.dataset.page;
  if (page === "home") renderHomeProducts();
  if (page === "catalog") renderCatalog();
  if (page === "cart") renderCart();
  if (page === "favorites") renderFavorites();
  if (page === "product") renderProductPage();
});

function setupNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}

function initActions() {
  document.addEventListener("click", (event) => {
    const addCartButton = event.target.closest("[data-add-cart]");
    const addFavoriteButton = event.target.closest("[data-add-favorite]");
    const qtyButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");
    const moveFavoriteButton = event.target.closest("[data-move-cart]");

    if (addCartButton) {
      addToCart(addCartButton.dataset.addCart);
    }

    if (addFavoriteButton) {
      toggleFavorite(addFavoriteButton.dataset.addFavorite);
    }

    if (qtyButton) {
      changeQuantity(qtyButton.dataset.id, Number(qtyButton.dataset.qty));
    }

    if (removeButton) {
      removeFromCollection(removeButton.dataset.remove, removeButton.dataset.type);
    }

    if (moveFavoriteButton) {
      addToCart(moveFavoriteButton.dataset.moveCart);
    }
  });
}

function renderHomeProducts() {
  const target = document.querySelector("[data-featured-products]");
  if (!target) return;
  const featuredIds = ["pro-grip-handle", "table-compact", "trainer-pulley"];
  target.innerHTML = featuredIds
    .map((id) => getProductCard(findProduct(id), { compact: true }))
    .join("");
}

function renderCatalog() {
  const target = document.querySelector("[data-catalog-content]");
  if (!target) return;

  target.innerHTML = categoryOrder
    .map((category) => {
      const items = products.filter((product) => product.category === category);
      return `
        <section class="category-block" id="${categoryAnchors[category]}">
          <div class="category-title">
            <h3>${category}</h3>
            <span class="pill">${items.length} товарів</span>
          </div>
          <div class="grid grid-3">
            ${items.map((product) => getProductCard(product)).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderCart() {
  const cart = getCart();
  const itemsWrap = document.querySelector("[data-cart-items]");
  const summaryWrap = document.querySelector("[data-cart-summary]");
  if (!itemsWrap || !summaryWrap) return;

  if (!cart.length) {
    itemsWrap.innerHTML = getEmptyState(
      "Кошик поки порожній",
      "Додайте товари з каталогу або з головної сторінки, і вони одразу з’являться тут.",
      "Перейти до каталогу",
      "catalog.html"
    );
    summaryWrap.innerHTML = getSummaryCard(0, 0);
    return;
  }

  const enriched = cart
    .map((item) => {
      const product = findProduct(item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const totalItems = enriched.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = enriched.reduce((sum, item) => sum + item.quantity * item.price, 0);

  itemsWrap.innerHTML = enriched
    .map(
      (item) => `
        <article class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h3 class="item-title">${item.name}</h3>
            <div class="item-meta">
              <span>${item.category}</span>
              <span>${formatCurrency(item.price)} / шт.</span>
            </div>
            <div class="qty-controls">
              <button type="button" data-id="${item.id}" data-qty="-1" aria-label="Зменшити кількість">−</button>
              <strong>${item.quantity}</strong>
              <button type="button" data-id="${item.id}" data-qty="1" aria-label="Збільшити кількість">+</button>
            </div>
          </div>
          <div>
            <div class="price">${formatCurrency(item.quantity * item.price)}</div>
            <div class="button-row">
              <a class="btn-ghost" href="product.html?id=${item.id}">Детальніше</a>
              <button class="btn-secondary" type="button" data-remove="${item.id}" data-type="cart">Видалити</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  summaryWrap.innerHTML = getSummaryCard(totalItems, totalPrice);
}

function renderFavorites() {
  const favoriteIds = getFavorites();
  const target = document.querySelector("[data-favorites-items]");
  if (!target) return;

  if (!favoriteIds.length) {
    target.innerHTML = getEmptyState(
      "Улюблене ще не заповнене",
      "Зберігайте цікаві ручки, столи й тренажери, щоб швидко повернутися до них пізніше.",
      "Переглянути каталог",
      "catalog.html"
    );
    return;
  }

  const favoriteProducts = favoriteIds.map(findProduct).filter(Boolean);
  target.innerHTML = favoriteProducts
    .map(
      (item) => `
        <article class="favorite-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h3 class="item-title">${item.name}</h3>
            <div class="item-meta">
              <span>${item.category}</span>
              <span>${formatCurrency(item.price)}</span>
            </div>
            <p class="product-desc">${item.shortDescription}</p>
          </div>
          <div class="button-row">
            <a class="btn-ghost" href="product.html?id=${item.id}">Детальніше</a>
            <button class="btn" type="button" data-move-cart="${item.id}">У кошик</button>
            <button class="btn-secondary" type="button" data-remove="${item.id}" data-type="favorites">Прибрати</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const product = findProduct(params.get("id")) || products[0];
  const target = document.querySelector("[data-product-view]");
  const related = document.querySelector("[data-related-products]");
  if (!target) return;

  target.innerHTML = `
    <div class="product-gallery">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-copy">
      <span class="eyebrow">${product.category}</span>
      <h1>${product.name}</h1>
      <p class="lead">${product.description}</p>
      <div class="price">${formatCurrency(product.price)}</div>
      <div class="product-specs">
        <div class="spec-card">
          <span>Матеріал</span>
          <strong>${product.specs.material}</strong>
        </div>
        <div class="spec-card">
          <span>Вага</span>
          <strong>${product.specs.weight}</strong>
        </div>
        <div class="spec-card">
          <span>Рівень</span>
          <strong>${product.specs.level}</strong>
        </div>
        <div class="spec-card">
          <span>Доставка</span>
          <strong>${product.specs.shipping}</strong>
        </div>
      </div>
      <ul class="feature-list">
        <li>Підібрано під специфіку армреслінгу та ізольованої роботи руки.</li>
        <li>Підходить для домашнього залу, клубу та технічної підготовки перед стартами.</li>
        <li>Сумісно з більшістю тросових систем, карабінів і блочних станцій.</li>
      </ul>
      <div class="product-actions">
        <button class="btn" type="button" data-add-cart="${product.id}">Додати в кошик</button>
        <button class="btn-secondary" type="button" data-add-favorite="${product.id}">В улюблене</button>
        <a class="btn-ghost" href="catalog.html">Назад до каталогу</a>
      </div>
    </div>
  `;

  if (related) {
    const relatedProducts = products
      .filter((item) => item.category === product.category && item.id !== product.id)
      .slice(0, 3);
    related.innerHTML = relatedProducts.map((item) => getProductCard(item)).join("");
  }
}

function getProductCard(product, options = {}) {
  return `
    <article class="product-card">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-badge">${product.badge}</span>
      </div>
      <div class="product-content">
        <div class="product-meta">
          <div>
            <h3>${product.name}</h3>
            <span class="pill">${product.category}</span>
          </div>
          <div class="price">${formatCurrency(product.price)}</div>
        </div>
        <p class="product-desc">${options.compact ? product.shortDescription : product.description}</p>
        <div class="button-row">
          <a class="btn-ghost" href="product.html?id=${product.id}">Детальніше</a>
          <button class="btn" type="button" data-add-cart="${product.id}">У кошик</button>
          <button class="btn-secondary" type="button" data-add-favorite="${product.id}">Улюблене</button>
        </div>
      </div>
    </article>
  `;
}

function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  setCart(cart);
  showToast(`${product.name} додано в кошик`);
  renderCounters();
  if (document.body.dataset.page === "cart") renderCart();
}

function toggleFavorite(productId) {
  const product = findProduct(productId);
  if (!product) return;
  const favorites = getFavorites();
  const exists = favorites.includes(productId);
  const next = exists
    ? favorites.filter((id) => id !== productId)
    : [...favorites, productId];

  localStorage.setItem(storageKeys.favorites, JSON.stringify(next));
  showToast(exists ? `${product.name} прибрано з улюблених` : `${product.name} додано в улюблені`);
  renderCounters();
  if (document.body.dataset.page === "favorites") renderFavorites();
}

function changeQuantity(productId, delta) {
  const cart = getCart()
    .map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + delta } : item
    )
    .filter((item) => item.quantity > 0);

  setCart(cart);
  renderCounters();
  renderCart();
}

function removeFromCollection(productId, type) {
  if (type === "cart") {
    setCart(getCart().filter((item) => item.id !== productId));
    renderCart();
  }

  if (type === "favorites") {
    localStorage.setItem(
      storageKeys.favorites,
      JSON.stringify(getFavorites().filter((id) => id !== productId))
    );
    renderFavorites();
  }

  renderCounters();
}

function renderCounters() {
  const cartCount = getCart().reduce((sum, item) => sum + item.quantity, 0);
  const favoriteCount = getFavorites().length;
  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = cartCount;
  });
  document.querySelectorAll("[data-favorite-count]").forEach((element) => {
    element.textContent = favoriteCount;
  });
}

function getSummaryCard(totalItems, totalPrice) {
  return `
    <aside class="summary-card">
      <strong>Ваше замовлення</strong>
      <p>Перевірте кількість товарів, загальну суму та переходьте до оформлення.</p>
      <ul>
        <li>Товарів у кошику: ${totalItems}</li>
        <li>Доставка: розраховується менеджером</li>
        <li>Оплата: картка, готівка, PayPal</li>
      </ul>
      <div class="summary-total">
        <span>Разом</span>
        <span>${formatCurrency(totalPrice)}</span>
      </div>
      <div class="checkout-actions">
        <button class="btn" type="button">Оформити замовлення</button>
        <a class="btn-secondary" href="delivery.html">Доставка та оплата</a>
      </div>
    </aside>
  `;
}

function getEmptyState(title, text, buttonLabel, link) {
  return `
    <div class="empty-state">
      <h3>${title}</h3>
      <p>${text}</p>
      <a class="btn" href="${link}">${buttonLabel}</a>
    </div>
  `;
}

function findProduct(id) {
  return products.find((product) => product.id === id);
}

function getCart() {
  return readJson(storageKeys.cart, []);
}

function setCart(cart) {
  localStorage.setItem(storageKeys.cart, JSON.stringify(cart));
}

function getFavorites() {
  return readJson(storageKeys.favorites, []);
}

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function formatCurrency(value) {
  return new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "UAH",
    maximumFractionDigits: 0
  }).format(value);
}

function showToast(message) {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  wrap.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 2600);
}

function svgImage(title, colorA, colorB, subtitle) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 640">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="800" height="640" rx="40" fill="url(#g)" />
      <circle cx="650" cy="110" r="90" fill="rgba(255,255,255,0.15)" />
      <circle cx="145" cy="520" r="70" fill="rgba(255,255,255,0.12)" />
      <rect x="130" y="180" width="540" height="250" rx="42" fill="rgba(255,255,255,0.18)" />
      <rect x="185" y="240" width="160" height="34" rx="17" fill="white" fill-opacity="0.95" />
      <rect x="185" y="300" width="300" height="24" rx="12" fill="white" fill-opacity="0.65" />
      <rect x="185" y="348" width="210" height="24" rx="12" fill="white" fill-opacity="0.42" />
      <text x="185" y="148" font-family="Verdana, sans-serif" font-size="46" font-weight="700" fill="white">${escapeSvg(
        title
      )}</text>
      <text x="185" y="402" font-family="Verdana, sans-serif" font-size="28" fill="white" fill-opacity="0.92">${escapeSvg(
        subtitle
      )}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeSvg(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
