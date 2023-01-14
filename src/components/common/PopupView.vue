<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
  <!-- START LOGIN POPUP -->
	<div class="login-layer blind">
		<div class="login-popup-wrap">
			<div class="login-top">
				<img id="logo" src="@/assets/IMG/common/logo.svg" alt="login logo image" />
			</div>

			<div class="login-middle">
				<div class="login-form" id="loginForm">
					<label for="id">아이디</label>
					<input type="text" id="idInput" name="id" placeholder="아이디 입력" />

					<label for="pw">비밀번호</label>
					<input type="password" id="pwInput" name="pw" placeholder="비밀번호 입력" />

					<input type="button" id="loginOK_btn" value="로그인">
					<input type="button" value="창닫기" id="login-popup-closeBtn">
				</div>

				<div class="login-bottom">
					<div class="findCommon">ID 찾기</div>
					<div class="findCommon">PW 찾기</div>
					<div class="findCommon">회원가입</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END LOGIN POPUP -->

	<!-- START LOGOUT POPUP -->
	<div class="logout-layer blind">
		<div class="logout-popup-wrap">
			<img src="@/assets/IMG/common/worry.svg" alt="logout worry img" />
			<h1>
				정말 로그아웃 <br />
				하시겠습니까?
			</h1>

			<div class="btn-group">
				<a href="/meet-a-bwa/logoutOK.do">
					<button class="btn-logout">로그아웃</button>
				</a>
				<button class="btn-cancel">취소</button>
			</div>
		</div>
	</div>
	<!-- END LOGOUT POPUP -->

	<!-- START WARNING POPUP -->
	<div class="warning-layer blind">
		<div class="warning-popup-wrap">
			<div class="warning-img-section">
				<img src="@/assets/IMG/common/warning.svg" alt="경고 이미지" />
			</div>
			<h1 id="warning-text">로그인 후 이용가능한 기능입니다.</h1>

			<div class="btn-group">
				<button class="warning-close">취소</button>
			</div>
		</div>
	</div>
	<!-- END WARNING POPUP -->

	<!-- START ID - FIND POPUP -->
	<div id="id_find_wrap" class="find-popup-layer blind">
		<div class="find-popup-wrap">
			<div class="popup-header">
				<h1>ID 찾기</h1>
				<h3>가입 시 기입한 <br />이메일을 입력해주세요.</h3>
			</div>

			<input id="id-email-input" class="email-input" type="text" placeholder="이메일을 입력해주세요" />
			<p id="id_find_result" class="resultCommon blind"></p>

			<div class="btn-group">
				<button id="id_find_okBtn" class="btn-find">확인</button>
				<button id="id_find_cancleBtn" class="btn-cancel">취소</button>
			</div>
		</div>
	</div>
	<!-- END ID FIND POPUP -->

	<!-- START PW - FIND POPUP -->
	<div id="pw_find_wrap" class="find-popup-layer blind">
		<div class="find-popup-wrap">
			<div class="popup-header">
				<h1>비밀번호를 잊어버리셨나요?</h1>
				<h3>가입 시 기입한 <br />이메일을 입력해주세요.</h3>
			</div>

			<input id="pw-email-input" class="email-input" type="text" placeholder="이메일을 입력해주세요" />
			<p id="pw_find_result" class="resultCommon blind"></p>
			
			<input id="pw-id-input" class="email-input" type="text" placeholder="아이디를 입력해주세요" />
			<p id="pw_find_result" class="resultCommon blind"></p>

			<div class="btn-group">
				<button id="pw_find_okBtn" class="btn-find-pw">확인</button>
				<button id="pw_find_cancleBtn" class="btn-cancel">취소</button>
			</div>
		</div>
	</div>
	<!-- END PW FIND POPUP -->

	<div id="spinner-wrap" class="popup-background blind">
		<!-- START SPINNER SECTION -->
		<div id="spinner-section">
			<img src="@/assets/IMG/common/spinner.gif" class="spinner-img">
		</div>
	</div>

	<!-- START COMMON ALERT POPUP -->
	<div id="common-alert-popup-wrap" class="popup-background blind">
		<div id="common-alert-popup" class="alert-popup">
			<section class="alert-txt-section">
				<span class="common-alert-txt">
					공용 알러트팝업
				</span>
			</section>
			<section id="common-alert-btn" class="alert-btn-section" @click="close_common_popup($event.target)">
				<span>확인</span>
			</section>
		</div>
	</div>

	<!-- START COMMMON CONFIRM POPUP -->
	<div id="common-confirm-popup-wrap" class="popup-background blind">
		<div class="confirm-popup">
			<section class="confirm-txt-section">
				<span class="logout-txt">
					공용 컨펌팝업
				</span>
			</section>
			<section class="confirm-btn-section">
				<div class="confirm-yesBtn">예</div>
				<div class="confirm-noBtn">아니오</div>
			</section>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/assets/CSS/user/login.scss';
	@import '@/assets/CSS/user/logout.scss';
	@import '@/assets/CSS/user/find-popup.scss';
	@import '@/assets/CSS/user/find-pw.scss';
</style>

<script>
import $ from 'jquery';

export default {
  name: 'CommonPopupView',
  data() {
    return {

    };
  },
  methods: {
    close_common_popup(target) {
      if (target.attr('reload')) {
        target.attr('reload', false);
        window.location.reload();
      } else {
        $('#common-alert-popup-wrap').addClass('blind');
      }
    },
  },
};
</script>
