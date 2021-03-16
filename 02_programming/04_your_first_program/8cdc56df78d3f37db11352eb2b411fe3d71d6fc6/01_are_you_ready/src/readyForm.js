const readyForm = (reader) => {
  // Code here
  reader.question("Are you ready ?!", (answer) => {console.log(`Wow ${answer}! Alright! Let's got !`);
    reader.close();
  });};
// Leave line below for tests to work
module.exports = readyForm;
