import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  // const products = ref([
  //   {
  //     id: 1,
  //     productTitle: "Test album a",
  //     productPricing: 12.0,
  //     productAttributes: "Green 2lp",
  //     artist: "Rihanna",
  //     productImage:
  //       "https://target.scene7.com/is/image/Target/GUEST_cdf9e7d3-0169-4537-8bd9-ff4da95b0222?wid=488&hei=488&fmt=pjpeg",
  //     productDescription:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet urna sit amet ornare commodo. Curabitur nec enim tempus ex malesuada ornare ac quis enim. Maecenas commodo sagittis convallis. Vivamus sed tellus nec sapien vestibulum faucibus. Quisque ligula neque, lacinia sit amet orci non, cursus malesuada risus",
  //     productDetail:
  //       "Etiam maximus vitae felis at scelerisque. Nullam rutrum vel nisl et dignissim. Duis tempus pulvinar posuere. Nam scelerisque dignissim ultricies. Aliquam consectetur magna nisl, eu ultrices leo hendrerit a. Proin euismod dapibus tortor, eu gravida ante rutrum quis. Nullam fringilla venenatis felis id efficitur.",
  //   },
  //   {
  //     id: 2,
  //     productTitle: "Midnights",
  //     productPricing: 13.0,
  //     productAttributes: "Green 2lp",
  //     artist: "Taylor Swift",
  //     productImage:
  //       "https://danviet.mediacdn.vn/296231569849192448/2022/8/29/tscover-16617476953761993869781.jpg",
  //     productDescription:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet urna sit amet ornare commodo. Curabitur nec enim tempus ex malesuada ornare ac quis enim. Maecenas commodo sagittis convallis. Vivamus sed tellus nec sapien vestibulum faucibus. Quisque ligula neque, lacinia sit amet orci non, cursus malesuada risus",
  //     productDetail:
  //       "Etiam maximus vitae felis at scelerisque. Nullam rutrum vel nisl et dignissim. Duis tempus pulvinar posuere. Nam scelerisque dignissim ultricies. Aliquam consectetur magna nisl, eu ultrices leo hendrerit a. Proin euismod dapibus tortor, eu gravida ante rutrum quis. Nullam fringilla venenatis felis id efficitur.",
  //   },
  //   {
  //     id: 3,
  //     productTitle: "Test album C",
  //     productPricing: 13.0,
  //     productAttributes: "Green 2lp",
  //     artist: "Halsey",
  //     productImage:
  //       "https://cdn.shopify.com/s/files/1/0117/4483/7728/products/HALSEYMANIC_2048x.png?v=1595512444",
  //     productDescription:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet urna sit amet ornare commodo. Curabitur nec enim tempus ex malesuada ornare ac quis enim. Maecenas commodo sagittis convallis. Vivamus sed tellus nec sapien vestibulum faucibus. Quisque ligula neque, lacinia sit amet orci non, cursus malesuada risus",
  //     productDetail:
  //       "Etiam maximus vitae felis at scelerisque. Nullam rutrum vel nisl et dignissim. Duis tempus pulvinar posuere. Nam scelerisque dignissim ultricies. Aliquam consectetur magna nisl, eu ultrices leo hendrerit a. Proin euismod dapibus tortor, eu gravida ante rutrum quis. Nullam fringilla venenatis felis id efficitur.",
  //   },
  // ]);
  const product = ref({});

  async function fetchProduct(id) {
    const response = await fetch(`http://localhost:8080/api/products/${id}`);
    const data = await response.json();
    product.value = data.data;
    console.log(data.data);
  }
 
  return {
    fetchProduct,
    product,
    
  };
});
