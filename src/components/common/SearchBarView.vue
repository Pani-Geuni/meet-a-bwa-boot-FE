<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
	<div id="searchWrap">
		<div id="searchBar">
			<select id="category" class="selectCommon">
				<option class="optionCommon">모임</option>
				<option class="optionCommon">액티비티</option>
			</select>
			<img src="@/assets/IMG/common/line.svg" alt="line 이미지" class="line">
			<select id="detailCategory" class="selectCommon">
				<option class="optionCommon detailCate_list" idx="0" value="전체">전체</option>
			</select>
			<img src="@/assets/IMG/common/line.svg" alt="line 이미지" class="line">
			<img src="@/assets/IMG/common/search.svg" alt="search 이미지" id="searchImg">
			<input type="text" id="searchWord" autocomplete="off" placeholder="모임/액티비티 검색" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/assets/CSS/common/searchBar.scss'
</style>

<script>
export default {
  name: 'SearchBarView',
};
</script>
