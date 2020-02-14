$(document).ready(function () {
    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    //Arrays containing our questions
    let easyArr = ["opposite-number",
        "sum-of-positive", "find-the-smallest-integer-in-the-array", "remove-first-and-last-character", "remove-string-spaces",
        "vowel-count", "disemvowel-trolls"];
    let mediumArr = ["get-the-middle-character", "century-from-year", "convert-a-number-to-a-string", "reversed-strings", "grasshopper-order-of-operations", "exes-and-ohs",
        "shortest-word", "descending-order", "sum-of-odd-numbers", ""];
    let hardArr = ["create-phone-number", "who-likes-it", "are-the-values-equal", "counting-duplicates", "replace-with-alphabet-position", "convert-string-to-camel-case"];

    //IDs for difficulty buttons
    let easy = $("#easy")
    let medium = $("#medium");
    let hard = $("#hard");
    //Elements for writing questions
    let q = $("#question");
    let qDiv = $("<div>");
    qDiv.attr("id", "qDiv");
    qDiv.attr("class", "box");
    let qText = $("<p>");
    let favSpan = $("<span>").attr("class", "icon is-small")
    let favIcon = $("<i>").attr("class", "fas fa-star");
    favIcon.attr("id", "favIcon");
    favIcon.attr("aria-hidden", "true");
    //Variable for YT API call
    let youtubeBtn = $("<button>").attr("class", "button is-rounded is-danger is-medium");
    let youtubeIcon = $("<i>").attr("class", "fab fa-youtube")
    youtubeBtn.attr("id", "ytBtn")
    youtubeBtn.text("YouTube References")
    let savedQuestions = JSON.parse(localStorage.getItem("Favorites"));
    let favArray = [];
    if (savedQuestions) {
        favArray = [...savedQuestions];
    }
    //Click listeners for each difficulty
    easy.on("click", function () {
        challengeIndex = Math.floor(Math.random() * easyArr.length)
        challengeID = easyArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (props) {
            $(".buttons").empty();
            $("#youtubeBtn").append(youtubeBtn)
            youtubeBtn.prepend(youtubeIcon)
            q.empty();
            q.append(qDiv);
            qDiv.append(favSpan);
            favSpan.append(favIcon);
            qDiv.append(qText);
            qText.text(props.description)
            console.log(props)

            // Youtube API search call - Mathew 
            youtubeBtn.on("click", function () {
                $(".hide").css("visibility", "visible")
                var searchQuery = challengeID + "JavaScript";
                let googleKey = "AIzaSyCN8BP_zA7LbOr5ZegORQuuaaKh06r5Fkk";
                $.ajax({
                    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchQuery + "&key=" + googleKey,
                    method: "GET"
                }).then(function (data) {
                    console.log(data);
                    console.log(data.items[1].id.videoId);
                    for (var videoNum = 0; videoNum < 5; videoNum++) {
                        var videoUrl = "https://www.youtube.com/embed/" + data.items[videoNum].id.videoId;
                        console.log(videoUrl);
                        $(".videos").append('<iframe class="card video" width="283.5" height="230" src=' + videoUrl + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                    }
                }).catch(function (error) {
                    console.log(error)
                })

            })

            favSpan.on("click", function () {
                favArray.push(challengeID);
                localStorage.setItem("Favorites", JSON.stringify(favArray))
            })

        })
    })

    medium.on("click", function () {
        challengeIndex = Math.floor(Math.random() * mediumArr.length)
        challengeID = mediumArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (props) {
            $(".buttons").empty();
            $("#youtubeBtn").append(youtubeBtn)
            youtubeBtn.prepend(youtubeIcon)
            q.empty();
            q.append(qDiv);
            qDiv.append(favSpan);
            favSpan.append(favIcon);
            qDiv.append(qText);
            qText.text(props.description)
            console.log(props)

            // Youtube API search call - Mathew 
            youtubeBtn.on("click", function () {
                $(".hide").css("visibility", "visible")
                var searchQuery = challengeID + "JavaScript";
                let googleKey = "AIzaSyCN8BP_zA7LbOr5ZegORQuuaaKh06r5Fkk";
                $.ajax({
                    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchQuery + "&key=" + googleKey,
                    method: "GET"
                }).then(function (data) {
                    console.log(data);
                    console.log(data.items[1].id.videoId);
                    for (var videoNum = 0; videoNum < 5; videoNum++) {
                        var videoUrl = "https://www.youtube.com/embed/" + data.items[videoNum].id.videoId;
                        console.log(videoUrl);
                        $(".videos").append('<iframe class="card video" width="283.5" height="230" src=' + videoUrl + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                    }
                }).catch(function (error) {
                    console.log(error)
                })

            })
    
            favSpan.on("click", function () {
                favArray.push(challengeID);
                localStorage.setItem("Favorites", JSON.stringify(favArray))
                console.log(favArray);
            })

        })
    })

    hard.on("click", function () {
        challengeIndex = Math.floor(Math.random() * hardArr.length)
        challengeID = hardArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (props) {
            $(".buttons").empty();
            $("#youtubeBtn").append(youtubeBtn)
            youtubeBtn.prepend(youtubeIcon)
            q.empty();
            q.append(qDiv);
            qDiv.append(favSpan);
            favSpan.append(favIcon);
            qDiv.append(qText);
            qText.text(props.description)
            console.log(props);

            // Youtube API search call - Mathew 
            youtubeBtn.on("click", function () {
                $(".hide").css("visibility", "visible")
                var searchQuery = challengeID + "JavaScript";
                let googleKey = "AIzaSyCN8BP_zA7LbOr5ZegORQuuaaKh06r5Fkk";
                $.ajax({
                    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchQuery + "&key=" + googleKey,
                    method: "GET"
                }).then(function (data) {
                    console.log(data);
                    console.log(data.items[1].id.videoId);
                    for (var videoNum = 0; videoNum < 5; videoNum++) {
                        var videoUrl = "https://www.youtube.com/embed/" + data.items[videoNum].id.videoId;
                        console.log(videoUrl);
                        $(".videos").append('<iframe class="card video" width="283.5" height="230" src=' + videoUrl + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                    }
                }).catch(function (error) {
                    console.log(error)
                })

            })

            favSpan.on("click", function () {
                favArray.push(challengeID);
                localStorage.setItem("Favorites", JSON.stringify(favArray))
            })

        })
    })

    //toggle f(x) for navbar 
    function toggle() {
        var burger = document.querySelector('.burger');
        var nav = document.querySelector('#' + burger.dataset.target);

        burger.addEventListener('click', function () {
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });

    }
    toggle();

    //Saving individual's name from index.html
    let save = $("#saveName");
    let user = $("#userName");
    let loadName = $("#name");


    loadName.text(localStorage.getItem("Name"));
    save.on("click", function () {
        if (user.val() === "") {
            localStorage.setItem("Name", "friend")
        } else {
            localStorage.setItem("Name", user.val());
        }
    })


    console.log(favArray);
    if(favArray.length > 0){
    let clear = $("<button>").attr("class", "button is-rounded is-medium is-danger");
    clear.text("Empty Favorites");
    clear.attr("id", "clear");
    $("#favContainer").append(clear);
    $("#favContainer").append($("<hr>"));
    clear.on("click", function () {
        localStorage.clear("Favorites");
        location.reload();
    })
    };

    function appendFavs() {
        let favContainer = $("#favContainer");
        let favBox = $("<div>").attr("class", "box");
        let favArticle = $("<article>").attr("class", "media");
        let favDivLeft = $("<div>").attr("class", "media-left");
        let favNav = $("<nav>").attr("class", "level is-mobile");
        let favLevelLeft = $("<div>").attr("class", "level-left");
        let favIconAnchor = $("<a>").attr("class", "level-item");
        favIconAnchor.attr("aria-label", "reply");
        let favIconSpan = $("<span>").attr("class", "icon is-small");
        let favIconTwo = $("<i>").attr("class", "fas fa-star");
        favIconTwo.attr("id", "favIconTwo");
        favIconTwo.attr("aria-hidden", "true");
        let favMediaContent = $("<div>").attr("class", "media-content");
        let favContent = $("<div>").attr("class", "content");
        let favQuestionP = $("<p>");
        let favQuestionName = $("<strong>");
        let favQuestionDate = $("<small>");
        let favBR = $("<br>");
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + favArray[i],
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (props) {
            favQuestionName.text(props.name);
            favQuestionP.text(props.description);
            console.log(props)
            favContainer.append(favBox);
            favBox.append(favArticle)
            favArticle.append(favDivLeft);
            favDivLeft.append(favNav);
            favNav.append(favLevelLeft);
            favLevelLeft.append(favIconAnchor);
            favIconAnchor.append(favIconSpan);
            favIconSpan.append(favIconTwo);
            favBox.append(favMediaContent);
            favMediaContent.append(favContent);
            favContent.append(favQuestionName);
            favContent.append(favQuestionP);
            favQuestionP.append(favQuestionDate);
            favQuestionP.append(favBR);


        })
    }

    for (i = 0; i < favArray.length; i++) {
        appendFavs();
    }

});