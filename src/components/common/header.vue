<template>
	<div class="header">
		<div class="header_top">
			<h2>Vue简单案例 - 豆瓣电影</h2>
		</div>
		<div class="header_tab">
			<ul>
				<li>
					<router-link :to="{name:'Home'}">
						正在热映
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'Soon'}">
						即将上映
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'Top'}">
						Top250
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style>
	.header {
		width: 100%;
	}
	.header_top {
		width: 100%;
		height: 64px;
		line-height: 64px;
		background-color: #d43c33;
		padding: 0 20px;
		font-size: 16px;
		color: #fff;
	}
	.header_tab {
		width: 100%;
		display:-moz-box;
	    display:-webkit-box;
	    display:box;
	}
	.header_tab ul {
		width: 100%;
	}
	.header_tab ul li {
		width: 33.3%;
		float: left;
		-webkit-box-flex: 1;
		text-align: center;
	}
	.header_tab ul li a {
		position: relative;
		display: inline-block;
		height: 100%;
		padding: 0 5px;
		box-sizing: border-box;
		color: #333;
		font-size: 15px;
		line-height: 40px;
	}
	.header_tab ul li a.router-link-active {
		color: #d33a31;
		border-bottom: 1px solid #d33a31;
	}
</style>