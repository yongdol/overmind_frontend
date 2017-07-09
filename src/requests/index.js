import React from 'react';
import $ from 'jquery';

api_url = "http://www.frisk.rocks:5000/api";


export const get_service = () => {
  axios.get("http://frisk.rocks:5000/api/service/")
    .then((res) => {var result = res.data.data});
  return result;
}

export const post_search = (query) => {
  axios.get("http://frisk.rocks:5000/api/service/")
    .then((res) => {var result = res.data.data});
  var jsonData = {}

  return 0;
}

export const post_signin = (userid, passwd) => {
  var jsonData = {"id": userid, "pw": passwd};
  var result = $.post("http://frisk.rocks:5000/api/signin", jsonData);
  if (result.responseJSON.status != 200) {
    // sessionStorage.setItem('name', 'value') 이용하여 세션에 로그인 정보 저장
    // result.responseJSON.access_token
    // result.responseJSON.refresh_token
    return 0;
  } else {

    // 에러 메시지 리턴
    return -1;
  }
};

export const post_signup = () => {
  return true;
};
