$(function(){
    $("#web-driver-popover").dxPopover({
        target: "#web-driver-link",
        showEvent: "dxclick",
        position: "top",
        width: 300
    });

    $("#page-object-popover").dxPopover({
        target: "#page-object-link",
        showEvent: "dxclick",
        position: "top",
        width: 300
    });
})