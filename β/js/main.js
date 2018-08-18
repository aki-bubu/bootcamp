$(function(){
    'use strict';

    //最終的に表示する配列
    

    //containerを作成する関数
    // function makeContainer(a,b){
    //     let container = $('<a href="detail.html"></a>');
    //     let imageContainer = $('<div></div>');
    //     let titleContainer = $('<div></div>');

    //     $(container).addClass("container");
    //     $(imageContainer).addClass("image-container");
    //     $(titleContainer).addClass("title-container");

    //     container.html(imageContainer);
    //     container.append(titleContainer);

    //     //ここの画像ファイルとテキストを入れる形に
    //     imageContainer.html('<img class ="container-img"src="'+ a +'" alt="' + b + '">')
    //     titleContainer.html('<p>'+ b +'</p>')
    //     return container;    
    // }

    //containerの中身のjsonファイル
   
    

    //  let name = "都内で楽しむナイトヨガ";
    //containerの要素を作成する
    //本当はfor文で綺麗に描きたい
    
    // let container1 = makeContainer('img/event_img.jpg','都内で楽しむナイトヨガ');
    // let container2 = makeContainer('img/event_img.jpg','都内で楽しむナイトヨガ');
    // let container3 = makeContainer('img/event_img.jpg','都内で楽しむナイトヨガ');
    // containers.push(container1,container2,container3);
   
    
    // console.log(imageContainer);
    // console.log(containers);
    // function make(){
    //     $('.main-container').prepend(containers);
    // }
    // make();
    // let containers = function(){
    //     $()
    // } 
    //  var jsontext=[{"name":"a"},{"image":"img/event_img.jpg"}]
    

    // // //containerに一覧情報を渡し、非同期処理
    // var contents =JSON.parse(jsontext);
    // console.log(contents.length);
    // console.log(contents[1][1].name);
    
    // function make(n){
    //     for(var i=0; i<contents.length; i++){
    //             // console.log(contents[i].name);
    //             // console.log(contents[i].image);
            
    //             let container = $('<a href="detail.html"></a>');
    //             let imageContainer = $('<div></div>');
    //             let titleContainer = $('<div></div>');
    //             $(container).addClass("container");
    //             $(imageContainer).addClass("image-container");
    //             $(titleContainer).addClass("title-container");
                
    //             //ここの画像ファイルとテキストを入れる形に
    //             imageContainer.html('<img class ="container-img"src="'+ contents[n][i].image +'" alt="' + contents[n][i].name + '">')
    //             titleContainer.html('<p>'+ contents[n][i].name +'</p>')

    //             container.html(imageContainer);
    //             container.append(titleContainer);
    //             $(".main-container").prepend(container);
    //             // return container;
    //     }    
    // };
    // make(0);

    //  $("#danceevent-nav").on("click",function(){
    //         $.getJSON("activity.json",function(data){
    //             console.log(data.dance.length);
    //             // console.log(data.length);
    //             // console.log(json[1].name);
                
    //                 for(var i=0; i< data.dance.length; i++){
    //                         // console.log(contents[i].name);
    //                         // console.log(contents[i].image);
    //                         // console.log(data.x[1].name);
    //                         // console.log(data.x[0].image);

    //                         let container = $('<a href="detail.html"></a>');
    //                         let imageContainer = $('<div></div>');
    //                         let titleContainer = $('<div></div>');
    //                         $(container).addClass("container");
    //                         $(imageContainer).addClass("image-container");
    //                         $(titleContainer).addClass("title-container");
                            
    //                         //ここの画像ファイルとテキストを入れる形に
    //                         imageContainer.html('<img class ="container-img"src="'+ data.dance[i].image +'" alt="' + data.dance[i].name + '">')
    //                         titleContainer.html('<p>'+ data.dance[i].name +'</p>')
            
    //                         container.html(imageContainer);
    //                         container.append(titleContainer);
    //                         $(".main-container").prepend(container);
    //                         // // return container;
                    
    //             };
                
    //         });   
    $.getJSON("activity.json",function(data){
        // console.log(data.x.length);
        // console.log(data.length);
        // console.log(json[1].name);
             
            for(var i=0; i< data.yoga.length; i++){
                    // console.log(contents[i].name);
                    // console.log(contents[i].image);
                    // console.log(data.x[1].name);
                    // console.log(data.x[0].image);

                    let container = $('<a href="detail.html"></a>');
                    let imageContainer = $('<div></div>');
                    let titleContainer = $('<div></div>');
                    $(container).addClass("container");
                    $(imageContainer).addClass("image-container");
                    $(titleContainer).addClass("title-container");
                    
                    //ここの画像ファイルとテキストを入れる形に
                    imageContainer.html('<img class ="container-img"src="'+ data.yoga[i].image +'" alt="' + data.yoga[i].name + '">')
                    titleContainer.html('<p>'+ data.yoga[i].name +'</p>')
    
                    container.html(imageContainer);
                    container.append(titleContainer);
                    $(".main-container").prepend(container);
                    // // return container;
            
        };
    });

    $('#danceevent-nav').on("click", function(){
        let container =[];
        $('.main-container').empty();
        $.getJSON("activity.json",function(data){
            // console.log(data.x.length);
            // console.log(data.length);
            // console.log(json[1].name);
                container =[];
                for(var i=0; i< data.dance.length; i++){
                        // console.log(contents[i].name);
                        // console.log(contents[i].image);
                        // console.log(data.x[1].name);
                        // console.log(data.x[0].image);

                        container = $('<a href="detail.html"></a>');
                        let imageContainer = $('<div></div>');
                        let titleContainer = $('<div></div>');
                        $(container).addClass("container");
                        $(imageContainer).addClass("image-container");
                        $(titleContainer).addClass("title-container");
                        
                        //ここの画像ファイルとテキストを入れる形に
                        imageContainer.html('<img class ="container-img"src="'+ data.dance[i].image +'" alt="' + data.dance[i].name + '">')
                        titleContainer.html('<p>'+ data.dance[i].name +'</p>')
        
                        container.html(imageContainer);
                        container.append(titleContainer);
                        $(".main-container").prepend(container);
                        // // return container;
                
            };
        });
    });

    // $('#runevent-nav').on("click", function(){
    //     $(".main-container").empty();
    // });
    $('#runevent-nav').on("click", function(){
        let container =[];
        $('.main-container').empty();
        $.getJSON("activity.json",function(data){
            // console.log(data.x.length);
            // console.log(data.length);
            // console.log(json[1].name);
            
                for(var i=0; i< data.run.length; i++){
                        // console.log(contents[i].name);
                        // console.log(contents[i].image);
                        // console.log(data.x[1].name);
                        // console.log(data.x[0].image);

                        container = $('<a href="detail.html"></a>');
                        let imageContainer = $('<div></div>');
                        let titleContainer = $('<div></div>');
                        $(container).addClass("container");
                        $(imageContainer).addClass("image-container");
                        $(titleContainer).addClass("title-container");
                        
                        //ここの画像ファイルとテキストを入れる形に
                        imageContainer.html('<img class ="container-img"src="'+ data.run[i].image +'" alt="' + data.run[i].name + '">')
                        titleContainer.html('<p>'+ data.run[i].name +'</p>')
        
                        container.html(imageContainer);
                        container.append(titleContainer);
                        $(".main-container").prepend(container);
                        // // return container;
                
            };
        });
    });

        $('#yogaevent-nav').on("click", function(){
            let container =[];
            $('.main-container').empty();
            $.getJSON("activity.json",function(data){
                // console.log(data.x.length);
                // console.log(data.length);
                // console.log(json[1].name);
                
                    for(var i=0; i< data.yoga.length; i++){
                            // console.log(contents[i].name);
                            // console.log(contents[i].image);
                            // console.log(data.x[1].name);
                            // console.log(data.x[0].image);
    
                            container = $('<a href="detail.html"></a>');
                            let imageContainer = $('<div></div>');
                            let titleContainer = $('<div></div>');
                            $(container).addClass("container");
                            $(imageContainer).addClass("image-container");
                            $(titleContainer).addClass("title-container");
                            
                            //ここの画像ファイルとテキストを入れる形に
                            imageContainer.html('<img class ="container-img"src="'+ data.yoga[i].image +'" alt="' + data.yoga[i].name + '">')
                            titleContainer.html('<p>'+ data.yoga[i].name +'</p>')
            
                            container.html(imageContainer);
                            container.append(titleContainer);
                            $(".main-container").prepend(container);
                            // // return container;
                    
                };
            });
        
    });
    
    
});
    
        
    
    

    
    
