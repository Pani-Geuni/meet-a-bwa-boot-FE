<!-- eslint-disable linebreak-style -->
<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
  <HeaderView />

	<div id="bodyWrap">
		<SearchBarView />
		<router-view></router-view>
		<FooterView />
	</div>

  <PopupView />
  <ToastView />
</template>

<script>
import HeaderView from '@/components/common/HeaderView.vue';
import FooterView from '@/components/common/FooterView.vue';
import SearchBarView from '@/components/common/SearchBarView.vue';
import PopupView from '@/components/common/PopupView.vue';
import ToastView from '@/components/common/ToastView.vue';

export default {
  name: 'MainLayout',
  components: {
    HeaderView,
    SearchBarView,
    PopupView,
    ToastView,
    FooterView,
  },
};
</script>

<style lang="scss">
  @import '@/assets/CSS/common/common.scss';
</style>
