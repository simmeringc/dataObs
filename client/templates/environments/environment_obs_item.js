Template.environmentObsItem.events({
  'click .obsGoBack': function(e) {
     e.preventDefault();
     Router.go('environmentList');
  },
  'click .editObsItem': function(e) {
     e.preventDefault();
     Router.go('editSpec');
  },
  'click .createNewObservation': function(e) {
     e.preventDefault();
     Router.go('observationCreate', this);
  }
});
