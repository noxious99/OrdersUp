<template>
  <div class="flex justify-center items-center m-5 flex-wrap gap-10">
    <div
      v-for="table in tableList"
      :key="table.id"
      class="flex flex-col justify-center items-center"
    >
      <!-- <div
        class="w-[250px] h-[100px] mx-2 mb-2 text-h6 text-black elevation-2 text-center flex items-center justify-center rounded-xl"
        :class="table.orderPlaced ? 'bg-green-600' : 'bg-yellow-200'"
      >
        <div class="flex flex-col items-center">
          <div class="d-flex">
            <p>Table No.</p>
            <p>{{ table.id }}</p>
          </div>
          <div>{{ table.orderNo !== 0 ? "order placed" : "empty" }}</div>
        </div>
      </div> -->

      <!-- table card starts -->
      <div
        class="mt-5 relative w-[380px] h-[200px] bg-[url('../assets/woodTex.jpg')] bg-cover rounded-md shadow-md shadow-slate-800"
      >
        <div
          v-if="table.paid"
          class="absolute top-[40%] left-[15%] font-bold text-3xl text-red-800 [text-shadow:_1px_1px_10px_rgb(252_160_157_/_50%)]"
        >
          Enjoy Your Food!
        </div>
        <div v-else>
          <button
            :disabled="table.orderPlaced"
            @click="assignTable(table.id), setPaymentFormShow"
            :class="
              table.orderPlaced
                ? 'bg-gray-400 text-decoration-line-through'
                : 'bg-[#fc0309]'
            "
            class="absolute bottom-0 right-0 px-4 py-2 rounded-md mx-2 my-2 text-center font-semibold text-white"
          >
            Place Order to this Table
          </button>
          <div
            class="absolute top-0 left-0 mx-3 my-3 flex justify-evenly gap-5"
          >
            <p
              class="text-white font-bold text-lg [text-shadow:_1px_1px_10px_rgb(0_0_0_/_80%)]"
            >
              Table No. {{ table.id }}
            </p>
            <p
              class="text-white font-bold text-lg [text-shadow:_1px_1px_10px_rgb(0_0_0_/_80%)]"
            >
              Order No.
              {{ table.orderPlaced ? table.orderNo : "none" }}
            </p>
            <p
              class="text-white font-bold text-lg [text-shadow:_1px_1px_10px_rgb(0_0_0_/_80%)]"
            >
              Due: {{ table.orderPlaced ? table.due : "0" }}
            </p>
          </div>
          <div class="absolute top-[40%] left-[15%]">
            <div v-if="table.orderPlaced" class="flex flex-row gap-2">
              <input
                type="text"
                placeholder="Insert amount 500tk"
                :value="table.due"
                class="bg-gray-200 px-4 py-2 rounded-lg"
              />
              <button
                @click="completeOrder(table.id)"
                class="bg-[#fc0303] px-4 py-2 text-white rounded-md font-bold"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- table card ends -->

      <!-- <div class="flex flex-col items-center gap-2">
        <button
          :disabled="table.orderPlaced"
          @click="assignTable(table.id)"
          class="px-4 py-2 rounded-lg text-white elevation-1"
          :class="
            table.orderPlaced
              ? 'bg-gray-400 text-decoration-line-through'
              : 'bg-blue-500'
          "
        >
          Place Food to this Table
        </button>
        <div v-if="table.orderPlaced && !table.paid">
          <button
            @click="setPaymentFormShow"
            v-show="!paymentFormShow"
            class="bg-red-600 px-4 py-2 rounded-md text-white elevation-1"
          >
            Pay
          </button>
          <form v-show="paymentFormShow" @submit.prevent="onSubmit">
            <input
              type="text"
              placeholder="Insert the Amount to Pay"
              class="bg-gray-200 py-2 px-2 text-black w-[100px] rounded-lg border-2 transition-all duration-1000 focus:w-[200px]"
            />
            <button
              class="bg-green-600 px-3 py-2 rounded-lg ring-2 ring-offset-1 ring-green-800 ml-2 text-white"
              @click="completeOrder(table.id)"
            >
              Complete Payment
            </button>
          </form>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentFormShow: false,
    };
  },
  computed: {
    tableList() {
      return this.$store.state.tables;
    },
  },
  methods: {
    assignTable(id) {
      this.$store.commit("tableAssign", id);
    },
    setPaymentFormShow() {
      this.paymentFormShow = !this.paymentFormShow;
    },
    completeOrder(tableId) {
      this.$store.commit("completeOrder", tableId);
    },
  },
};
</script>
