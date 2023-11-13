var open = false;

function Drop(n) {
  var i;
  if (open == false) {
    for (i = n; i < 5; i++) {
      Drp(i)
    }
    open = true
  } else if (open == true) {
    for (i = n; i < 5; i++) {
      Cls(i)
    }
    open = false
  }
}

function Drp(n) {
  var elem = document.getElementsByClassName("menu-con")[n];
  var pos = -1 * window.innerHeight - n * 100;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos >= -10) {
      clearInterval(id);
      elem.style.top = 0 + 'px';
    } else {
      pos += 10;
      elem.style.top = pos + 'px';
    }
  }
}

function Cls(n) {
  var elems = document.getElementsByClassName("menu-con")[n];
  var poss = 0;
  var ids = setInterval(frames, 5);

  function frames() {
    if (poss <= -1 * window.innerHeight) {
      clearInterval(ids);
      elems.style.top = -1 * window.innerHeight + 'px';
    } else {
      poss += -7 - n * 2;
      elems.style.top = poss + 'px';
    }
  }
}

let expantion = document.getElementsByClassName('underline-before');
// .underline-beforeのついたDOMを取得

let expantionswitch = ["off","off","off","off","off"];
// 下線を引くアクションを行ったか行ってないかのスイッチを配列の値で表現。初期値はoff

window.onscroll = function(){
// スクロールした場合、関数（function）を実行

for(let i = 0,len = expantion.length;i < len;i++){
// .underline-beforeの数だけ繰り返しするfor文

let ex_clientRect = expantion[i].getBoundingClientRect();
// [i]番目の.underline-beforeの境界ボックスを取得（画面内での.underline-beforeの位置を取得）


let wh = window.innerHeight;
// ブラウザのウインドウの表示領域の高さを取得。（ページの上からどれだけ進んだか計る）


if(wh > ex_clientRect.top + 200 && expantionswitch[i] === "off") {
// if文による分岐。もしウインドウの表示領域の高さが、[i]番目の.underline-beforeの画面内での上からの位置+200pxより
// 高かった場合。また、[i]番目のexpantionswitchがoffの場合にtrueの動作を返す。

expantion[i].classList.add('underline-after');
// [i]番目の.underline-beforeがついている要素に新たに.underline-afterを追加。これによって下線を引くアクションが実現する。

expantionswitch[i] = "on";
// offだった配列の値をonにする。これによって二度同じ動作をするのを防いでいる。
}
}
}

