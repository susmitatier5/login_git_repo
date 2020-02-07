$(document).ready(function() {

    var logintoken = window.localStorage.getItem("accessToken")
    console.log("token ::: ", logintoken)
    if (logintoken !== null && logintoken !== undefined && logintoken !== "") {
        console.log("token is found")
            // window.location.href = "dashboard.html";
    } else {
        window.location.href = "login.html";
    }

    let user = $("#iid").val();
    console.log(user);
    $("#dashboardHeading").html("<h1>" + "Welcome" + "  " + user + "</h1>" + `<button type="submit" value="logout" id="buttonWrap">logout</button>`)
    $("#buttonWrap").click(function() {
        console.log("button is clicked");
        window.localStorage.removeItem("accessToken");

        console.log(window.localStorage.getItem("accessToken"))

        window.location.href = "login.html"
            // window.localStorage.getItem("accessToken", function(res) {
            //         console.log("access token found : ", res)
            //     })
            // window.location.href = "login.html";
    });
});