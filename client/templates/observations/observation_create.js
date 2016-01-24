Template.observationCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var observation = {
      nameOfObservation: $(e.target).find('[name=nameOfObservation]').val()
    };

    Meteor.call('observationInsert', observation, function(error, result) {
      Router.go('observationList', this.params._id);
    });
  }
});
