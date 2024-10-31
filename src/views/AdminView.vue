<template>
  <div class="m-5">
    <div
      class="w-100 bg-[#fc0303] text-white py-4 flex flex-col md:flex-row justify-center gap-10 items-center rounded-lg elevation-1"
    >
      <p class="font-bold text-2xl">Total Order Completed</p>
      <p class="font-semibold text-xl">{{ date }}</p>
    </div>
    <div v-for="order in orders" :key="order.orderId">
      <div
        class="py-4 flex flex-col justify-center items-center text-center bg-[#850000] text-white mt-5 rounded-lg elevation-1 font-semibold"
      >
        <p>Order Id: {{ order.orderId }}</p>
        <p>Order For Table: {{ order.assignTable }}</p>
        <div class="flex gap-2">
          <p>Items:</p>
          <p v-for="item in order.fooditem">{{ item.title }} ,</p>
        </div>
        <p>Total Cost: {{ order.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let orders = [];
    try {
      orders = JSON.parse(localStorage.getItem("Orders")) || [];
    } catch (e) {
      console.error("Failed to parse orders from localStorage", e);
    }
    return {
      date: new Date().toLocaleDateString(),
      orders,
    };
  },
};
</script>
