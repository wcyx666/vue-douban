<template>
  <div class="home">
    <Head></Head>
    <div class="list">
      <ul>
        <li v-for="item in homeData">
          <router-link :to="{ name:'Subject',query:{ id:item.id } }">
            <img :src="item.images.large" alt="">
            <h2>{{ item.title }}</h2>
            <p v-if="item.rating.average != 0">
              <i :class="{ iconCor:true }"></i>
              <i :class="{ iconCor:true }"></i>
              <i :class="{ iconCor:true }"></i>
              <i :class="{ iconCor:true }"></i>
              <i :class="{ iconCor:true }"></i>
              <span>{{ toFixed(item.rating.average) }}</span>
            </p>
            <p v-else class="rank">暂无评分</p>
          </router-link>  
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Head from './common/header.vue'
export default {
  name: 'HelloWorld',
  components:{ Head },
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
    toFixed (val) {
      return val.toFixed(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list {
    width: 100%;
    padding-top: 10px;
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
  .list ul li a {
    color: #333;
  }
  .list ul li img {
    width: 2rem;
    height: 3rem;
  }
  .list ul li h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 5px;
  }
  .list ul li p i {
    width: 10px;
    height: 10px;
    display: inline-block;
    background: url('../assets/icon_xx.png');
    background-size: 10px 10px;
  }
  .rank {
    color: #9b9b9b;
  }
</style>
