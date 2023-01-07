<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
	<!-- START contentWrap-->
	<div id="contentWrap">
		<div class="mainContent">
			<div class="titleSection">
				<section class="title titleLeft">
					<section id="beforeLogin_recommend">
						<span class="comment">관심이 있는 모임을 보여드려요!</span>
					</section>
				</section>

				<section class="title titleRight">
					<button v-if="this.$store.state.isLogin === true" class="btn-create-meet">모임 생성</button>
					<span id="plusBtn_meet" class="plusBtn">정렬</span>
				</section>
			</div>

			<div id="meet-list-section">
				<block v-if="this.list.length > 0">
					<div v-for="meet in this.list" :key="meet" class="content-list meet-list" :idx="meet.meet_no">
						<div class="info-list-wrap">
							<div class="listCommon">
								<span class="content_title">{{ meet.meet_name }}</span>
							</div>

							<div class="description_list listCommon">
								<span class="content_description">{{ meet.meet_info }}</span>
							</div>

							<div class="listCommon">
								<div class="tagSection">
										<div v-if="meet.meet_county !== null" class="loca_tag tag">
											<img src="@/assets/IMG/common/map.png" class="tag_img">
											<span	class="location_name font_size_10">{{ meet.meet_county }}</span>
										</div>

										<div v-if="meet.meet_interest_name !== null" class="cate_tag tag">
											<span class="category_name font_size_10">{{ meet.meet_interest_name }}</span>
										</div>
								</div>
							</div>

							<div class="content_img">
								<img :src="meet.meet_image" class="list_img">
							</div>
						</div>


						<div class="bottomWrap">
							<div class="meet_info">
								<div v-if="meet.user_cnt !== null" class="meet_member_info">
									<span class="member_cnt member_ment">{{meet.user_cnt}}명</span>
									<span class="member_ment">참여 중</span>
								</div>

								<!-- 조건있는 모임(조건없을 시 hide 클래스 추가) -->
								<div v-if="meet.meet_age !== null" class="meet_condition">
									<img src="@/assets/IMG/common/line.svg" alt="line이미지" class="divide">
									<span class="condition_bold condition_common"><b>모집</b></span>
									<span v-for="age in meet.meet_age_arr" :key="age" class="condition_regular condition_common age_condition"> {{ age }} </span>
								</div>
							</div>

							<div class="likeWrap">
								<section class="heartSection" :idx="meet.meet_no">
									<img src="@/assets/IMG/common/heart-outlined.svg" alt='라인하트이미지' class="beforeLike_heart heartCommon" />
									<img src="@/assets/IMG/common/heart-filled.svg" alt='풀하트이미지' class="afterLike_heart heartCommon blind" />
								</section>
								<span class="likeCnt">{{ meet.like_cnt }}</span>
							</div>
						</div>
					</div>
				</block>

				<div v-if="this.list.length === 0" class="no-list-wrap">
					<img class="no-list-img" src="@/assets/IMG/common/blue_warning.svg" alt='파란 경고 이미지' />
					<p class="no-list-txt">관련된 모임이 존재하지 않습니다.</p>
				</div>
			</div>
			<!-- end meet-list-section -->
		</div>
	</div>
</template>

<style lang="scss">
  @import '@/assets/CSS/list/meet-list.scss';
</style>

<script>
export default {
  name: 'MeetListView',
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
