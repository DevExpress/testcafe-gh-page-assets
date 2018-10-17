---
---
$(function() {
    var tweets = [
        {% for tweet in site.data.tweets %}
            {
                url: '{{ tweet.url }}'
            }{% if forloop.last == false %},{% endif %}
        {% endfor %}
    ];

    var md = new MobileDetect(window.navigator.userAgent);

    if (md.mobile())
        return;

    // var showNav = !md.mobile();

    $('#tweet-gallery').dxGallery({
        dataSource: tweets,
        width: "100%",
        height: 321,
        showIndicator: false,
        // showNavButtons: showNav,
        showNavButtons: true,
        initialItemWidth: 376,
        loop: true,
        itemTemplate: function (item, index) {
            var result = $("<div>");

            $.ajax({
                url: "https://api.twitter.com/1/statuses/oembed.json?hide_thread=true&hide_media=true&url=" + item.url,
                dataType: "jsonp",
                success: function (data) { result.html(data.html); }
            });

            return result;
        }
    });
})