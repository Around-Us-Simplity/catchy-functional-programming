type ShoppingCart = {
  name: string;
  price: number;
};

type BuyButton = {
  item: ShoppingCart;
  showFreeShippingIcon: () => void;
  hideFreeShippingIcon: () => void;
};

/** data(get by action): current cart status of user */
let shoppingCart = [
  {
    price: 5,
    name: "티셔츠",
  },
] satisfies ShoppingCart[];
/** data(derived state): total price of current cart */
let shoppingCartTotal = 0;

/** data: selling items which show on megamart page */
const sellingItems = [
  {
    price: 5,
    name: "티셔츠",
  },
  {
    name: "슬랙스",
    price: 7,
  },
  {
    name: "코트",
    price: 15,
  },
] satisfies ShoppingCart[];

/**
 * action: add item on user cart
 * @param cart current cart of user
 * @param name name of added item
 * @param price price of added item
 * @returns
 */
function addItemToCart(cart: ShoppingCart[], name: string, price: number) {
  return [...cart, { name, price }];
  // const tempCart = cart.slice();
  // tempCart.push({
  //   name,
  //   price,
  // });
  // return tempCart;
}
/**
 * calculation: determine and return booleans if condition satisfies free shipping or not
 * @param price price of item
 * @param total total price of items on cart
 * @returns condition satisfies free shipping or not
 */
function getFreeShipping(price: number, total: number) {
  return price + total >= 20;
}

/** action: show free-shipping icon on each items on pages if sum of item price and current total satisfies condition */
function updateShippingIcons() {
  getBuyButtonsDom(sellingItems).forEach(button =>
    getFreeShipping(button.item.price, shoppingCartTotal)
      ? button.showFreeShippingIcon()
      : button.hideFreeShippingIcon(),
  );
}

/** action: update tax price on dom */
function updateTaxDom() {
  setTaxDom(getTaxFromPrice(shoppingCartTotal));
}

/**
 * calculation: return tax price depends on input price
 * @param price
 * @returns calculated tax price
 */
function getTaxFromPrice(price: number) {
  return price * 0.1;
}

/** series of actions: add item on cart and execute dom update with updated status */
function calcCartTotal() {
  shoppingCart = addItemToCart(shoppingCart, "슬랙스", 7);
  shoppingCartTotal = shoppingCart.reduce((acc, { price }) => acc + price, 0);

  setCartTotalDom();
  updateShippingIcons();
  updateTaxDom();
}

/**코드 정상 동작을 위한 임의 코드 */

function getBuyButtonsDom(cart: ShoppingCart[]): BuyButton[] {
  return cart.map(item => ({
    item,
    showFreeShippingIcon() {
      console.log("show");
    },
    hideFreeShippingIcon() {
      console.log("hide");
    },
  }));
}

function setCartTotalDom() {}

function setTaxDom(tax: number) {
  console.log(tax.toFixed(1));
}

export default calcCartTotal;
