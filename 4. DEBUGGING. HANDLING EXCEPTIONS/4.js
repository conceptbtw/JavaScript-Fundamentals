class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
}
function showMonthName(month) {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    if (month >= 1 && month <= 12) {
        return months[month - 1];
    } else {
        throw new MonthException('Incorrect month number');
    }
}
try {
    console.log(showMonthName(2));
    console.log(showMonthName(13));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}