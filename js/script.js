
function upDate(previewPic) {
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src +"')";
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.lineHeight = "75px";
    document.getElementById("image").style.color = "#d11313";
	}

	function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").style.lineHeight = "475px";
    document.getElementById("image").style.color = "white";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
	}

    function set_tabindex() {
        var pictures = document.querySelectorAll(".preview");
        console.log(pictures.length);
        for (var i=0; i<pictures.length; i++)
        {
            pictures[i].setAttribute("tabindex", (i+1))
        }
    }