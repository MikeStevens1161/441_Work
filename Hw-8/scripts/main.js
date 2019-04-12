
    var imageArray = new Array();

    class Images {
        constructor(selector, imagePath) {
            this.selector = selector;
            this.imagePath = imagePath;
        }

        get theImageSelector() {
            return this.selector;
        }

        get theImagePath() {
            return this.imagePath;
        }
    }

    function initializeArray() {
        var image1 = new Images("#imagesIds", "images/Image1.jpg");
        var image2 = new Images("#imagesIds", "images/image2.jpg");
        var image3 = new Images("#imagesIds", "images/image3.jpg");
        var image4 = new Images("#imagesIds", "images/image4.png");
        var image5 = new Images("#imagesIds", "images/image5.jpg");

        imageArray.push(image1, image2, image3, image4, image5);
    }

    function getRandomIndex(){
        return Math.floor(Math.random() * imageArray.length);
    }


    $(function() {

        $("button").click(function(){
            $(imageArray[getRandomIndex()].theImageSelector).attr("src", imageArray[getRandomIndex()].theImagePath).fadeIn("slow").fadeOut("slow");
            $("#line1").fadeOut().fadeIn();
            $("#line2").fadeOut().fadeIn();
            $("#line3").toggle();
        });
    });

    function moveSquare(){
        for (var i = 0; i < 4; i ++) {
            $("#square0").animate({top:185}).animate({left:450}).fadeOut().fadeIn().animate({top:750}).animate({left:1200}).fadeOut().fadeIn();
        }

        for (var j = 0; j < 4; j ++) {
            $("#square1").animate({left:200}).animate({top:800}).fadeOut().fadeIn().animate({left:1400}).animate({top:110}).fadeOut().fadeIn();
        }

        for (var k = 0; k < 5; k ++) {
        $("#square2").animate({left:450}).fadeOut().fadeIn().animate({left:1200}).fadeOut().fadeIn();
        }
    }