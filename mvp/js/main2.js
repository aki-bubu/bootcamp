$(function(){
    'use strict';
    
    //最終的に表示する配列
    let containers =[];

    //containerを作成する関数
    function makeContainer(a,b){
        let container = $('<a href="detail.html"></a>');
        let imageContainer = $('<div></div>');
        let titleContainer = $('<div></div>');

        $(container).addClass("container");
        $(imageContainer).addClass("image-container");
        $(titleContainer).addClass("title-container");

        container.html(imageContainer);
        container.append(titleContainer);

        //ここの画像ファイルとテキストを入れる形に
        imageContainer.html('<img class ="container-img"src="'+ a +'" alt="' + b + '">')
        titleContainer.html('<p>'+ b +'</p>')
        return container;    
    }

     let name = "都内で楽しむナイトヨガ";
    //containerの要素を作成する
    //本当はfor文で綺麗に描きたい
    
    let container1 = makeContainer('img/event2_img.jpg','パーソナルワークアウト');
    let container2 = makeContainer('img/event2_img.jpg','パーソナルワークアウト');
    let container3 = makeContainer('img/event2_img.jpg','パーソナルワークアウト');
    containers.push(container1,container2,container3);
   
    
    // console.log(imageContainer);
    console.log(containers);
    function make(){
        $('.main-container').prepend(containers);
    }
    make();
    // let containers = function(){
    //     $()
    // } 
});