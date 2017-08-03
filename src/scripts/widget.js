---
---
$(function() {
    var WIDGET_DISPLAYED_FLAG = 'widget-displayed';

    function sendGaEvent(event) {
        {% if jekyll.environment == "production" %}

        ga('send', 'event', 'widget', event);

        {% endif %}
    }

    function updateWidgetVisibility() {
        if(window.needShowShareWidget()) {
            $('.widget-container').removeClass('hidden');
            if(!window.localStorage.getItem(WIDGET_DISPLAYED_FLAG)) {
                sendGaEvent('display');
                window.localStorage.setItem(WIDGET_DISPLAYED_FLAG, true);
            }
        }
        else 
            $('.widget-container').addClass('hidden');
    }

    function handleWidgetAction(event) {
        updateWidgetVisibility();
        sendGaEvent(event);
    }

    $('#share-button').on('click', function () {
        $('.widget-container').addClass('out');
    });

    $('#tweet').on('click', function () {
        handleWidgetAction('tweet');
    });

    $('#facebook').on('click', function () {
        handleWidgetAction('facebook');
    });
    
    $('#collapse').on('click', function () {
        $('.widget-container').removeClass('out');
    });

    $(document).bind( "mouseup touchend", function(e) {
        var widget = $('.widget-container');

        var clickOutsideWidget = !widget.is(e.target) && widget.has(e.target).length === 0;

        if (clickOutsideWidget) 
            widget.removeClass('out');
    });

    updateWidgetVisibility();
});
