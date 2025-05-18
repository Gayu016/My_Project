function calculateBMI() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    age=Number(age);
    weight=Number(weight);
    height=Number(height);
    height=height/100;

    if (!age|| !weight || !height||age<=0||weight<=0||height<=0 ) {
        
        document.getElementById("result").innerText = "Please enter all values.";
        return;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Custom message based on gender
    let genderMessage = gender === "male" ? "Sir" : "Ma'am";

    document.getElementById("result").innerText = `Hello ${genderMessage}, you are ${age} years old. Your BMI is ${bmi.toFixed(2)} (${category}).`;
}
