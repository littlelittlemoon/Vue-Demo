const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 0,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      }, 
      {
        id: 1,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 2,
        name: '《计算机网络》',
        date: '2007-9',
        price: 65.00,
        count: 1
      },
      {
        id: 3,
        name: '《计算机操作系统》',
        date: '2004-7',
        price: 46.00,
        count: 1
      },
      {
        id: 4,
        name: '《编译原理》',
        date: '2008-3',
        price: 76.00,
        count: 1
      }
    ]
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;

      // for(let index in this.books) {
      //   totalPrice += this.books[index].count * this.books[index].price;
      // }

      for(book of this.books) {
        totalPrice += book.count * book.price;
      }
      
      return totalPrice;
    },
    totalCount() {

    }
  },
  methods: {
    decrement(index) {
      if (this.books[index].count > 1) {
        this.books[index].count --;
      }
    },
    increment(index) {
      this.books[index].count ++;
    },
    remove(index) {
      this.books.splice(index, 1);
    }
  },
  filters: {
    printedPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
});