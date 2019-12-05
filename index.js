let argv = process.argv.slice(2);
argv = argv.toString();
let breedName = argv.slice(0, 4);
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
