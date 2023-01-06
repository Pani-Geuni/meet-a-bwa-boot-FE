<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<!-- eslint-disable no-plusplus -->
<!-- eslint-disable no-lonely-if -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable no-plusplus -->
<!-- eslint-disable array-callback-return -->
<!-- eslint-disable space-before-blocks -->
<!-- eslint-disable next-line default-case-->
<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
  <HeaderView />

	<div id="bodyWrap">
		<th:block th:replace="thymeleaf/html/common/searchBar :: searchBar"></th:block>
		<router-view></router-view>
		<FooterView />
	</div>
</template>

<script>
import HeaderView from '@/components/common/HeaderView.vue';
import FooterView from '@/components/common/FooterView.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
