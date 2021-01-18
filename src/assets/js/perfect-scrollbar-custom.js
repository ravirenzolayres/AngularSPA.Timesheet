$(document).ready(function (){
    $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
    $('.main-panel').perfectScrollbar('destroy');
    $('.main-panel').perfectScrollbar('update');
});