$(function(){
    'use strict';
    
    //datapicker
    let dateFormat ='yy-mm-dd';
    $('#datepicker').datepicker({
        dateFormat: dateFormat
    });
   
   
    window.onload = function () {
        //今日の日時を表示
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
      
        var toTwoDigits = function (num, digit) {
          num += ''
          if (num.length < digit) {
            num = '0' + num
          }
          return num
        }
        
        var yyyy = toTwoDigits(year, 4)
        var mm = toTwoDigits(month, 2)
        var dd = toTwoDigits(day, 2)
        var ymd = yyyy + "-" + mm + "-" + dd;
        
        document.getElementById("datepicker").value = ymd;
    }
    // 最初の表示一覧

    $.getJSON("json/activity.json",
        function(data){
                for(var i=0; i< data.fun.length; i++){
                    let container = $('<a href="detail.html"></a>');
                    let imageContainer = $('<div></div>');
                    let timeContainer = $('<div></div>');
                    let profileContainer = $('<div></div>');
                    let detailContainer = $('<div></div>');
                    let locationContainer = $('<div><img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"></div>');
                    let location =$(' <img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"><p>'+ data.fun[i].location +'</p>');
                    
                    $(container).addClass("container");
                    $(imageContainer).addClass("image-container");
                    $(timeContainer).addClass("time-container");
                    $(profileContainer).addClass("profile-container");
                    $(detailContainer).addClass("detail-container");
                    $(locationContainer).addClass("location-container");
                    $(location).addClass("location");
                    //ここの画像ファイルとテキストを入れる形に
                    imageContainer.html('<img class ="container-img"src="'+ data.fun[i].image +'" alt="' + data.fun[i].name + '">');
                    timeContainer.html('<p>'+ data.fun[i].time +'</p>');
                    profileContainer.html('<img src="' + data.fun[i].profile +'" alt="プロフィール">');
                    detailContainer.html('<p>'+ data.fun[i].name +'</p>');
                    location.html()
                    locationContainer.html(location);
                
                    container.html(imageContainer);
                    container.append(timeContainer).append(profileContainer).append(detailContainer).append(locationContainer);
                    $(".main-container").prepend(container);
                    // // return container;
            
        };
    });

    $('#slide-title1').on("click", function(){
        
        $('.main-container').empty();
        $.getJSON("json/activity.json",function(data){           
                // container =[];
                for(var i=0; i< data.fun.length; i++){
                    let container = $('<a href="detail.html"></a>');
                    let imageContainer = $('<div></div>');
                    let timeContainer = $('<div></div>');
                    let profileContainer = $('<div></div>');
                    let detailContainer = $('<div></div>');
                    let locationContainer = $('<div><img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"></div>');
                    let location =$(' <img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"><p>'+ data.fun[i].location +'</p>');
                    
                    $(container).addClass("container");
                    $(imageContainer).addClass("image-container");
                    $(timeContainer).addClass("time-container");
                    $(profileContainer).addClass("profile-container");
                    $(detailContainer).addClass("detail-container");
                    $(locationContainer).addClass("location-container");
                    $(location).addClass("location");
                    //ここの画像ファイルとテキストを入れる形に
                    imageContainer.html('<img class ="container-img"src="'+ data.fun[i].image +'" alt="' + data.fun[i].name + '">');
                    timeContainer.html('<p>'+ data.fun[i].time +'</p>');
                    profileContainer.html('<img src="' + data.fun[i].profile +'" alt="プロフィール">');
                    detailContainer.html('<p>'+ data.fun[i].name +'</p>');
                    location.html()
                    locationContainer.html(location);
                
                    container.html(imageContainer);
                    container.append(timeContainer).append(profileContainer).append(detailContainer).append(locationContainer);
                    $(".main-container").prepend(container);
                    // // return container;
                
            };
        });
    });
    $('#slide-title2').on("click", function(){
        // let container=[];
        $('.main-container').empty();
        $.getJSON("json/activity.json",function(data){            
                for(var i=0; i< data.relax.length; i++){                       
                    let container = $('<a href="detail.html"></a>');
                    let imageContainer = $('<div></div>');
                    let timeContainer = $('<div></div>');
                    let profileContainer = $('<div></div>');
                    let detailContainer = $('<div></div>');
                    let locationContainer = $('<div><img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"></div>');
                    let location =$(' <img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"><p>'+ data.fun[i].location +'</p>');
                    
                    $(container).addClass("container");
                    $(imageContainer).addClass("image-container");
                    $(timeContainer).addClass("time-container");
                    $(profileContainer).addClass("profile-container");
                    $(detailContainer).addClass("detail-container");
                    $(locationContainer).addClass("location-container");
                    $(location).addClass("location");
                    //ここの画像ファイルとテキストを入れる形に
                    imageContainer.html('<img class ="container-img"src="'+ data.relax[i].image +'" alt="' + data.relax[i].name + '">');
                    timeContainer.html('<p>'+ data.relax[i].time +'</p>');
                    profileContainer.html('<img src="' + data.relax[i].profile +'" alt="プロフィール">');
                    detailContainer.html('<p>'+ data.relax[i].name +'</p>');
                    location.html()
                    locationContainer.html(location);
                
                    container.html(imageContainer);
                    container.append(timeContainer).append(profileContainer).append(detailContainer).append(locationContainer);
                    $(".main-container").prepend(container);
                    // // return container;
                
            };
        });
    });

        $('#slide-title3').on("click", function(){
            // let container =[];
            $('.main-container').empty();
            $.getJSON("json/activity.json",function(data){                  
                    for(var i=0; i< data.hard.length; i++){
                        let container = $('<a href="detail.html"></a>');
                        let imageContainer = $('<div></div>');
                        let timeContainer = $('<div></div>');
                        let profileContainer = $('<div></div>');
                        let detailContainer = $('<div></div>');
                        let locationContainer = $('<div><img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"></div>');
                        let location =$(' <img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"><p>'+ data.fun[i].location +'</p>');
                        
                        $(container).addClass("container");
                        $(imageContainer).addClass("image-container");
                        $(timeContainer).addClass("time-container");
                        $(profileContainer).addClass("profile-container");
                        $(detailContainer).addClass("detail-container");
                        $(locationContainer).addClass("location-container");
                        $(location).addClass("location");
                        //ここの画像ファイルとテキストを入れる形に
                        imageContainer.html('<img class ="container-img"src="'+ data.hard[i].image +'" alt="' + data.hard[i].name + '">');
                        timeContainer.html('<p>'+ data.hard[i].time +'</p>');
                        profileContainer.html('<img src="' + data.hard[i].profile +'" alt="プロフィール">');
                        detailContainer.html('<p>'+ data.hard[i].name +'</p>');
                        location.html()
                        locationContainer.html(location);
                    
                        container.html(imageContainer);
                        container.append(timeContainer).append(profileContainer).append(detailContainer).append(locationContainer);
                        $(".main-container").prepend(container);
                        // return container;
                    
                };
            });
        
    });
    
    
});
    
        
    
    

    
    
