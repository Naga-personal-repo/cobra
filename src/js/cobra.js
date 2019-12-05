var acc = document.getElementsByClassName("accordion");
var i;
var selectedIndex = 0;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        selectedIndex = this.tabIndex;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        var acc = document.getElementsByClassName("accordion");
        for (var j = 0; j < acc.length; j++) {
            if (j !== selectedIndex) {
                var panel = acc[j].nextElementSibling;
                panel.style.maxHeight = null;
            }
        }
    });
}

var manufacturingItems = document.querySelectorAll("#selectedList li");
var i;
for (i = 0; i < manufacturingItems.length; i++) {
    manufacturingItems[i].onclick = function () {
    document.getElementsByClassName("seleted-item")[0].innerHTML = this.innerHTML;
    };
};

var selectModelItems = document.querySelectorAll("#selectedModelList li");
var k;
for (k = 0; k < selectModelItems.length; k++) {
    selectModelItems[k].onclick = function () {
    document.getElementsByClassName("seleted-model")[0].innerHTML = this.innerHTML;
    };
};

var selectedTypeItems = document.querySelectorAll("#selectedTypeList li");
var j;
for (j = 0; j < selectedTypeItems.length; j++) {
    selectedTypeItems[j].onclick = function () {
    document.getElementsByClassName("seleted-type")[0].innerHTML = this.innerHTML;
    };
};