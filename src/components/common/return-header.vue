<template>
	<div class="return_header">
		<i class="icon" @click="returns"></i>
		<span>{{ text }}</span>
	</div>
</template>
<script>
	export default {
		props:['text'],
		data () {
			return {

			}
		},
		methods:{
			returns () {
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	.return_header {
		width: 100%;
		height: 45px;
		background-color: #d43c33;
		line-height: 45px;
		position: relative;
	}
	.return_header .icon {
		width: 24px;
	    height: 24px;
	    display: inline-block;
	    background: url('../../assets/icon_return.png');
	    background-size: 24px 24px;
	    position: absolute;
	    top: 11px;
		left: 10px;
	}
	.return_header span {
		color: #fff;
		font-size: 16px;
		text-align: center;
		display: block;
		width: 100%;
		float: left;
	}
</style>