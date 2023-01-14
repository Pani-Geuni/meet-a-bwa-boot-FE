<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
  <div id = "menuWrap">
		<router-link to = '/'>
			<div id = "logoSection">
				<img src = "@/assets/IMG/common/logo.svg" alt = "logo img" id = "logo_img">
			</div>
		</router-link>
		
		<div id = "log_Section">
			<ul v-if="!this.$store.state.isLogin" id = "beforeLogin" class = "logSection">
				<li class = "logItem">
					<button id = "loginBtn" class = "logBtn btn_css" @click="show_loginPopup">로그인</button>
				</li>
			</ul>
			
			<ul v-if="this.$store.state.isLogin" id = "afterLogin" class = "logSection">
				<li class = "logItem">
					<img src = "@/assets/IMG/common/alarm.svg" alt = "alarm_img" id = "alarm_img">
				</li>
				<router-link to = '/mypage'>
					<li class = "logItem">
						<input type = "button" id = "mypageBtn" class = "btn_css" value = "마이페이지">
					</li>
				</router-link>
				<li class = "logItem">
					<input type = "button" @click="show_logoutPopup" id = "logoutBtn" class = "logBtn btn_css" value = "로그아웃">
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/assets/CSS/common/header.scss'
</style>

<script>
import $ from 'jquery';

export default {
  name: 'HeaderView',
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {
    show_loginPopup() {
      $('.login-layer').removeClass('blind');
    },
    show_logoutPopup() {
      $('.logout-layer').removeClass('blind');
    },
  },
};
</script>
