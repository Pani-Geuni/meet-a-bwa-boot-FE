<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
	<div id="contentWrap">
	<div id="recommendAct" class="mainContent">
		<div class="titleSection">
			<section class="title titleLeft">
				<section id="beforeLogin_recommend" class="">
					<span class="comment">어떤 액티비티에 관심있으신가요?</span>
				</section>
			</section>

			<section class="title titleRight">
				<span id="plusBtn_act" class="plusBtn">정렬</span>
			</section>
		</div>
		<!-- END ACTIVITY TITLE SECTION -->

		<div id="cate_tag_section">
			<!-- 액티비티 태그 SECTION-->
			<div id="cate_tag_section">
				<div id="unfold_tag">
					<span class="tagItem check">전체</span>
					<span class="tagItem">취미</span>
					<span class="tagItem">팬클럽</span>
					<span class="tagItem">방송/연예</span>
					<span class="tagItem">스포츠/레저</span>
					<span class="tagItem">게임</span>
					<span class="tagItem">만화/애니메이션</span>
					<span class="tagItem">맛집/요리</span>
					<span class="tagItem">생활정보/인테리어</span>

					<span class="tag_plus">
						<img src="@/assets/IMG/common/더보기.svg" alt="더보기 이미지" id="plusImg">
						<img src="@/assets/IMG/main/fold.svg" alt="접기 이미지" id="foldImg" class="blind">
					</span>
				</div>

				<div id="fold_tag" class="blind">
					<ul id="tagUl">
						<li class="tag_li">
							<span class="tagItem">건강/다이어트</span>
							<span class="tagItem">패션/뷰티</span>
							<span class="tagItem">여행/캠핑</span>
							<span class="tagItem">반려동물/동물</span>
							<span class="tagItem">문화/예술</span>
							<span class="tagItem">음악</span>
							<span class="tagItem">어학/외국어</span>
							<span class="tagItem">취업/자격증</span>
						</li>
						<li class="tag_li">
							<span class="tagItem">교육/공부</span>
							<span class="tagItem">IT/컴퓨터</span>
							<span class="tagItem">인문/과학</span>
							<span class="tagItem">경제/재테크</span>
							<span class="tagItem">종교/봉사</span>
							<span class="tagItem">일상/이야기</span>
							<span class="tagItem">나이/또래모임</span>
						</li>
						<li class="tag_li">
							<span class="tagItem">친목/모임</span>
							<span class="tagItem">자연/귀농</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- END TAG SECTION -->

		<div id="activity-list-section">
			<block v-if="this.list.length !== 0">
				<div v-for="avo in this.list" :key="avo" class="content-list activity-list" :idx="avo.activity_no">
					<div class="info-list-wrap">
						<div class="listCommon">
							<span class="content_title">{{ avo.activity_name }}</span>
						</div>

						<div class="description_list listCommon">
							<span class="content_description">
								{{ avo.activity_info }}
							</span>
						</div>

						<div class="listCommon">
							<div class="tagSection">
								<div v-if="avo.activity_county !== null" class="loca_tag tag">
									<img src="@/assets/IMG/common/map.png" class="tag_img">
									<span class="location_name font_size_10">{{ avo.activity_county }}</span>
								</div>

								<div v-if="avo.activity_interest !== null" class="cate_tag tag">
									<span class="category_name font_size_10">{{ avo.activity_interest }}</span>
								</div>
							</div>
						</div>

						<div class="content_img">
							<img :src="avo.activity_image" class="list_img">
						</div>
					</div>


					<div class="bottomWrap">
						<div class="meet_info">
							<div v-if="avo.user_cnt !== null" class="meet_member_info">
								<span class="member_cnt member_ment">{{avo.user_cnt}}명</span>
								<span class="member_ment">참여 중</span>
							</div>
						</div>

						<div class="likeWrap">
							<section class="heartSection" :idx="avo.activity_no">
								<img src="@/assets/IMG/common/heart-outlined.svg" alt='라인하트이미지' class="beforeLike_heart heartCommon" />
								<img src="@/assets/IMG/common/heart-filled.svg" alt='풀하트이미지' class="afterLike_heart heartCommon blind" />
							</section>
							<span class="likeCnt">{{ avo.like_cnt }}</span>
						</div>
					</div>
				</div>
			</block>

			<div v-if="this.list.length === 0" class="no-list-wrap">
				<img class="no-list-img" src="@/assets/IMG/common/blue_warning.svg" alt='파란 경고 이미지' />
				<p class="no-list-txt">해당 카테고리와 관련된 액티비티가 존재하지 않습니다.</p>
			</div>
		</div>
	</div>
	<!-- END ACT recommend SECTION -->
</div>
<!-- end recommendAct -->
</div>
<!-- end contentWrap -->
</template>

<style lang="scss">
  @import '@/assets/CSS/list/activity-list.scss';
</style>

<script>
export default {
  name: 'ActivityListView',
  data() {
    return {
      list: [],
      interest_list: [],
    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>
