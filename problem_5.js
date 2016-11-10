let obj = {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 25,
    student: true,
    zipCode: 12345,
    studentId: "123456789ID",
}

for (let prop in obj){
    if (typeof obj[prop] === "number") {
        console.log(obj[prop]);
    }
}
