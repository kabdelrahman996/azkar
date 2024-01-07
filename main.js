


let phrases = {
    1: {
        text: "سُبْحَانَ اللَّهِ",
        translation: "Glory be to Allah",
        category: "Tasbih"
    },
    2: {
        text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        translation: "Glory be to Allah and praise be to Him",
        category: "Tasbih"
    },
    3: {
        text: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ",
        translation: "Glory be to Allah and all praise is for Allah",
        category: "Tasbih"
    },
    4: {
        text: "سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ",
        translation: "Glory be to Allah, the Supreme, and praise be to Him",
        category: "Tasbih"
    },
    5: {
        text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
        translation: "Glory be to Allah and praise be to Him; Glory be to Allah, the Supreme",
        category: "Tasbih"
    },
    6: {
        text: "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ",
        translation: "There is no god but Allah, alone, without any partner. His is the sovereignty, and His is the praise, and He has power over everything.",
        category: "Tasbih"
    },
    7: {
        text: "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ",
        translation: "Praise be to Allah, the Lord of all the worlds",
        category: "Tasbih"
    },
    8: {
        text: "لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ",
        translation: "There is no power and no strength except with Allah",
        category: "Tasbih"
    },
    9: {
        text: "الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد",
        translation: "O Allah, bless, grant peace, and send blessings upon our master Muhammad",
        category: "Dua"
    },
    10: {
        text: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه.",
        translation: "Glory be to Allah, and praise be to Him, as much as the number of His creation, as much as pleases Him, as much as the weight of His Throne, and as much as the ink of His words.",
        category: "Tasbih"
    },
    11: {
        text: "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.",
        translation: "O Allah, grant me health in my body, O Allah, grant me health in my hearing, O Allah, grant me health in my sight. There is no deity except You.",
        category: "Dua"
    },
    12: {
        text: "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.",
        translation: "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. There is no deity except You.",
        category: "Dua"
    },
    13: {
        text: "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.",
        translation: "O Allah, I ask You for forgiveness and well-being in this world and in the Hereafter. O Allah, I ask You for forgiveness and well-being in my religion, my worldly affairs, my family, and my wealth. O Allah, conceal my faults, calm my fears, and protect me from before me and behind me, from my right and my left, and from above me. I seek refuge in Your greatness from being struck down from beneath me.",
        category: "Dua"
    },
    14: {
        text: "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
        translation: "O Living, O Self-Subsisting and Supporter of all, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
        category: "Dua"
    }
};




function displayRandomPhrase() {
    let randomPhrase = getRandomPhrase();

    let popup = document.createElement("div");
    popup.classList.add("popup");
    let content = document.createElement("h2");
    content.innerHTML = `${randomPhrase.text} - ${randomPhrase.translation}`;
    popup.append(content);
    document.body.append(popup);

    setTimeout(function () {
        popup.parentNode.removeChild(popup);
        console.log("popup removed"); // console message
    }, 60000);

    popup.addEventListener("click", function () {
        popup.remove();
    });
}

function getRandomPhrase() {
    let keys = Object.keys(phrases);
    let randomIndex = Math.floor(Math.random() * keys.length);
    let randomKey = keys[randomIndex];
    return phrases[randomKey];
}

const saveBtn = document.querySelector("button");



saveBtn.addEventListener("click", function () {
    const timeInput = document.querySelector("#time").value;
    const timeValue = timeInput < 5 ? 5 : timeInput;
    console.log(`time is : ${timeValue}`)
    let intervalId = setInterval(displayRandomPhrase, timeValue * 60 * 1000);
});