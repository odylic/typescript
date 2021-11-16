console.log("hello world");

function welcomePerson(person: Person) {
  console.log(`Hey ${person.firstName} ${person.lastName}`);
}

const james = {
  firstName: "James",
  lastName: "Quick",
};

welcomePerson(james);

interface Person {
  firstName: string;
  lastName: string;
}
