type Product = {
  name: string;
  price: number;
};

type BuyButton = {
  item: Product;
  showFreeShippingIcon: () => void;
  hideFreeShippingIcon: () => void;
};

const FREE_SHIPPING_PRICE = 20;
const TAX = 0.1;

let shoppingCart: Product[] = [
  {
    price: 5,
    name: "티셔츠",
  },
];

const products: Product[] = [
  {
    price: 5,
    name: "티셔츠",
  },
  {
    price: 15,
    name: "코트",
  },
  {
    price: 7,
    name: "슬랙스",
  },
];

function addItemToCart(cart: Product[], name: string, price: number) {
  return [...cart, { name, price }];
}

function calcCartTotal(shoppingCart: Product[]) {
  return shoppingCart.reduce((acc, v) => acc + v.price, 0);
}

function updateShippingIcons(shoppingCartTotal: number) {
  getBuyButtonsDom(products).forEach(button => {
    checkFreeShipping(button.item.price, shoppingCartTotal)
      ? button.showFreeShippingIcon()
      : button.hideFreeShippingIcon();
  });
}

function checkFreeShipping(price: number, total: number) {
  return price + total >= FREE_SHIPPING_PRICE;
}

function getBuyButtonsDom(products: Product[]): BuyButton[] {
  return products.map(product => ({
    item: product,
    showFreeShippingIcon() {
      console.log("show");
    },
    hideFreeShippingIcon() {
      console.log("hide");
    },
  }));
}

function updateTaxDom(totalPrice: number) {
  setTaxDom(new Intl.NumberFormat("en-US").format(totalPrice * TAX));
}

function setCartTotalDom(totalPrice: number) {
  console.log(totalPrice);
}

function setTaxDom(tax: string) {
  console.log(tax);
}

function shoppingAction() {
  shoppingCart = addItemToCart(shoppingCart, "슬랙스", 7);
  const totalPrice = calcCartTotal(shoppingCart);
  setCartTotalDom(totalPrice);
  updateShippingIcons(totalPrice);
  updateTaxDom(totalPrice);
}

export default shoppingAction;
