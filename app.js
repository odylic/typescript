console.log("hello world");
// types person as the interface of person, and states it returns a string
function welcomePerson(person) {
    console.log("Hey " + person.firstName + " " + person.lastName);
    return "Hey " + person.firstName + " " + person.lastName;
}
var james = {
    firstName: "James",
    lastName: "Quick"
};
welcomePerson(james);
