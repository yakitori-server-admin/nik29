form.addEventListener("submit", function(event) {
    var form = document.getElementById("form"); // #formというidを持つ<form>要素を取得
    var inputs = form.querySelectorAll("input, textarea"); // <form>要素内のすべての<input>と<textarea>要素を取得
    for (var i = 0; i < inputs.length; i++) { // 繰り返し処理で
      inputs[i].readOnly = true; // 各入力要素にreadonly属性をtrueに設定
    }
    var button = document.querySelector(".button[type='submit']"); // .button[type='submit']というセレクターに一致する要素を取得
    button.classList.add("disabled"); // .disabledクラスを付与
    button.textContent = "送信済み"; // テキストを"送信済み"に変更
});