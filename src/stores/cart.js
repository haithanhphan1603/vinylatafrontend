import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { CART_STORAGE } from "../composables/use-persisted-cart";

export const useCartStore = defineStore("cart", () => {
  const orderItems = ref([]);
  if (JSON.parse(localStorage.getItem(CART_STORAGE))) {
    orderItems.value = JSON.parse(localStorage.getItem(CART_STORAGE));
  }
  function pushItemToCart(item) {
    const currentItems = [...orderItems.value];
    const filteredItems = orderItems.value.filter(
      (orderItem) => orderItem.id === item.id
    );
    const existed = filteredItems.length > 0;
    if (existed) {
      for (let i = 0; i < filteredItems.length; i++) {
        const element = filteredItems[i];
        element.quantity++;
      }
    } else {
      currentItems.push(item);
    }
    orderItems.value = [...currentItems];
    console.log(orderItems.value);

    console.log("added");
  }

  function increaseItem(index) {
    const currentItems = [...orderItems.value];
    currentItems[index].quantity++;
    orderItems.value = [...currentItems];
  }
  function decreaseItem(index) {
    const currentItems = [...orderItems.value];
    if (currentItems[index].quantity === 1) {
      currentItems.splice(index, 1);
    } else {
      currentItems[index].quantity--;
    }

    orderItems.value = [...currentItems];
  }
  function deleteItem(index) {
    const currentItems = [...orderItems.value];
    currentItems.splice(index, 1);
    orderItems.value = currentItems;
  }
  const totalPrice = computed(() => {
    const total = orderItems.value.reduce((price, cur) => {
      price += cur.price * cur.quantity;
      return price;
    }, 0);
    return total.toFixed(2);
  });

  return {
    pushItemToCart,
    orderItems,
    totalPrice,
    increaseItem,
    decreaseItem,
    deleteItem,
  };
});
