type ShoppingCart = {
  name: string;
  price: number;
};

type BuyButton = {
  item: ShoppingCart;
  showFreeShippingIcon: () => void;
  hideFreeShippingIcon: () => void;
};

const shoppingCart: ShoppingCart[] = [
  {
    price: 5,
    name: "티셔츠",
  },
];
let shoppingCartTotal = 0;

function addItemToCart(name: string, price: number) {
  shoppingCart.push({
    name,
    price,
  });
}

function updateShippingIcons() {
  const buyButtons = getBuyButtonsDom();
  for (let i = 0; i < buyButtons.length; i++) {
    const button = buyButtons[i];
    const item = button.item;
    if (item.price + shoppingCartTotal >= 20) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingIcon();
    }
  }
}

function updateTaxDom() {
  setTaxDom(shoppingCartTotal * 0.01);
}

function calcCartTotal() {
  shoppingCartTotal = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    shoppingCartTotal += item.price;
  }
  setCartTotalDom();
  updateShippingIcons();
  updateTaxDom();
}

/**코드 정상 동작을 위한 임의 코드 */

function getBuyButtonsDom(): BuyButton[] {
  return [
    {
      item: {
        price: 5,
        name: "티셔츠",
      },
      showFreeShippingIcon() {
        console.log("show");
      },
      hideFreeShippingIcon() {
        console.log("hide");
      },
    },
    {
      item: {
        price: 15,
        name: "코트",
      },
      showFreeShippingIcon() {
        console.log("show");
      },
      hideFreeShippingIcon() {
        console.log("hide");
      },
    },
    {
      item: {
        price: 7,
        name: "슬랙스",
      },
      showFreeShippingIcon() {
        console.log("show");
      },
      hideFreeShippingIcon() {
        console.log("hide");
      },
    },
  ];
}

function setCartTotalDom() {}

function setTaxDom(tax: number) {
  console.log(tax);
}

export default calcCartTotal;
