function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
}
  
function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
}
  
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}
  
function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let studentGrade = getGrade(studentScore);
    let message = "Class average: " + average + ". Your grade: " + studentGrade + ". ";

    if (studentGrade === "F") {
        message += "You failed the course.";
    } else {
        message += "You passed the course.";
    }

    return message;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 96));
console.log(studentMsg([45, 87, 98, 100, 86, 94, 67, 88, 94, 95], 56));