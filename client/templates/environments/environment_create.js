Template.environmentCreate.events({
  'submit form': function(e) {
    e.preventDefault();
    var environment = {
      nameOfEnvironment: $(e.target).find('[name=nameOfEnvironment]').val()
    };
    Meteor.call('environmentInsert', environment, function(error, result) {
      Router.go('environmentList');
    });
  }
});
