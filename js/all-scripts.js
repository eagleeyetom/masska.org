$("#fontPlusBtn").click(function() {
            $("#textDiv > *").css("font-size", function(i, value) {
                return parseInt(value) + 10;
            });
        });
        $("#fontMinusBtn").click(function() {
            $("#textDiv > *").css("font-size", function(i, value) {
                return parseInt(value) - 10;
            });
        });
function switchColor() {
                document.getElementById("resultDiv").classList.toggle("toggle")
            }
