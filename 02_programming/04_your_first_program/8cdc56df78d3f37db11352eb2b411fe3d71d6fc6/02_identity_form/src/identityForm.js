const identityForm = (reader) => {
  // Code here
  reader.question("What is your first name ?", (firstName) => {
    //const prenom = firstName;
    reader.question("What is your last name", (lastName) => {
      //const nom = lastName;
      reader.question("What is your age ?", (age) => {
        //const age2 = age;
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close();
      });
    });
  }); 
};

// Leave line below for tests to work
module.exports = identityForm;
