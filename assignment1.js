function readData(callback) {
    setTimeout(function () {
        let student = {
            name: "Ashu",
            marks: 450,
            totalMarks: 500
        };

        callback(null, student);
    }, 1000);
}

function calculatePercentage(student, callback) {
    setTimeout(function () {
        student.percentage = (student.marks / student.totalMarks) * 100;

        callback(null, student);
    }, 1000);
}

function findGrade(student, callback) {
    setTimeout(function () {
        if (student.percentage >= 90) {
            student.grade = "A+";
        } else if (student.percentage >= 80) {
            student.grade = "A";
        } else if (student.percentage >= 70) {
            student.grade = "B";
        } else if (student.percentage >= 60) {
            student.grade = "C";
        } else if (student.percentage >= 50) {
            student.grade = "D";
        } else {
            student.grade = "F";
        }

        callback(null, student);
    }, 1000);
}

function saveResult(student, callback) {
    setTimeout(function () {
        console.log("Result saved successfully");
        callback(null, student);
    }, 1000);
}

function processStudent() {

    readData(function (err, student) {
        if (err) {
            console.log(err);
            return;
        }

        calculatePercentage(student, function (err, student) {
            if (err) {
                console.log(err);
                return;
            }

            findGrade(student, function (err, student) {
                if (err) {
                    console.log(err);
                    return;
                }

                saveResult(student, function (err, student) {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    console.log("Student Name:", student.name);
                    console.log("Marks:", student.marks);
                    console.log("Percentage:", student.percentage + "%");
                    console.log("Grade:", student.grade);
                });
            });
        });
    });
}

processStudent();