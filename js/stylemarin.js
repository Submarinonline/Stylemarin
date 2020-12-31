// Stylemarin v0.0.1 | MIT License | github.com/Submarinonline/Stylemarin

//textareaサイズ自動変更
$("textarea").attr("rows", 1).on("input", e =>
  $(e.target).height(0).innerHeight(e.target.scrollHeight)
);

//ボタンからフォーカスを外す
$('button,select,input[type="submit"],input[type="button"],input[type="reset"]').click(() => {
  document.activeElement.blur()
});