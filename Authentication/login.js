$(document).ready(function() {
    let accessToken = "";
    console.log("asdmfhng mnhgfjhtgfs")
    var token = window.localStorage.getItem("accessToken")
    console.log("token ::: ", token)
    if (token !== null && token !== undefined && token !== "") {
        // console.log("token is found")
        window.location.href = "dashboard.html";
    }

    $("#bid").click(function() {
        console.log("login button is working")
        let email = $("#iid").val();
        console.log("email: " + email);
        $.ajax({
            type: "POST",
            url: "http://app.fbdomination.io/users/login",
            data: { email: email }
        }).done(function(res) {
            console.log("Res ", res);
            if (res) {
                console.log({ "response": res });
                window.localStorage.setItem("accessToken", res.accessToken);
                // chrome.storage.local.set({ "accessToken": res.accessToken });
                // console.log(window.localStorage.getItem("accessToken"));
                // if (window.localStorage.getItem("accessToken") == null) {
                //     window.location.href = "dashboard.html";
                // } else {
                //     window.location.href = "login.html";
                //     // accessToken = window.localStorage.getItem("accessToken");
                // }

                window.location.href = "dashboard.html";
            }
        });
    });
});