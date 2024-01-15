
    function dark() {
        var element = document.querySelector(".container");
        var elementB = document.body;
        //var elementBT = document.querySelectorAll(".option-button");
        element.style.backgroundColor = "#292929";
        element.style.color = "#ddd";

        elementB.style.backgroundColor = "#161616";
        elementB.style.color = "#ddd";
        //elementBT.classList.toggle("dark-mode-btn");

        const nodeList = document.querySelectorAll(".option-button");
        for (let i = 0; i < nodeList.length; i++) {
         nodeList[i].style.backgroundColor = "#292929";
         nodeList[i].style.color = "#ddd";
        }

        const nodeList2 = document.querySelectorAll(".adv-option-button");
        for (let i = 0; i < nodeList2.length; i++) {
         nodeList2[i].style.backgroundColor = "#292929";
         nodeList2[i].style.color = "#ddd";
        }
    }

    function light() {
        
            var element = document.querySelector(".container");
            var elementB = document.body;
            //var elementBT = document.querySelectorAll(".option-button");
            element.style.backgroundColor = "#fff";
            element.style.color = "#020929";
    
            elementB.style.backgroundColor = "#e0e9ff";
            elementB.style.color = "#161616";
            //elementBT.classList.toggle("dark-mode-btn");
    
            const nodeList = document.querySelectorAll(".option-button");
            for (let i = 0; i < nodeList.length; i++) {
             nodeList[i].style.backgroundColor = "#fff";
             nodeList[i].style.color = "#020929";
            }

            const nodeList2 = document.querySelectorAll(".adv-option-button");
            for (let i = 0; i < nodeList2.length; i++) {
            nodeList2[i].style.backgroundColor = "#fff";
            nodeList2[i].style.color = "#292929";
            }
        
    }

let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

const intializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = intializer();

    //border: 1px solid #020929;


    //nodeList[i].style.backgroundColor = "#ddd";
    //nodeList[i].style.color = "#292929";