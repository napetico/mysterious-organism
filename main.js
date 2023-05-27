// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Part of task 3: Keeps new pAequor object in correlative order
let specimenCount = 0;

const newSpecimenNum = () => {
  specimenCount++;
  return specimenCount;
}

// Task 3 : Factory Function return object of pAequor
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    _dna: arr,
    // Task 4: mutate() Function to change a random base for different random base.
    mutate () {
      let randIndex = Math.floor(Math.random() * 15);
      let currentBase = this._dna[randIndex];
      
      if (currentBase === 'A') {
        const dnaBases = ['T', 'C', 'G'];
        this._dna[randIndex] = dnaBases[Math.floor(Math.random() * 3)];
      }
      if (currentBase === 'T') {
        const dnaBases = ['A', 'C', 'G'];
        this._dna[randIndex] = dnaBases[Math.floor(Math.random() * 3)];
      }
      if (currentBase === 'C') {
        const dnaBases = ['A', 'T', 'G'];
        this._dna[randIndex] = dnaBases[Math.floor(Math.random() * 3)];
      }
      if (currentBase === 'G') {
        const dnaBases = ['A', 'T', 'C'];
        this._dna[randIndex] = dnaBases[Math.floor(Math.random() * 3)];
      }
    },
    // Task 5: compareDNA() Function to see the % of similiar bases in two specimens
    compareDNA (obj) {
      let sharedDnaCounter = 0

      for (i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === obj._dna[i]) {
          sharedDnaCounter++;
        }
      }
      if (sharedDnaCounter > 0) {
        let matchPercent = Math.round((sharedDnaCounter / this._dna.length) * 100);
        console.log(`Specimens ${this.specimenNum} and ${obj.specimenNum} shared ${matchPercent}% of their DNA.`)
      }
    },
    // Task 6: willLikelySurvive() Function to check specimens +60% 'C' or 'G' presence.
    willLikelySurvive () {
      let strongBaseCount = 0;

      this._dna.forEach((base) => {
        if (base === 'C' || base === 'G') {
          strongBaseCount++;
        }
      });
      
      const strongBasePercent = Math.round((strongBaseCount / this._dna.length) * 100);

      if (strongBasePercent >= 60) {
        return true;
      } else {
        return false;
      }
    },
    // Task 9 (EXTRA): complementaryStrand() Function to create the match for the current specimen.
    complementaryStrand () {
      matchingStrand = [];

      this._dna.forEach(
        base => {
          if (base === 'A') {
            matchingStrand.push('T');
          }
          if (base === 'T') {
            matchingStrand.push('A');
          }
          if (base === 'C') {
            matchingStrand.push('G');
          }
          if (base === 'G') {
            matchingStrand.push('C');
          }
        }
      )

      return matchingStrand;
    }
  }
}

// Task 7: Create and array of 30 specimens that can survive in their enviroment.
const pAequorsToSurvive = [];

const specimensNeeded = 30;
let specimensAdded = 0;

do {
  let instanceIteration = pAequorFactory(newSpecimenNum(), mockUpStrand());

  if (instanceIteration.willLikelySurvive() === true) {
    specimensAdded++;
    pAequorsToSurvive.push(instanceIteration);
  };
} while (specimensAdded < specimensNeeded);


//Testing that pAequorFactory() generate 2 objects with specimeNum and dna
/*console.log(pAequorFactory(newSpecimenNum(), mockUpStrand()));
console.log(pAequorFactory(newSpecimenNum(), mockUpStrand()));*/

// Testing that mutate() changes one random base for any of the other three bases
/*const testAequorSpecimen = pAequorFactory(1, mockUpStrand());
console.log(testAequorSpecimen);
testAequorSpecimen.mutate();
console.log(testAequorSpecimen);*/

// Testing that compareDNA() the % of bases two specimnes have in common in the same index
/*const specimen1 = pAequorFactory(newSpecimenNum(), mockUpStrand());
const specimen2 = pAequorFactory(newSpecimenNum(), mockUpStrand());
console.log(specimen1);
console.log(specimen2);
specimen1.compareDNA(specimen2);*/

// Testing that willLikelySurvive() returns true or false for more that 60% 'C' or 'G' DNA presence
/*const specimen1 = pAequorFactory(newSpecimenNum(), mockUpStrand());
const specimen2 = pAequorFactory(newSpecimenNum(), mockUpStrand());
const specimen3 = pAequorFactory(newSpecimenNum(), mockUpStrand());
console.log(specimen1);
console.log(specimen2);
console.log(specimen3);
console.log(specimen1.willLikelySurvive());
console.log(specimen2.willLikelySurvive());
console.log(specimen3.willLikelySurvive());*/

// Testing if the Function in task 7 populates the array pAequorsToSurvive with 30 correct specimens
/*console.log(pAequorsToSurvive);
console.log(pAequorsToSurvive.length);*/

// Testing if complementaryStrand() Fucntion creates a matching strand
/*const specimen1 = pAequorFactory(newSpecimenNum(), mockUpStrand());
console.log(specimen1);
console.log(specimen1.complementaryStrand());*/