ajax("https://api.nuget.org/v3/index.json", {
    statusCode: {
        200: function(response) {
            console.log("HTTP 200");
        }
    },
    success: function(response) {
        console.log("Success :)");
    },
    error: function(response) {
        console.log("Error :(");
    }
});
