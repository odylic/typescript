export {};

console.log("hello world");

// types person as the interface of person, and states it returns a string
function welcomePerson(person: Person): string {
  console.log(`Hey ${person.firstName} ${person.lastName}`);
  return `Hey ${person.firstName} ${person.lastName}`;
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
