<!-- eslint-disable -->

<!--
 - @author 김예은
 - @refactoring 김예은
-->

<template>
	<div id="contentWrap">
		
		<!-- ****************** 모임 추천 ****************** -->
		<div id="recommendMeet" class="mainContent">
			<div class="titleSection">
				<!-- 로그인 전, 추천-->
				<section v-if="!this.$store.state.isLogin" class="title titleLeft">
					<section id="beforeLogin_recommend">
						<span class="comment">안녕하세요! 현재 가장 인기있는 모임 추천해드려요!</span>
					</section>
				</section>

				<!-- 로그인 성공 후, 추천 -->
				<section class="title titleLeft">
					<section v-if="this.$store.state.isLogin"  id="afterLogin_recommend">
						<span id="nickname">"{{ this.list.nick_name }}"님의 </span>
						<span class="region_comment comment">거주지 주변 모임 추천해드려요!</span>
					</section>
				</section>

				<section class="title titleRight">
					<span id="plusBtn_meet" class="plusBtn">+더보기</span>
				</section>
			</div>

			<!-- START Meet RECOMMEND SECTION -->
			<div id="meet_recommendSection" v-if="this.u_list.length > 0">
				<!-- start content_list div-->
				<div class="content_list meet-list" v-for="mvo in this.u_list" :key="mvo" :idx="mvo.meet_no">
					<div class="info-list-wrap">
						<div class="listCommon">
							<span class="content_title">{{ mvo.meet_name }}</span>
						</div>

						<div class="description_list listCommon">
							<span class="content_description">
								{{ mvo.meet_info }}
							</span>
						</div>

						<div class="listCommon">
							<div class="tagSection">
								<div :class="{'loca_tag tag' : mvo.meet_county !== null, 'loca_tag tag blind' : mvo.meet_county === null}">
									<img src="@/assets/IMG/common/map.png" class="tag_img">
									<span class="location_name font_size_10"> {{mvo.meet_county}} </span>
								</div>

								<div :class="{'cate_tag tag' : mvo.meet_interest_name !== null, 'cate_tag tag blind' : mvo.meet_interest_name === null}">
									<span class="category_name font_size_10"> {{mvo.meet_interest_name}} </span>
								</div>

								<div class="cate_tag tag gender_tag" :class="{'cate_tag tag gender_tag' : mvo.meet_gender !== null, 'cate_tag tag gender_tag blind' : mvo.meet_gender === null}">
									<span v-if="mvo.meet_gender === 'M'" class="gender font_size_10">남</span>
									<span v-if="mvo.meet_gender === 'W'" class="gender font_size_10">여</span>
								</div>
							</div>
						</div>

						<div class="content_img">
							<img :src="mvo.meet_image" alt="list_img" class="list_img">
						</div>
					</div>

					<div class="bottomWrap">
						<div class="meet_info">
							<div class="meet_member_info">
								<span class="member_cnt member_ment">{{mvo.user_cnt}}명</span>
								<span class="member_ment">참여 중</span>
							</div>

							<div :class="{'meet_condition age_condition_wrap' : mvo.meet_age_arr.length > 0, 'meet_condition age_condition_wrap hide' : mvo.meet_age_arr.length === 0}">
								<img src="@/assets/IMG/common/line.svg" alt="line이미지" class="divide">
								<span class="condition_bold condition_common"><b>모집</b></span>
								<span v-for="age in mvo.meet_age_arr" :key="age" class="condition_regular condition_common age_condition"> {{ age }} </span>
							</div>
						</div>

						<div class="likeWrap">
							<section class="heartSection" :idx="mvo.meet_no">
								<img src="@/assets/IMG/common/heart-outlined.svg" @click="meet_addBookMark" alt='라인하트이미지' class="beforeLike_heart heartCommon" />
								<img src="@/assets/IMG/common/heart-filled.svg" @click="meet_removeBookMark" alt='풀하트이미지' class="afterLike_heart heartCommon blind" />
							</section>
							<span class="likeCnt"> {{ mvo.like_cnt }} </span>
						</div>
					</div>
				</div>
				<!-- end content_list div -->

				<div class="no-list-wrap" v-if="this.u_list.length === 0">
					<img class="no-list-img" src="@/assets/IMG/common/blue_warning.svg" alt='파란 경고 이미지' />
					<p class="no-list-txt">관련된 모임이 존재하지 않습니다.</p>
				</div>
			</div>
			<!-- END Meet RECOMMEND SECTION -->
		</div>
		<!-- ****************** END 모임 추천 ****************** -->

		<!-- ****************** 관심사별 모임 추천 ****************** -->
		<div v-if="this.$store.state.isLogin && this.interest_list.length > 0" id="country_recommendMeet" class="mainContent">
			<div class="titleSection">
				<section class="title titleLeft">
					<section id="afterLogin_recommend">
						<span id="nickname">"{{ list.nick_name }}"님의 </span>
						<span class="interest_comment comment">
							관심사인
							<select class="user_interest_select">
								<option v-for="interest in this.interest_list.interests" :key="interest" name="user_interest" class="user_interest_li">{{ interest }}</option>
							</select>
							와(/과) 관련된 모임 추천해드려요!
						</span>
					</section>
				</section>

				<section class="title titleRight">
					<span id="plusBtn_meet_interest" class="plusBtn">+더보기</span>
				</section>
			</div>

			<!-- START Meet RECOMMEND SECTION -->
			<div id="interest_meet_recommendSection">
				<!-- start content_list div-->
				<div v-for="mvo in this.interest_meet_list" :key="mvo" :idx="mvo.meet_no" :class="{'content_list meet-list' : this.interest_meet_list.length !== 0, 'content_list meet-list blind' : this.interest_meet_list.length === 0}">
					<div class="info-list-wrap">
						<div class="listCommon">
							<span class="content_title"> {{ mvo.meet_name }} </span>
						</div>

						<div class="description_list listCommon">
							<span class="content_description"> {{ mvo.meet_info }} </span>
						</div>

						<div class="listCommon">
							<div class="tagSection">
								<div :class="{'loca_tag tag' : mvo.meet_county !== null, 'loca_tag tag blind' : mvo.meet_county === null}">
									<img src="@/assets/IMG/common/map.png" class="tag_img" />
									<span class="location_name font_size_10"> {{ mvo.meet_county }} </span>
								</div>

								<div :class="{'cate_tag tag' : mvo.meet_interest_name !== null, 'cate_tag tag blind' : mvo.meet_interest_name === null}">
									<span class="category_name font_size_10"> {{mvo.meet_interest_name}} </span>
								</div>

								<div class="cate_tag tag gender_tag" :class="{'cate_tag tag gender_tag' : mvo.meet_gender !== null, 'cate_tag tag gender_tag blind' : mvo.meet_gender === null}">
									<span v-if="mvo.meet_gender === 'M'" class="gender font_size_10">남</span>
									<span v-if="mvo.meet_gender === 'W'" class="gender font_size_10">여</span>
								</div>
							</div>

							<div class="content_img">
								<img :src="mvo.meet_image" alt="list_img" class="list_img">
							</div>
						</div>

						<div class="bottomWrap">
							<div class="meet_info">
								<div class="meet_member_info">
									<span class="member_cnt member_ment">{{mvo.user_cnt}}명</span>
									<span class="member_ment">참여 중</span>
								</div>

								<div :class="{'meet_condition age_condition_wrap' : mvo.meet_age_arr !== null, 'meet_condition age_condition_wrap hide' : mvo.meet_age_arr === null}">
									<img src="@/assets/IMG/common/line.svg" alt="line이미지" class="divide">
									<span class="condition_bold condition_common"><b>모집</b></span>
									<span v-for="age in mvo.meet_age_arr" :key="age" class="condition_regular condition_common age_condition"> {{ age }} </span>
								</div>
							</div>

							<div class="likeWrap">
								<section class="heartSection" :idx="mvo.meet_no">
									<img src="@/assets/IMG/common/heart-outlined.svg" @click="meet_addBookMark" alt='라인하트이미지' class="beforeLike_heart heartCommon" />
									<img src="@/assets/IMG/common/heart-filled.svg" @click="meet_removeBookMark" alt='풀하트이미지' class="afterLike_heart heartCommon blind" />
								</section>
								<span class="likeCnt"> {{ mvo.like_cnt }} </span>
							</div>
						</div>
					</div>
				</div>
				<!-- end content_list div -->
				
				<div v-if="this.interest_meet_list.length === 0" class="no-list-wrap">
					<img class="no-list-img" src="@/assets/IMG/common/blue_warning.svg" alt='파란 경고 이미지' />
					<p class="no-list-txt">관련된 모임이 존재하지 않습니다.</p>
				</div>
			</div>
		</div>
		<!-- ****************** END 관심사별 모임 추천 ****************** -->

		<!-- ****************** 카테고리별 액티비티 추천 ****************** -->
		<div id="recommendAct" class="mainContent">
			<div class="titleSection">
				<section class="title titleLeft">
					<section id="beforeLogin_recommend">
						<span class="comment">어떤 액티비티에 관심있으신가요?</span>
					</section>
				</section>

				<section class="title titleRight">
					<span id="plusBtn_act" class="plusBtn">+더보기</span>
				</section>
			</div>

			<div id="act_recommendSection">
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

				<div id="recommend_list_wrap">
					<!-- 액티비티가 존재할 때 -->
					<div v-if="this.a_list.length > 0" id="has_a_list">
						<div v-for="avo in this.a_list" :key="avo" class="content_list activity-list" :idx="avo.activity_no">
							<div class="info-list-wrap">
								<div class="listCommon">
									<span class="content_title">{{ avo.activity_name }}</span>
								</div>

								<div class="description_list listCommon">
									<span class="content_description">{{ avo.activity_info }}</span>
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
									<img :src="avo.activity_image" alt="list_img" class="list_img">
								</div>
							</div>

							<div class="bottomWrap">
								<div class="meet_info">
									<div class="meet_member_info">
										<span class="member_cnt member_ment">{{ avo.user_cnt }}명</span>
										<span class="member_ment">참여 중</span>
									</div>
								</div>

								<div class="likeWrap">
									<section class="heartSection" :idx="avo.activity_no">
										<img src="@/assets/IMG/common/heart-outlined.svg" @click="activity_addBookMark" alt='라인하트이미지' class="beforeLike_heart heartCommon" />
										<img src="@/assets/IMG/common/heart-filled.svg" @click="activity_removeBookMark" alt='풀하트이미지' class="afterLike_heart heartCommon blind" />
									</section>
									<span class="likeCnt">{{ avo.like_cnt }}</span>
								</div>
							</div>
						</div>
					</div>

					<!-- 액티비티가 존재하지 않을 때 -->
					<div v-if="this.a_list.length === 0" class="no-list-wrap">
						<img class="no-list-img" src="@/assets/IMG/common/blue_warning.svg" alt='파란 경고 이미지' />
						<p class="no-list-txt">해당 카테고리와 관련된 액티비티가 존재하지 않습니다.</p>
					</div>
				</div>
				<!-- END recommend_list_wrap -->
			</div>
			<!-- end act recommend section -->
		</div>
		<!-- ****************** END 카테고리별 액티비티 추천 ****************** -->

		<!-- ****************** 마감 임박 액티비티 추천 ****************** -->
		<div id="short_deadline_recommendAct" class="mainContent">
			<div class="titleSection">
				<section class="title titleLeft">
					<section id="beforeLogin_recommend" class="">
						<span class="comment">모집 기간&nbsp;<u>마감 임박</u>인 액티비티 추천드려요~!!</span>
					</section>
				</section>

				<section class="title titleRight">
					<span id="plusBtn_act_short_deadline" class="plusBtn">+더보기</span>
				</section>
			</div>

			<div id="act_recommendSection">
				<div id="recommend_list_wrap">
					<!-- 액티비티가 존재할 때 -->
					<div v-if="this.a_deadline_list.length !== 0" id="has_a_list">
						<div v-for="avo in this.a_deadline_list" :key="avo" class="content_list activity-list" :idx="avo.activity_no">
							<div class="info-list-wrap">
								<div class="listCommon">
									<span class="content_title">{{ avo.activity_name }}</span>
								</div>

								<div class="description_list listCommon">
									<span class="content_description">{{ avo.activity_info }}</span>
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
									<img :src="avo.activity_image" alt="list_img" class="list_img">
								</div>
							</div>

							<div class="bottomWrap">
								<div class="meet_info">
									<div class="meet_member_info">
										<span class="member_cnt member_ment">{{ avo.user_cnt }}명</span>
										<span class="member_ment">참여 중</span>
									</div>
								</div>

								<div class="likeWrap">
									<section class="heartSection">
										<img src="@/assets/IMG/common/heart-outlined.svg" :idx="avo.activity_no" @click="activity_addBookMark($event.target)" alt='라인하트이미지' class="beforeLike_heart heartCommon" />
										<img src="@/assets/IMG/common/heart-filled.svg" :idx="avo.activity_no" @click="activity_removeBookMark($event.target)" alt='풀하트이미지' class="afterLike_heart heartCommon blind" />
									</section>
									<span class="likeCnt">{{ avo.like_cnt }}</span>
								</div>
							</div>
						</div>
						<!-- end content_list div -->
					</div>

					<!-- 액티비티가 존재하지 않을 때 -->
					<div v-if="this.a_deadline_list.length === 0" class="no-list-wrap">
						<img class="no-list-img" src="@/assets/IMG/common/blue_warning.svg" alt='파란 경고 이미지' />
						<p class="no-list-txt">해당 카테고리와 관련된 액티비티가 존재하지 않습니다.</p>
					</div>
				</div>
				<!-- END recommend_list_wrap -->
			</div>
		</div>
		<!-- ****************** END 마감 임박 액티비티 추천 ****************** -->
	</div>
</template>

<style lang="scss">
  @import '@/assets/CSS/main/main.scss';
</style>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {
  name: 'MainView',
  data() {
    return {
      list: [],
      a_list: [],
      a_deadline_list: [],

      interest_list: [],
      interest_meet_list: [],
      interest_activity_list: [],

      meet_like_flag: true,
      activity_like_flag: true,
    };
  },
  mounted() {

  },
  methods: {
    check_login() {
      // 로그인 안되어있을 시 경고 팝업
      if (!this.$store.state.isLogin) {
        $('.warning-layer').removeClass('blind');
        return false;
      }
      return true;
    },
    /** ************************* */
    /** ****모임 좋아요 영역***** */
    /** ************************* */
    meet_addBookMark(target) {
      if (this.meet_like_flag) {
        if (!this.check_login()) {
          return;
        }

        // 로딩 화면
        $('#spinner-wrap').removeClass('blind');

        axios.post('http://localhost:8800/meet-like', {
          params: {
            meet_no: target.attr('idx'),
            user_no: $.cookie.get('user_no'),
          },
        }).then((res) => {
          this.meet_like_flag = true;

          // 로딩 화면 닫기
          $('#spinner-wrap').addClass('blind');

          if (res.data.result === '1') {
            target.next('.likeCnt').text(Number(target.next('.likeCnt').text()) + 1);
            target.find('.beforeLike_heart').addClass('blind');
            target.find('.afterLike_heart').removeClass('blind');
          } else {
            $('#common-alert-popup-wrap').removeClass('blind');
            $('.common-alert-txt').html('좋아요 추가에 실패하였습니다.');
          }
        }).catch(() => {
          this.meet_like_flag = true;

          // 로딩 화면 닫기
          $('#spinner-wrap').addClass('blind');

          $('#common-alert-popup-wrap').removeClass('blind');
          $('.common-alert-txt').html('오류로 인해 좋아요 추가에 실패하였습니다.<br>이용에 불편을 드려 죄송합니다!');
        });
      }
    },
    meet_removeBookMark(target) {
      if (this.meet_like_flag) {
        if (!this.check_login()) {
          return;
        }

        // 로딩 화면
        $('#spinner-wrap').removeClass('blind');

        axios.delete('http://localhost:8800/meet-like', {
          params: {
            meet_no: target.attr('idx'),
            user_no: $.cookie.get('user_no'),
          },
        }).then((res) => {
          this.meet_like_flag = true;

          // 로딩 화면 닫기
          $('#spinner-wrap').addClass('blind');

          if (res.data.result === '1') {
            target.next('.likeCnt').text(Number(target.next('.likeCnt').text()) - 1);
            target.find('.beforeLike_heart').removeClass('blind');
            target.find('.afterLike_heart').addClass('blind');
          } else {
            $('#common-alert-popup-wrap').removeClass('blind');
            $('.common-alert-txt').html('좋아요 삭제에 실패하였습니다.');
          }
        }).catch(() => {
          this.meet_like_flag = true;

          // 로딩 화면 닫기
          $('#spinner-wrap').addClass('blind');

          $('#common-alert-popup-wrap').removeClass('blind');
          $('.common-alert-txt').html('오류로 인해 좋아요 삭제에 실패하였습니다.<br>이용에 불편을 드려 죄송합니다!');
        });
      }
    },
    /** ****************************** */
    /** **** 액티비티 좋아요 영역 ***** */
    /** ****************************** */
    activity_addBookMark(target) {
      if (this.activity_like_flag) {
        if (!this.check_login()) {
          return;
        }

        // 로딩 화면
        $('#spinner-wrap').removeClass('blind');

        const tmp_this = $(this);

        $.ajax({
          url: '/main_activity_like_insert',
          type: 'GET',
          dataType: 'json',
          data: {
            activity_no: $(this).attr('idx'),
            user_no: $.cookie('user_no'),
          },
          success(res) {
            // 로딩 화면 닫기
            $('#spinner-wrap').addClass('blind');

            if (res.result == '1') {
              tmp_this.next('.likeCnt').text(Number(tmp_this.next('.likeCnt').text()) + 1);
              tmp_this.find('.beforeLike_heart').addClass('blind');
              tmp_this.find('.afterLike_heart').removeClass('blind');
            } else {
              $('#common-alert-popup-wrap').removeClass('blind');
              $('.common-alert-txt').html('좋아요 추가에 실패하였습니다.');
            }
          },
          error() {
            // 로딩 화면 닫기
            $('#spinner-wrap').addClass('blind');

            $('#common-alert-popup-wrap').removeClass('blind');
            $('.common-alert-txt').html('오류로 인해 좋아요 추가에 실패하였습니다.<br>이용에 불편을 드려 죄송합니다!');
          },
        });
      }
    },
    activity_removeBookMark(target) {
      if (!this.check_login()) {
        return;
      }

      // 로딩 화면
      $('#spinner-wrap').removeClass('blind');

      const tmp_this = $(this);

      $.ajax({
        url: '/main_activity_like_delete',
        type: 'GET',
        dataType: 'json',
        data: {
          activity_no: $(this).attr('idx'),
          user_no: $.cookie('user_no'),
        },
        success(res) {
          // 로딩 화면 닫기
          $('#spinner-wrap').addClass('blind');

          if (res.result == '1') {
            tmp_this.next('.likeCnt').text(Number(tmp_this.next('.likeCnt').text()) - 1);
            tmp_this.find('.beforeLike_heart').removeClass('blind');
            tmp_this.find('.afterLike_heart').addClass('blind');
          } else {
            $('#common-alert-popup-wrap').removeClass('blind');
            $('.common-alert-txt').html('좋아요 삭제에 실패하였습니다.');
          }
        },
        error() {
          // 로딩 화면 닫기
          $('#spinner-wrap').addClass('blind');

          $('#common-alert-popup-wrap').removeClass('blind');
          $('.common-alert-txt').html('오류로 인해 좋아요 삭제에 실패하였습니다.<br>이용에 불편을 드려 죄송합니다!');
        },
      });
    },
  },
};
</script>
