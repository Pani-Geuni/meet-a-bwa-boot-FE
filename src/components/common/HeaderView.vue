<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
  <div id = "menuWrap">
	    <div id = "logoSection">
	        <img src = "@/assets/IMG/common/logo.svg" alt = "logo img" id = "logo_img">
	    </div>
	    
	    <div id = "log_Section">
					<ul v-if="this.$store.state.isLogin === false" id = "beforeLogin" class = "logSection">
						<li class = "logItem">
							<button id = "loginBtn" class = "logBtn btn_css">로그인</button>
						</li>
					</ul>
	    	
				<ul v-if="this.$store.state.isLogin === true" id = "afterLogin" class = "logSection">
						<li class = "logItem">
							<img src = "@/assets/IMG/common/alarm.svg" alt = "alarm_img" id = "alarm_img">
						</li>
						<li class = "logItem">
							<input type = "button" id = "mypageBtn" class = "btn_css" value = "마이페이지">
						</li>
						<li class = "logItem">
							<input type = "button" id = "logoutBtn" class = "logBtn btn_css" value = "로그아웃">
						</li>
				</ul>
	    </div>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/assets/CSS/common/header.scss'
</style>

<script>
export default {
  name: 'HeaderView',
};
</script>
