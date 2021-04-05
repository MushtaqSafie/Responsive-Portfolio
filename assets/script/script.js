let projectOne = document.getElementById("project1");

projectOne.addEventListener('mouseover', function() {
  this.src = './assets/img/firstProject.png';
});
projectOne.addEventListener('mouseout', function() {
  this.src = './assets/img/firstProjectLogo.png';
});