import { onUnmounted } from "vue";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";

export const CART_STORAGE = "CART_STORAGE";

export const usePersistCart = () => {
  const cartStore = useCartStore();
  const { orderItems } = storeToRefs(cartStore);
  const unsub = cartStore.$subscribe(() => {
    localStorage.setItem(CART_STORAGE, JSON.stringify(orderItems.value));
  });

  onUnmounted(() => {
    unsub();
  });
};
