// ==========================
// COUNTDOWN
// ==========================

function updateCountdown() {

    const examDate =
    new Date(studentData.jeeDate);

    const today =
    new Date();

    const difference =
    examDate - today;

    const days =
    Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

    document
        .getElementById("countdown")
        .innerHTML =
        `${days} Days Left`;

}

updateCountdown();


// ==========================
// UPDATE DASHBOARD
// ==========================

function loadDashboard() {

    const health =
    document.querySelector(".health-score");

    if (health)
        health.textContent =
        studentData.academicHealth;

    const scores =
    document.querySelectorAll(".score");

    if (scores.length >= 2) {

        scores[0].textContent =
        studentData.forgeScore;

        scores[1].textContent =
        studentData.recallScore;
    }

}

loadDashboard();


// ==========================
// MISSION CHECKBOXES
// ==========================

const checkboxes =
document.querySelectorAll(
'input[type="checkbox"]'
);

checkboxes.forEach(box => {

    box.addEventListener(
        "change",
        function () {

            const item =
            this.parentElement;

            if (this.checked) {

                item.style.opacity =
                "0.5";

            } else {

                item.style.opacity =
                "1";
            }

        }
    );

});
