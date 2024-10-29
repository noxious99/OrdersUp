<template>
  <div
    class="flex flex-col md:flex-row md:items-start md:gap-[100px] gap-[60px] mt-5 justify-center items-center"
  >
    <div class="font-weight-bold w-[380px] md:w-[500px] text-center">
      <p
        class="text-xl text-white bg-[#fc0303] py-5 px-6 rounded-md elevation-1"
      >
        MY ORDER
      </p>
      <CurrentOrder />
      <!-- <div v-if="Object.keys(this.$store.state.myOrder).length > 0">
        <div class="flex gap-2">
          <p>Order Id:</p>
          <p>
            #{{
              this.$store.state.myOrder && this.$store.state.myOrder.orderId
            }}
          </p>
        </div>
        <div class="flex gap-2">
          <p>Not Paid:</p>
          <p>
            #{{
              this.$store.state.myOrder &&
              this.$store.state.myOrder.AmountNotPaid
            }}
          </p>
        </div>
      </div> -->
    </div>

    <div class="font-weight-bold w-[380px] md:w-[500px]">
      <v-btn
        block
        style="
          color: white;
          height: 70px;
          background-color: red;
          font-size: 18px;
          font-weight: 700;
        "
      >
        Chose Your Food Item!!
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.id"
              :value="item.id"
              class="my-2"
            >
              <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
              <div class="d-flex items-center py-2">
                <div class="mr-5">
                  <v-img
                    :width="60"
                    :height="60"
                    cover
                    :src="item.image"
                    class="rounded-xl"
                  ></v-img>
                </div>
                <div>
                  <div class="text-lg">{{ item.title }}</div>
                  <div class="text-lg">
                    <p class="font-italic">$: {{ item.price }}</p>
                  </div>
                </div>
                <div class="ml-10 bg-green-700 px-3 py-1 text-white rounded-lg">
                  <button
                    @click="$store.commit('addToOrder', item)"
                    class="text-h5 font-weight-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <!-- <div
        class="mt-5 relative w-[400px] h-[200px] bg-[url('../assets/woodTex.jpg')] bg-cover rounded-md"
      >
        <button
          class="absolute bottom-0 right-0 px-4 py-2 bg-green-600 rounded-md mx-2 my-2 text-center font-semibold text-white"
        >
          Place Order to this Table
        </button>
        <div class="absolute top-0 left-0 mx-3 my-3 flex justify-evenly gap-5">
          <p class="text-white font-bold text-lg">Table No. 7</p>
          <p class="text-white font-bold text-lg">Order No. None</p>
        </div>
        <div class="absolute top-[40%] left-[10%]">
          <div class="flex flex-row gap-2">
            <input
              type="text"
              placeholder="Insert amount 500tk"
              class="bg-gray-200 px-4 py-2 rounded-lg"
            />
            <button class="bg-green-600 px-4 py-2 text-white rounded-md">
              Pay
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import CurrentOrder from "../components/CurrentOrder.vue";
export default {
  components: {
    CurrentOrder,
  },
  data() {
    return {
      items: this.$store.state.items,
    };
  },
  methods: {
    addToOrder() {},
  },
};
</script>
