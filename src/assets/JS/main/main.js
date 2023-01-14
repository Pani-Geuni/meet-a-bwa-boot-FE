/**
 * @author 김예은
 */
$(() => {
  /** *************************** */
  /** ********* MEET ************ */
  /** *************************** */

  // 취미 셀렉터 클릭 이벤트
  $('.user_interest_select').change(function () {
    // 로딩 화면
    $('#spinner-wrap').removeClass('blind');

    $.ajax({
      url: '/select_meet_interest',
      type: 'GET',
      dataType: 'json',
      data: {
        interest: $(this).val(),
      },
      success(res) {
        // 로딩 화면 닫기
        $('#spinner-wrap').addClass('blind');

        if (res.length == 0) {
          $('#interest_meet_recommendSection').find('.content_list.meet-list').addClass('blind');
          $('#interest_meet_recommendSection').next('.no-list-wrap:eq(0)').removeClass('blind');
        } else {
          $('#interest_meet_recommendSection').next('.no-list-wrap:eq(0)').addClass('blind');
          $('#interest_meet_recommendSection').find('.content_list.meet-list').removeClass('blind');

          const sample = $('#interest_meet_recommendSection').find('.content_list.meet-list:eq(0)').clone();
          $('#interest_meet_recommendSection').empty();

          for (let i = 0; i < res.length; i++) {
            const list = sample.clone();

            list.attr('idx', res[i].meet_no);
            list.find('.content_title').text(res[i].meet_name);
            list.find('.content_description').text(res[i].meet_info);

            if (res[i].meet_county.length != undefined) { list.find('.loca_tag.tag>span').text(res[i].meet_county); } else {
              list.find('.loca_tag.tag').addClass('blind');
            }

            if (res[i].meet_interest_name.length != undefined) { list.find('.cate_tag.tag>span').text(res[i].meet_interest_name); } else {
              list.find('.cate_tag.tag').addClass('blind');
            }

            if (res[i].meet_gender != undefined) {
              if (res[i].meet_gender == 'W') { list.find('.gender_tag.tag.cate_tag>span').text('여'); } else { list.find('.gender_tag.tag.cate_tag>span').text('남'); }
            } else {
              list.find('.gender_tag.tag.cate_tag').addClass('blind');
            }

            list.find('.list_img').attr('src', res[i].meet_image);
            list.find('.member_cnt.member_ment').text(`${res[i].user_cnt}명`);

            if (res[i].meet_age_arr.length > 0) {
              const age_sample = list.find('.condition_regular.condition_common.age_condition:eq(0)').clone();
              list.find('.condition_bold.condition_common').siblings('.age_condition').remove();

              for (let j = 0; j < res[i].meet_age_arr.length; j++) {
                const sample_list = age_sample.clone();
                sample_list.text(res[i].meet_age_arr[j]);
                list.find('.meet_condition.age_condition_wrap').append(sample_list);
              }
            } else {
              list.find('.meet_condition.age_condition_wrap').addClass('blind');
            }

            list.find('.heartSection').attr('idx', res[i].meet_no);
            list.find('.likeCnt').text(res[i].like_cnt);

            $('#interest_meet_recommendSection').append(list);
          }

          like_meet_load();
        }
      },
      error() {
        // 로딩 화면 닫기
        $('#spinner-wrap').addClass('blind');

        $('#common-alert-popup-wrap').removeClass('blind');
        $('.common-alert-txt').html('오류로 인해 회원님의 관심사에 맞는<br>목록을 불러오는데 실패하였습니다.');
      },
    });
  });

  /** *************************** */
  /** ******* ACTIVITY ********** */
  /** *************************** */

  // 액티비티 추천 - 카테고리 더보기 버튼 클릭 이벤트
  $('#plusImg').click(function () {
    $('#fold_tag').removeClass('blind');
    $(this).addClass('blind');
    $('#foldImg').removeClass('blind');
  });

  // 액티비티 추천 - 카테고리 접기 버튼 클릭 이벤트
  $('#foldImg').click(function () {
    $('#fold_tag').addClass('blind');
    $(this).addClass('blind');
    $('#plusImg').removeClass('blind');
  });

  // 액티비티 추천 - 카테고리 클릭 이벤트
  $('.tagItem').click(function (e) {
    $('.tagItem').removeClass('check');
    $(e.target).addClass('check');

    const category = $(this).text();
    // 로딩 화면
    $('#spinner-wrap').removeClass('blind');

    $.ajax({
      url: '/select_activity_category',
      type: 'GET',
      dataType: 'json',
      data: {
        category,
      },
      success(res) {
        // 로딩 화면 닫기
        $('#spinner-wrap').addClass('blind');

        if (res.length == 0) {
          $('#recommendAct').find('.content_list.activity-list').addClass('blind');
          $('#recommendAct').find('.no-list-wrap').removeClass('blind');
        } else {
          $('#recommendAct').find('.content_list.activity-list').removeClass('blind');
          $('#recommendAct').find('.no-list-wrap').addClass('blind');

          $('#recommendAct').find('#has_a_list').empty();

          for (let i = 0; i < res.length; i++) {
            sample =							`<div class='content_list activity-list' idx=${res[i].activity_no}>`
							+ '<div class=\'info-list-wrap\'>'
							+ '<div class=\'listCommon\'>'
							+ `<span class='content_title'>${res[i].activity_name}</span>`
							+ '</div>'
							+ '<div class=\'description_list listCommon\'>'
							+ `<span class='content_description'>${res[i].activity_info}</span>`
							+ '</div>'
							+ '<div class=\'listCommon\'>'
							+ '<div class=\'tagSection\'>';

            if (res[i].activity_county != null) {
              sample
								+= `${"<div class='loca_tag tag'>"
								+ "<img src='/IMG/common/map.png' class='tag_img'>"
								+ "<span class='location_name font_size_10'>"}${res[i].activity_county}</span>`
								+ '</div>';
            } else {
              sample
								+= `${"<div class='cate_tag tag'>"
								+ "<span class='category_name font_size_10'>"}${res[i].activity_interest}</span>`
								+ '</div>';
            }

            sample += '</div></div>';

            sample += `${"<div class='content_img'>"
							+ '<img src='}${res[i].activity_image} alt='list_img' class='list_img' />`
							+ '</div></div>';

            sample
							+= `${"<div class='bottomWrap'>"
							+ "<div class='meet_info'>"
							+ "<div class='meet_member_info'>"
							+ "<span class='member_cnt member_ment'>"}${res[i].user_cnt}명</span>`
							+ '<span class=\'member_ment\'>참여중</span>'
							+ '</div>';

            if (res[i].activity_age_arr != null) {
              sample
								+= "<div class='meet_condition'>"
								+ "<img src='/IMG/common/line.svg' alt='line이미지' class='divide'/>"
								+ "<span class='condition_bold condition_common'><b>모집</b></span>";

              for (let j = 0; j < res[i].activity_age_arr.length; j++) {
                sample += `<span class='condition_regular condition_common age_condition'>${res[i].activity_age_arr[j]}</span>`;
              }

              sample += '</div>';
            }
            sample += '</div>';

            sample += `${"<div class='likeWrap'>"
							+ "<section class='heartSection' idx="}${res[i].activity_no}>`
							+ '<img src=\'/IMG/common/heart-outlined.svg\' alt=\'라인하트이미지\' class=\'beforeLike_heart heartCommon\' />'
							+ '<img src=\'/IMG/common/heart-filled.svg\' alt=\'풀하트이미지\' class=\'afterLike_heart heartCommon blind\' />'
							+ '</section>'
							+ `<span class='likeCnt'>${res[i].like_cnt}</span>`
							+ '</div> </div> </div > ';

            $('#recommendAct').find('#has_a_list').append(sample);
          }

          like_activity_load();
        }
      },
      error() {
        // 로딩 화면 닫기
        $('#spinner-wrap').addClass('blind');

        $('#common-alert-popup-wrap').removeClass('blind');
        $('.common-alert-txt').html('오류로 인해 카테고리별 검색에 실패하였습니다.<br>이용에 불편을 드려 죄송합니다!');
      },
    });
  });

  // 액티비티 추천 - +더보기 버튼 클릭
  $('#plusBtn_act').click(() => {
    const category = $('.tagItem.check').text();
    location.href = `/meet-a-bwa/activity-list.do?category=${category}&&searchWord=`;
  });
});
