<template>
	<div class="subject">
		<ReturnHead :text="subjectData.title"></ReturnHead>
		<div class="subject_content">
			<h1 class="subject_content_title">
				{{ subjectData.title }}
				<p>
					<span>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</span>
					<strong>6.0</strong>
					<span>39406人评价</span>
				</p>
			</h1>
			<div class="subject_content_info">
				<div class="left">
					<p>{{ subjectData.genres[0] }} / {{ subjectData.genres[1] }} / {{ subjectData.genres[2] }}</p>
					<p>{{ subjectData.countries[0] }}（{{ subjectData.year }}）</p>
				</div>
				<div class="right">
					<img :src="subjectData.images.large" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ReturnHead from './common/return-header.vue'
	export default {
		components:{ ReturnHead },
		data () {
			return {
				subjectData:""
			}
		},
		mounted () {
			let vm = this;
		    this.$ajax({
		        method: 'get',
		        url: '/api/movie/subject/'+vm.$route.query.id
		    }).then(function(res){
		      vm.subjectData = res.data;
		      console.log(res);
		    })
		},
		mtdhods : {

		}
	}
</script>

<style>
	.subject_content {
		padding: 0 10px;
	}
	.subject_content_title {
		font-size: 18px;
		font-weight: 500;
		color: #333;
		padding: 10px 0;
	}
	.subject_content_title p {
		font-size: 12px;
	}
	.subject_content_title p i {
		width: 10px;
	    height: 10px;
	    display: inline-block;
	    background: url('../assets/icon_xx.png');
	    background-size: 10px 10px;
	}
	.subject_content_info {
		font-size: 14px;
		color: #333;
		display: -webkit-box;
	}
	.left {
		-webkit-box-flex: 1;
	}
	.right img {
		width: 2rem;
		height: 3rem;
	}
</style>