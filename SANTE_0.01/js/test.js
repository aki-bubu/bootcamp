$(function(){
    'use strict';
    
    let fun=[];
    let relax=[];
    let hard=[];
    
    $.getJSON("/json/activity.json",
        function(data){
            for (let i = 0; i < data.length; i++) {
                if(data[i].key === 'fun') {
                    fun.push(data[i]);
                 }else if(data[i].key ==='relax'){
                    relax.push(data[i]);
                 }else{
                    hard.push(data[i]);
                 }

            }
            console.log(fun);
            console.log(relax);
            console.log(hard);
        });

        let container = $('<a href="detail.html"></a>');
        let imageContainer = $('<div></div>');
        let timeContainer = $('<div></div>');
        let profileContainer = $('<div></div>');
        let detailContainer = $('<div></div>');
        let locationContainer = $('<div><img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"></div>');
        let location =$(' <img class="location-icon" src="icon/cont_location_icon.png" alt="アイコン"><p>'+ fun.location +'</p>');
        
        $(container).addClass("container");
        $(imageContainer).addClass("image-container");
        $(timeContainer).addClass("time-container");
        $(profileContainer).addClass("profile-container");
        $(detailContainer).addClass("detail-container");
        $(locationContainer).addClass("location-container");
        $(location).addClass("location");
        //ここの画像ファイルとテキストを入れる形に
        imageContainer.html('<img class ="container-img"src="'+ fun.image +'" alt="' + fun.name + '">');
        timeContainer.html('<p>'+ fun.time +'</p>');
        profileContainer.html('<img src="' + fun.profile +'" alt="プロフィール">');
        detailContainer.html('<p>'+ fun.name +'</p>');
        location.html()
        locationContainer.html(location);
    
        container.html(imageContainer);
        container.append(timeContainer).append(profileContainer).append(detailContainer).append(locationContainer);
        $(".main-container").prepend(container);

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
          
});
