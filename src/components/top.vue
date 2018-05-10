<template>
  <div class="home">
    <div class="list">
      <ul>
        <li v-for="item in homeData">
          <img :src="item.images.large" alt="">
          <h2>{{ item.title }}</h2>
          <p><span></span><span>{{ item.rating.average }}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  components:{},
  data () {
    return {
      homeData:""
    }
  },
  mounted () {
    let vm = this;
    this.$ajax({
        method: 'get',
        url: '/api/movie/top250'
    }).then(function(res){
      vm.homeData = res.data.subjects;
      console.log(res);
    })
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list {
    width: 100%;
  }
  .list ul {
    overflow: hidden;
  }
  .list ul li {
    width: 33.3%;
    height: 4.5rem;
    text-align: center;
    float: left;
    padding: 0 3px;
  }
  .list ul li img {
    width: 2rem;
    height: 3rem;
  }
</style>
