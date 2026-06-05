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

    const countdownElement =
    document.getElementById("countdown");

    if (countdownElement) {

        countdownElement.innerHTML =
        `${days} Days Left`;

    }

}

updateCountdown();


// ==========================
// DASHBOARD DATA
// ==========================

function loadDashboard() {

    const health =
    document.querySelector(
        ".health-score"
    );

    if (health) {

        health.textContent =
        studentData.academicHealth;

    }

    const scores =
    document.querySelectorAll(
        ".score"
    );

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

            }

            else {

                item.style.opacity =
                "1";

            }

        }
    );

});


// ==========================
// SUBJECTS
// ==========================

function loadSubjects() {

    const container =
    document.getElementById(
        "subjects-container"
    );

    if (!container) return;

    container.innerHTML = "";

    studentData.subjects.forEach(
        subject => {

            container.innerHTML += `

            <div class="subject-card">

                <div class="subject-title">

                    ${subject.name}

                </div>

                <div class="subject-progress">

                    <div
                    class="subject-progress-fill"

                    style="
                    width:${subject.progress}%;
                    background:${subject.color};
                    ">

                    </div>

                </div>

                <p style="
                margin-top:10px;
                color:#94a3b8;
                ">

                ${subject.progress}% Complete

                </p>

            </div>

            `;

        }
    );

}

loadSubjects();


// ==========================
// PHYSICS CHAPTERS
// ==========================

function loadPhysicsChapters() {

    const container =
    document.getElementById(
        "chapters-container"
    );

    if (!container) return;

    container.innerHTML = "";

    const physics =
    studentData.subjects.find(
        s => s.name === "Physics"
    );

    if (!physics) return;

    physics.chapters.forEach(
        chapter => {

            container.innerHTML += `

            <div
class="chapter-card"

data-index="${physics.chapters.indexOf(chapter)}"

onclick="
openChapterModal(
${physics.chapters.indexOf(chapter)}
)
">

                <h3>
                ${chapter.name}
                </h3>

                <div class="chapter-meta">
                    Started:
                    ${chapter.started}
                </div>

                <div class="chapter-meta">
                    Target:
                    ${chapter.target}
                </div>

                <div class="chapter-meta">
                    Status:
                    ${chapter.status || "Learning"}
                </div>

                ${chapter.lecture ? `

                <hr>

                <p>
                Lecture:
                ${chapter.lecture.completed}
                /
                ${chapter.lecture.total}
                </p>

                <p>
                DPP:
                ${chapter.dpp.solved}
                /
                ${chapter.dpp.given}
                </p>

                <p>
                Homework:
                ${chapter.homework.solved}
                /
                ${chapter.homework.given}
                </p>

                <p>
                Module:
                ${chapter.module.solved}
                /
                ${chapter.module.given}
                </p>

                <p>
                PYQ:
                ${chapter.pyq.solved}
                /
                ${chapter.pyq.given}
                </p>

                <p>
                Forge:
                ${chapter.forge}
                </p>

                <p>
                Recall:
                ${chapter.recall}
                </p>

                ` : ""}

                <div class="readiness">

                    ${chapter.readiness}%

                </div>

                <div>

                    Readiness

                </div>

                <div class="mistakes">

                    Mistakes:
                    ${chapter.mistakes}

                </div>

            </div>

            `;

        }
    );

}

loadPhysicsChapters();


// ==========================
// MISTAKE BANK
// ==========================

function loadMistakes() {

    const container =
    document.getElementById(
        "mistake-container"
    );

    if (!container) return;

    container.innerHTML = "";

    studentData.mistakes.forEach(
        mistake => {

            container.innerHTML += `

            <div class="mistake-card">

                <h3>

                ${mistake.topic}

                </h3>

                <p>

                Subject:
                ${mistake.subject}

                </p>

                <p>

                Chapter:
                ${mistake.chapter}

                </p>

                <p>

                Type:
                ${mistake.type}

                </p>

                <div class="repeat-warning">

                Repeated:
                ${mistake.repeat} Times

                </div>

                <div class="
                ${mistake.resolved ?
                "resolved" : ""}
                ">

                ${
                    mistake.resolved
                    ? "Resolved ✓"
                    : "Not Resolved"
                }

                </div>

            </div>

            `;

        }
    );

}

loadMistakes();


// ==========================
// STUDY TIMER
// ==========================

let timer;

let seconds = 0;

function updateTimer() {

    let hrs =
    Math.floor(seconds / 3600);

    let mins =
    Math.floor(
        (seconds % 3600) / 60
    );

    let secs =
    seconds % 60;

    const timerDisplay =
    document.getElementById(
        "timer-display"
    );

    if (!timerDisplay) return;

    timerDisplay.textContent =

        String(hrs)
        .padStart(2, "0")

        + ":"

        + String(mins)
        .padStart(2, "0")

        + ":"

        + String(secs)
        .padStart(2, "0");

}

const startBtn =
document.getElementById(
    "start-btn"
);

const stopBtn =
document.getElementById(
    "stop-btn"
);

const resetBtn =
document.getElementById(
    "reset-btn"
);

if (startBtn) {

    startBtn.addEventListener(
        "click",
        () => {

            clearInterval(timer);

            timer =
            setInterval(() => {

                seconds++;

                updateTimer();

            }, 1000);

        }
    );

}

if (stopBtn) {

    stopBtn.addEventListener(
        "click",
        () => {

            clearInterval(timer);

        }
    );

}

if (resetBtn) {

    resetBtn.addEventListener(
        "click",
        () => {

            clearInterval(timer);

            seconds = 0;

            updateTimer();

        }
    );

}

updateTimer();

// ==========================
// LOCAL STORAGE
// ==========================

function saveData(){

    localStorage.setItem(
        "studentOS",
        JSON.stringify(studentData)
    );

}

function loadSavedData(){

    const saved =
    localStorage.getItem(
        "studentOS"
    );

    if(saved){

        Object.assign(
            studentData,
            JSON.parse(saved)
        );

    }

}

loadSavedData();


// ==========================
// READINESS ENGINE
// ==========================

function calculateReadiness(
chapter
){

    if(
        !chapter.lecture
    ){
        return chapter.readiness || 0;
    }

    const lectureScore =

    (chapter.lecture.completed /
    chapter.lecture.total)
    * 100;

    const dppScore =

    (chapter.dpp.solved /
    chapter.dpp.given)
    * 100;

    const hwScore =

    (chapter.homework.solved /
    chapter.homework.given)
    * 100;

    const moduleScore =

    (chapter.module.solved /
    chapter.module.given)
    * 100;

    const pyqScore =

    (chapter.pyq.solved /
    chapter.pyq.given)
    * 100;

    const revisionScore =

    (
        (chapter.revision.daily ? 1 : 0)
        +
        (chapter.revision.weekly ? 1 : 0)
        +
        (chapter.revision.monthly ? 1 : 0)
        +
        (chapter.revision.sunday ? 1 : 0)
    )
    / 4 * 100;

    let readiness =

    lectureScore * 0.15 +

    dppScore * 0.15 +

    hwScore * 0.10 +

    moduleScore * 0.20 +

    pyqScore * 0.20 +

    revisionScore * 0.20;

    const saturationUnlocked =

    moduleScore >= 80 &&

    pyqScore >= 70 &&

    chapter.mistakes <= 3;

    if(
        !saturationUnlocked &&
        readiness > 84
    ){

        readiness = 84;

    }

    return Math.round(
        readiness
    );
}


// ==========================
// FORGE ENGINE
// ==========================

function calculateForge(){

    let total = 0;

    studentData.subjects.forEach(
        subject => {

        if(!subject.chapters)
        return;

        subject.chapters.forEach(
            chapter => {

            if(chapter.homework){

                total +=
                chapter.homework.solved
                * 0.1;

            }

            if(chapter.dpp){

                total +=
                chapter.dpp.solved
                * 0.15;

            }

            if(chapter.module){

                total +=
                chapter.module.solved
                * 0.2;

            }

            if(chapter.pyq){

                total +=
                chapter.pyq.solved
                * 0.3;

            }

        });

    });

    return Math.round(
        Math.min(
            total,
            100
        )
    );
}


// ==========================
// RECALL ENGINE
// ==========================

function calculateRecall(){

    let earned = 0;

    let total = 0;

    studentData.subjects.forEach(
        subject => {

        if(!subject.chapters)
        return;

        subject.chapters.forEach(
            chapter => {

            if(
                !chapter.revision
            ) return;

            total += 4;

            if(
                chapter.revision.daily
            ) earned++;

            if(
                chapter.revision.weekly
            ) earned++;

            if(
                chapter.revision.monthly
            ) earned++;

            if(
                chapter.revision.sunday
            ) earned++;

        });

    });

    if(total === 0)
    return 0;

    return Math.round(
        earned / total * 100
    );
}


// ==========================
// ACADEMIC HEALTH
// ==========================

function calculateAverageReadiness(){

    let total = 0;

    let count = 0;

    studentData.subjects.forEach(
        subject => {

        if(!subject.chapters)
        return;

        subject.chapters.forEach(
            chapter => {

            total +=
            calculateReadiness(
                chapter
            );

            count++;

        });

    });

    if(count === 0)
    return 0;

    return Math.round(
        total / count
    );
}

function calculateConsistency(){

    return 70;
}

function calculateAcademicHealth(){

    const forge =
    calculateForge();

    const recall =
    calculateRecall();

    const readiness =
    calculateAverageReadiness();

    const consistency =
    calculateConsistency();

    const result =

    forge * 0.35 +

    recall * 0.25 +

    readiness * 0.25 +

    consistency * 0.15;

    return Math.round(
        result
    );
}


// ==========================
// SHADOW RANK
// ==========================

function calculateRank(){

    const health =
    calculateAcademicHealth();

    if(health <= 10)
    return "E Rank";

    if(health <= 20)
    return "D Rank";

    if(health <= 35)
    return "C Rank";

    if(health <= 50)
    return "B Rank";

    if(health <= 65)
    return "A Rank";

    if(health <= 75)
    return "Shadow Knight";

    if(health <= 85)
    return "Elite Shadow";

    if(health <= 92)
    return "Shadow Commander";

    if(health <= 98)
    return "Shadow General";

    return "Shadow Monarch";
}


// ==========================
// WAR ROOM
// ==========================

function updateWarRoom(){

    const healthElement =
    document.getElementById(
        "war-health"
    );

    const rankElement =
    document.getElementById(
        "war-rank"
    );

    const forgeElement =
    document.getElementById(
        "war-forge"
    );

    const recallElement =
    document.getElementById(
        "war-recall"
    );

    if(healthElement){

        healthElement.textContent =
        calculateAcademicHealth();

    }

    if(rankElement){

        rankElement.textContent =
        calculateRank();

    }

    if(forgeElement){

        forgeElement.textContent =
        calculateForge();

    }

    if(recallElement){

        recallElement.textContent =
        calculateRecall();

    }

}

updateWarRoom();
