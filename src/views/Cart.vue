<template>
  <div>
    <h2>Cart Page</h2>

    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row,index) in this.$store.state.cart" :key="index">
          <td>{{++index}}</td>
          <td>{{row.title}}</td>
          <td>{{row.price}}</td>
          <td><input type="number" :value="row.qty" ></td>
          <td>{{row.price*row.qty}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mehtods:{
    
  }
}
</script>