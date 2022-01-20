<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-3 mb-2" v-for="(product,index) in products" :key="index">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <strong>{{product.price}}</strong>
            <p class="card-text">{{product.description}}</p>
            <a href="#" class="btn btn-primary" @click="addtocart(index)">Add</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Home',
  data(){
    return {
      products: []
    }
  },
  mounted(){
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
          this.products = response.data
        })
  },
  methods:{
    addtocart(id){
      let product = {
        id: this.products[id].id ,
        title: this.products[id].title,
        image: this.products[id].image,
        price: this.products[id].price,
        qty: 1
      }

      this.$store.dispatch('addtocart',product)
    }
  }
}
</script>
