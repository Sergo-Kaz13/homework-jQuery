'use strict'

function instr(num) {
  $('.calc-window').val($('.calc-window').val() + num);
}
function eql() {
  $('.calc-window').val(eval($('.calc-window').val()));
}
function c() {
  $('.calc-window').val('');
}
function del() {
  let value = $('.calc-window').val();
  $('.calc-window').val(value.substring(0, value.length - 1));
}


// ============================
