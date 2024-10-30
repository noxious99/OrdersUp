import { createStore } from 'vuex';

export default createStore({
  state: {
    tables: [
        {
            id: 1,
            orderNo : 0,
            paid: false,
            orderPlaced: false,
            due:0
        },
        {
          id: 2,
          orderNo : 0,
          paid: false,
          orderPlaced: false,
          due: 0
        },
        {
          id: 3,
          orderNo : 0,
          paid: false,
          orderPlaced: false,
          due: 0
        },
        {
          id: 4,
          orderNo : 0,
          paid: false,
          orderPlaced: false,
          due: 0
        },
        {
          id: 5,
          orderNo : 0,
          paid: false,
          orderPlaced: false,
          due: 0
        },
        {
          id: 6,
          orderNo : 0,
          paid: false,
          orderPlaced: false,
          due: 0
        },
    ],
    items: [
        {
            id: 1,
            title: "Burger",
            price: 300,
            image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
        },
        {
            id: 2,
            title: "Pizza",
            price: 550,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
        },
        {
            id: 3,
            title: "Naga Wings",
            price: 150,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHa0UOm4ntNfX5gnA8VrKHC0yW0Xdc4J6kA&s"
        },
        {
            id: 4,
            title: "Pasta",
            price: 350,
            image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-01-Caramelized-Tomato-Paste-Pasta%2F06-CARAMELIZED-TOMATO-PASTE-PASTA-039"
        },
    ],
    currentOrder: [],
    totalPay: 0,
    myOrder: {},
    orderList: []
  },
  mutations: {
    addToOrder(state, item) {
        const existingItem = state.currentOrder.find(orderedItem => orderedItem.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1; 
        } else {
          state.currentOrder.push({ ...item, quantity: 1 });
        }
      },
    updateQuantity(state, { itemId, quantity }) {
        const item = state.currentOrder.find(orderedItem => orderedItem.id === itemId);
        if (item) {
          item.quantity = quantity;
        }
        if(item.quantity <= 0){
            state.currentOrder =  state.currentOrder.filter(orderedItem => orderedItem.id !== item.id)
        }
    },
    totalPay(state) {
        let sum = 0;
        state.currentOrder.forEach((item) => {
          sum += item.price * item.quantity;
        });
        state.totalPay = sum;
    },
    confirmOrder(state) {
        state.myOrder.orderId = Math.floor(Math.random() * 10000000000);
        state.myOrder.AmountNotPaid = state.totalPay;
    },
    tableAssign(state, tableId) {
        state.table = state.tables.map(table => table.id === tableId? {...table.orderNo = state.myOrder.orderId, ...table.orderPlaced = true, ...table.due = state.totalPay} : table)
    },
    completeOrder(state, tableId ){
      const orderCompleteState = {
        orderId : state.myOrder.orderId,
        fooditem: state.currentOrder,
        price: state.totalPay,
        assignTable: tableId,
      }
      state.table = state.tables.map(table => table.id === tableId? {...table.due = 0, ...table.paid = true} : table)
      state.orderList.push(orderCompleteState);
      console.log(JSON.stringify(state.orderList))
      localStorage.setItem("Orders", JSON.stringify(state.orderList))
    }
  },
  actions: {
  },
  getters: {
    totalPay(state){
        let sum = 0;
        state.currentOrder.forEach((item) => {
          sum += item.price * item.quantity;
        });
        return sum;
    }
  },
  modules: {},
});