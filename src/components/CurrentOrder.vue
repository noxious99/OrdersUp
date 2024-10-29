<template>
  <div>
    <div
      class="my-2 text-center py-3 px-5 rounded-xl elevation-2 align-center flex justify-space-between bg-grey-lighten-4"
      v-for="item in currentOrder"
      :key="item.id"
    >
      <img
        :src="item.image"
        style="
          width: 80px;
          background-size: cover;
          height: 80px;
          border-radius: 10px;
        "
      />

      <div class="d-flex flex-column flex-start align-start">
        <p class="text-h6 font-weight-bold">
          {{ item.title }}
        </p>
        <div class="d-flex align-center my-1">
          <button
            @click="decreaseQuantity(item.id)"
            class="mr-2 bg-red-700 px-2 h-6 w-6 text-white rounded-xl font-bold"
          >
            -
          </button>
          <p class="text-h6">x{{ item.quantity }}</p>
          <button
            @click="increaseQuantity(item.id)"
            class="ml-2 bg-green-700 w-6 h-6 text-white rounded-xl font-bold"
          >
            +
          </button>
        </div>
        <p class="justify-end text-grey-darken-1">
          subtotal: {{ item.price * item.quantity }}tk
        </p>
      </div>
    </div>
  </div>
  <div
    v-if="totalValue > 0"
    class="flex gap-2 justify-center items-center text-white"
  >
    <p>Total Amount to Pay:</p>
    <p class="font-italic text-h6 text-red-600 font-weight-bold">
      {{ totalValue }}/=
    </p>
  </div>
  <div
    v-if="totalValue > 0"
    class="px-4 py-2 bg-green-600 transition-all duration-200 hover:bg-green-900 text-white rounded-sm elevation-2 my-2"
  >
    <RouterLink to="/tables"
      ><button
        @click="
          this.$store.commit('totalPay'), this.$store.commit('confirmOrder')
        "
      >
        Confirm Order
      </button></RouterLink
    >
  </div>
</template>

<script>
export default {
  computed: {
    currentOrder() {
      return this.$store.state.currentOrder;
    },
    totalValue() {
      return this.$store.getters.totalPay;
    },
  },
  methods: {
    increaseQuantity(itemId) {
      const item = this.$store.state.currentOrder.find((i) => i.id === itemId);
      if (item) {
        this.$store.commit("updateQuantity", {
          itemId,
          quantity: item.quantity + 1,
        });
      }
    },
    decreaseQuantity(itemId) {
      const item = this.$store.state.currentOrder.find((i) => i.id === itemId);
      if (item) {
        this.$store.commit("updateQuantity", {
          itemId,
          quantity: item.quantity - 1,
        });
      }
    },
    confirmOrder() {},
  },
};
</script>
