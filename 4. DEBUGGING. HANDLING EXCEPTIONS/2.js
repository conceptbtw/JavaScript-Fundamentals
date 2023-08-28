function checkAge() {
    try {
        const name = prompt("Please enter your name:");
        const age = parseInt(prompt("Please enter your age:"));
        const status = prompt("Please enter your status (admin, moderator, user):");
        if (isNaN(age)) {
            throw new TypeError("Age must be a number");
        }
        if (age < 18 || age > 70) {
            throw new RangeError("Age must be between 18 and 70");
        }
        if (name.trim() === "" || age === "" || status.trim() === "") {
            throw new Error("The field is empty! Please enter your age");
        }
        if (status !== "admin" && status !== "moderator" && status !== "user") {
            throw new EvalError("Invalid status");
        }
        alert("You have access to watch the movie!");
    } catch (error) {
        if (error instanceof TypeError) {
            alert(`Error: ${error.message}`);
        } else if (error instanceof RangeError) {
            alert(`Error: ${error.message}`);
        } else if (error instanceof Error) {
            alert(`Error: ${error.message}`);
        } else if (error instanceof EvalError) {
            alert(`Error: ${error.message}`);
        } else {
            alert("An error occurred.");
        }
    }
}
checkAge();
