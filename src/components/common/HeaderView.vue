<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
  <div id = "menuWrap">
	    <div id = "logoSection">
	        <img src = "/IMG/common/logo.svg" alt = "logo img" id = "logo_img">
	    </div>
	    
	    <div id = "log_Section">
	    	<th:block th:if="${is_login} == null">
		        <ul id = "beforeLogin" class = "logSection">
		            <li class = "logItem">
		            	<button id = "loginBtn" class = "logBtn btn_css">로그인</button>
		            </li>
		        </ul>
	    	</th:block>
	    	
	    	<th:block th:unless="${is_login} == null">
		        <ul id = "afterLogin" class = "logSection">
		            <li class = "logItem">
				        <img src = "/IMG/common/alarm.svg" alt = "alarm_img" id = "alarm_img">
		            </li>
		            <li class = "logItem">
		           		<input type = "button" id = "mypageBtn" class = "btn_css" value = "마이페이지">
		            </li>
		            <li class = "logItem">
		            	<input type = "button" id = "logoutBtn" class = "logBtn btn_css" value = "로그아웃">
		            </li>
		        </ul>
	    	</th:block>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'HeaderView',
  props: {
    msg: String,
  },
};
</script>
