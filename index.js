const products = [
  { productId: 1, productName: 'Товар 1', categoryId: 1 },
  { productId: 2, productName: 'Товар 2', categoryId: 2 },
  { productId: 3, productName: 'Товар 3', categoryId: 3 },
  { productId: 4, productName: 'Товар 4', categoryId: 4 },
  { productId: 5, productName: 'Товар 5', categoryId: 5 },
  { productId: 6, productName: 'Товар 6', categoryId: 1 },
  { productId: 7, productName: 'Товар 7', categoryId: 2 },
  { productId: 8, productName: 'Товар 8', categoryId: 3 },
  { productId: 9, productName: 'Товар 9', categoryId: 4 },
  { productId: 10, productName: 'Товар 10', categoryId: 5 },
  { productId: 11, productName: 'Товар 11', categoryId: 1 },
  { productId: 12, productName: 'Товар 12', categoryId: 2 },
  { productId: 13, productName: 'Товар 13', categoryId: 3 },
  { productId: 14, productName: 'Товар 14', categoryId: 4 },
  { productId: 15, productName: 'Товар 15', categoryId: 5 },
  { productId: 16, productName: 'Товар 16', categoryId: 1 },
  { productId: 17, productName: 'Товар 17', categoryId: 2 },
  { productId: 18, productName: 'Товар 18', categoryId: 3 },
  { productId: 19, productName: 'Товар 19', categoryId: 4 },
  { productId: 20, productName: 'Товар 20', categoryId: 5 },
  { productId: 21, productName: 'Товар 21', categoryId: 1 },
  { productId: 22, productName: 'Товар 22', categoryId: 2 },
  { productId: 23, productName: 'Товар 23', categoryId: 3 },
  { productId: 24, productName: 'Товар 24', categoryId: 4 },
  { productId: 25, productName: 'Товар 25', categoryId: 5 },
];
const categories = [
  { categoryId: 1, categoryName: 'Футболки' },
  { categoryId: 2, categoryName: 'Майки' },
  { categoryId: 3, categoryName: 'Носки' },
  { categoryId: 4, categoryName: 'Джинсы' },
  { categoryId: 5, categoryName: 'Брюки' },
];

const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
const tabs = document.createElement('div');
tabs.classList.add('tabs');
const tabsList = document.createElement('ul');
tabsList.classList.add('tabs-list');
const productsContainer = document.createElement('div');
productsContainer.classList.add('products');
const productsList = document.createElement('ul');
productsList.classList.add('products-list');

let activeId = 2;

function renderTabs(id = activeId) {
  tabsList.innerHTML = '';

  categories.forEach((el) => {
    const tabsItem = document.createElement('li');
    tabsItem.classList.add('tabs-item');
    tabsItem.id = el.categoryId;
    tabsItem.textContent = el.categoryName;

    if (id == el.categoryId) {
      tabsItem.classList.add('active');
    }
    tabsList.appendChild(tabsItem);

    tabsItem.addEventListener('click', () => {
      activeId = tabsItem.id; 
      renderProductList(activeId); 
    });
  });

  tabs.appendChild(tabsList);
  container.appendChild(tabs);
  body.appendChild(container);
}

renderTabs();

function renderProductList(id) {
  productsList.innerHTML = '';

  renderTabs(Number(id)); 

  products.forEach((el) => {
    if (id == el.categoryId) {
      const productCard = document.createElement('div');
      const productImg = document.createElement('img');
      const productTitle = document.createElement('p');
      productCard.classList.add('product-card');
      productImg.classList.add('product-picture');
      productTitle.classList.add('product-title');

      productImg.src = '/img/tovar.jpeg';
      productTitle.textContent = el.productName;
      productCard.appendChild(productImg);
      productCard.appendChild(productTitle);
      productsList.appendChild(productCard);
      productsContainer.appendChild(productsList);
      container.appendChild(productsContainer);
    }
  });
}

renderProductList(activeId);
