
// Scenario 1

scenes = {
    0: {
        "smullyan": "Chegámos à Ilha de Bahava! Olha - estão ali dois habitantes - uma princesa e um príncipe.",
        "empress": "",
        "princess": "Bem-vindos à Ilha de Bahava!",
        "prince": "Bem-vindos!",
        "smullyanImg": smullyanImgs["smullyan-happy"],
        "empressImg": "",
        "princessImg": princess1Imgs["princess-waving"],
        "princeImg": prince1Imgs["prince-normal-smiling"]
    },
    1: {
        "smullyan": "A ilha de Bahava é civilizada: tanto os homens como as mulheres podem ser cavaleiros, escudeiros ou normais.",
        "empress": "",
        "princess": "",
        "prince": "",
        "smullyanImg": smullyanImgs["smullyan-normal-presenting"],
        "empressImg": "",
        "princessImg": princess1Imgs["princess-side-normal"],
        "princeImg": prince1Imgs["prince-side-smiling"]
    },
    2: {
        "smullyan": "Cavaleiros dizem sempre a verdade. Escudeiros mentem sempre. Normais dizem a verdade às vezes e mentem outras vezes.",
        "empress": "",
        "princess": "",
        "prince": "",
        "smullyanImg": smullyanImgs["smullyan-normal"],
        "empressImg": "",
        "princessImg": princess1Imgs["princess-side-normal"],
        "princeImg": prince1Imgs["prince-side-smiling"]
    },
    3: {
        "smullyan": "Uma antiga imperatriz de Bahava, num bizarro momento, assinou um decreto em que... Oh!",
        "empress": "Cavaleiros só podem casar com escudeiros, e escudeiros com cavaleiros. Normais só podem casar com normais.",
        "princess": "",
        "prince": "",
        "smullyanImg": smullyanImgs["smullyan-surprised"],
        "empressImg": empressImgs["empress-normal"],
        "princessImg": princess1Imgs["princess-side-excited"],
        "princeImg": prince1Imgs["prince-side-smiling"]
    },
    4: {
        "smullyan": "Entre a princesa e o príncipe, um deles poderá mentir, ou ambos, ou nenhum.",
        "empress": "",
        "princess": "A lei matrimonial é sagrada!",
        "prince": "Escudeiros só casam com cavaleiros!",
        "smullyanImg": smullyanImgs["smullyan-normal"],
        "empressImg": "",
        "princessImg": princess1Imgs["princess-side-pointing"],
        "princeImg": prince1Imgs["prince-side-pointing"]
    },
    5: {
        "smullyan": "",
        "empress": "",
        "princess": "",
        "prince": "Tu não és normal!",
        "smullyanImg": smullyanImgs["smullyan-normal-side-eye"],
        "empressImg": "",
        "princessImg": princess1Imgs["princess-side-excited"],
        "princeImg": prince1Imgs["prince-side-pointing"]
    },
    6: {
        "smullyan": "",
        "empress": "",
        "princess": "Tu é que não és normal!",
        "prince": "",
        "smullyanImg": smullyanImgs["smullyan-serious-side-eye"],
        "empressImg": "",
        "princessImg": princess1Imgs["princess-side-pointing"],
        "princeImg": prince1Imgs["prince-side-smiling"]
    },
    7: {
        "smullyan": "Será a princesa escudeira, cavaleira ou normal? E o príncipe? Arrasta os blocos com o rato e descobre a verdade. Usa o rascunho à direita como ajuda.",
        "empress": "",
        "princess": "",
        "prince": "",
        "smullyanImg": smullyanImgs["smullyan-serious-side-eye"],
        "empressImg": "",
        "princessImg": princess1Imgs["princess-side-normal"],
        "princeImg": prince1Imgs["prince-side-normal"]
    }
}

/* --- First load of the page --- */

loadScene(0)

document.querySelectorAll('.draggable').forEach(draggable => {
    draggable.addEventListener('dragstart', e => {
      e.dataTransfer.setData("type", draggable.textContent);
    });
});
  
document.querySelectorAll('.drop-zone').forEach(slot => {
slot.addEventListener('dragover', e => e.preventDefault());

slot.addEventListener('drop', e => {
        e.preventDefault();
        const dataType = e.dataTransfer.getData("type");
        slot.textContent = dataType;
    });
});

/* --- Functions --- */

function checkVictory() {
    var princessDropZone = document.querySelector(".drop-zone.princess");
    var princeDropZone = document.querySelector(".drop-zone.prince");

    if (princessDropZone.textContent == "Normal" && princeDropZone.textContent == "Normal") {
        console.log("Victory!");
    }
    else {
        console.log("Defeat...")
    }
}

function clearScene() {
    document.querySelector('.buttons-sub-section').innerHTML = "";

    for (var i = 1; i < 5; i++) {
        var div = document.querySelector(".div" + i);
        [...div.children].forEach(child => {
            if (!child.classList.contains("keep")) {
                div.removeChild(child);
            }
        });
    }
}

function loadScene(sceneNo) {
    clearScene()

    characters = ["smullyan", "empress", "princess", "prince"]

    const scene = scenes[sceneNo]

    for (var i = 0; i < characters.length; i++) {
        character = characters[i]
        var div = document.querySelector('.div' + (i + 1));
        var divSpeechBubble = document.createElement("div");

        if (scene[character] != "") {
            divSpeechBubble.classList.add("speech-bubble");
            divSpeechBubble.textContent = scene[character]
        }
        else {
            if (sceneNo != 7) {
                divSpeechBubble.classList.add("speech-bubble-empty");
            }
        }

        div.appendChild(divSpeechBubble);

        if (scene[character + "Img"] != "") {
            var img = document.createElement("img");
            img.src = scene[character + "Img"]
            div.appendChild(img);
        }
    }

    if (sceneNo == 7) {
        showMinigame();
    }
    else {
        hideMinigame();
    }

    loadButtons(sceneNo)
}

function showMinigame(){
    var knowledgeBase = document.querySelector(".knowledge-base");
    var princessDropZone = document.querySelector(".princess-drop-zone-div");
    var princeDropZone = document.querySelector(".prince-drop-zone-div");

    knowledgeBase.classList.remove("hidden");
    princessDropZone.classList.remove("hidden");
    princeDropZone.classList.remove("hidden");
}

function hideMinigame(){
    var knowledgeBase = document.querySelector(".knowledge-base");
    var princessDropZone = document.querySelector(".princess-drop-zone-div");
    var princeDropZone = document.querySelector(".prince-drop-zone-div");

    knowledgeBase.classList.add("hidden");
    princessDropZone.classList.add("hidden");
    princeDropZone.classList.add("hidden");
}

function loadButtons(sceneNo) {
    var div = document.querySelector('.buttons-sub-section');

    var prevButton = document.createElement("div");
    prevButton.textContent = "◀ Anterior";
    prevButton.classList.add("button");
    prevButton.onclick = function() { loadScene(sceneNo - 1); };

    var nextButton = document.createElement("div");
    nextButton.textContent = "Próximo ▶";
    nextButton.classList.add("button");
    nextButton.onclick = function() { loadScene(sceneNo + 1); };

    var answerButton = document.createElement("div");
    answerButton.textContent = "Responder ✔";
    answerButton.classList.add("button");
    answerButton.onclick = function() { checkVictory(); };

    if (sceneNo == 0) { // 1st Scene
        div.appendChild(nextButton);
    }
    else if (sceneNo == 7) { // Last scene
        div.appendChild(prevButton);
        div.appendChild(answerButton);
    }
    else {
        div.appendChild(prevButton);
        div.appendChild(nextButton);
    } 
}

