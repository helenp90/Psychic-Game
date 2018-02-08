function Programmer (personal, professional) {
  this.personal = personal;
  this.professional = professional;
  this.Resume = function() {
    if (this.personal === true) {
      console.log(this.personal, this.professional);
    }
  };
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var helen = new Programmer( "Helen 27","financial analyst jquery")

helen.Resume()

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);