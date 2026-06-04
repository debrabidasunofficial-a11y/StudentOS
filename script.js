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

            <div class="chapter-card">

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
