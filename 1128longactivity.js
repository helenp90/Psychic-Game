function Programmer (personal, professional) {
  this.personal = personal;
  this.professional = professional;
  this.Resume = function() {
    if (this.personal === true) {
      console.log(this.personal, this.professional);
    }
  };
}
