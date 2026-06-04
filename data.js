// ==========================
// STUDENTOS DATA
// ==========================

const studentData = {

    name: "Vasu",

    rank: "Shadow Knight",

    academicHealth: 82,

    forgeScore: 76,

    recallScore: 69,

    jeeDate: "2026-12-31",

    // ==========================
    // SUBJECTS
    // ==========================

    subjects: [

        {
            name: "Physics",
            progress: 72,
            color: "#3b82f6",

            chapters: [

                {
                    name: "Units & Dimensions",

                    started: "2026-06-01",

                    target: "2026-06-10",

                    status: "Mastered",

                    readiness: 85,

                    mistakes: 3
                },

                {
                    name: "Motion in 1D",

                    started: "2026-06-05",

                    target: "2026-06-15",

                    status: "Revising",

                    readiness: 62,

                    mistakes: 5
                },

                {
                    name: "Motion in 2D",

                    started: "2026-06-12",

                    target: "2026-06-22",

                    status: "Practicing",

                    readiness: 48,

                    mistakes: 7
                },

                {
                    name: "NLM",

                    started: "2026-06-20",

                    target: "2026-07-01",

                    status: "Practicing",

                    lecture: {
                        completed: 5,
                        total: 8
                    },

                    dpp: {
                        given: 120,
                        solved: 80,
                        correct: 65
                    },

                    homework: {
                        given: 40,
                        solved: 35,
                        correct: 28
                    },

                    module: {
                        given: 150,
                        solved: 60,
                        correct: 45
                    },

                    pyq: {
                        given: 85,
                        solved: 20,
                        correct: 14
                    },

                    revision: {
                        daily: true,
                        sunday: true,
                        weekly: false,
                        monthly: false
                    },

                    forge: 52,

                    recall: 45,

                    readiness: 30,

                    mistakes: 11
                }

            ]
        },

        {
            name: "Chemistry",
            progress: 65,
            color: "#22c55e"
        },

        {
            name: "Mathematics",
            progress: 78,
            color: "#a855f7"
        },

        {
            name: "Biology",
            progress: 35,
            color: "#06b6d4"
        },

        {
            name: "English",
            progress: 52,
            color: "#f59e0b"
        },

        {
            name: "Bengali",
            progress: 48,
            color: "#fb7185"
        }

    ],

    // ==========================
    // TODAY'S MISSIONS
    // ==========================

    missions: [

        {
            task: "Physics NLM DPP",
            completed: false
        },

        {
            task: "Maths Functions Revision",
            completed: false
        },

        {
            task: "Chemistry Module",
            completed: false
        }

    ],

    // ==========================
    // MISTAKE BANK
    // ==========================

    mistakes: [

        {
            subject: "Physics",

            chapter: "NLM",

            topic: "Pseudo Force",

            type: "Concept Error",

            repeat: 4,

            resolved: false
        },

        {
            subject: "Physics",

            chapter: "Motion in 2D",

            topic: "Relative Velocity",

            type: "Calculation Error",

            repeat: 2,

            resolved: true
        },

        {
            subject: "Chemistry",

            chapter: "Mole Concept",

            topic: "Limiting Reagent",

            type: "Concept Error",

            repeat: 3,

            resolved: false
        }

    ]

};
