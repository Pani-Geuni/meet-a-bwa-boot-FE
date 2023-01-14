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
				<option class="optionCommon detailCate_list" value="전체">전체</option>
				<option v-for="category in this.categoryArr" :key="category" class="optionCommon detailCate_list" :value="category">{{ category }}</option>
			</select>
			<img src="@/assets/IMG/common/line.svg" alt="line 이미지" class="line">
			<img src="@/assets/IMG/common/search.svg" alt="search 이미지" id="searchImg">
			<input type="text" @keydown.enter="do_search" id="searchWord" autocomplete="off" placeholder="모임/액티비티 검색" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/CSS/common/searchBar.scss';
</style>

<script>
import $ from 'jquery';
import categoryArr from '@/assets/json/cate.json';

export default {
  name: 'SearchBarView',
  data() {
    return {
      categoryArr: categoryArr.category,
      router: this.$router,
    };
  },
  methods: {
    do_search() {
      if ($('#category').val() === '모임') {
        this.router.push({
          name: 'MeetList',
          params: {
            searchWord: $('#searchWord').value.trim(),
            category: $('#detailCategory').value,
          },
        });
      } else if ($('#category').val() === '액티비티') {
        this.router.push({
          name: 'ActivityList',
          params: {
            searchWord: $('#searchWord').value.trim(),
            category: $('#detailCategory').value,
					 },
        });
      }
    },
  },
};
</script>
