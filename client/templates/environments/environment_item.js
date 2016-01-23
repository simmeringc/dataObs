Template.environmentItem.events({
  'click .deleteEnvironment': function(e) {
    Session.set('environmentId', this);
    //console.log('environmentId');
  }
});

Template.environmentItem.rendered=function() {
    $('.deleteEnvironment').confirmation({
      onConfirm : function(){
        var environmentId = Session.get('environmentId');
        //console.log(environmentId);
      Meteor.call('environmentDelete', environmentId, function(error, result) {
        Router.go('environmentList')
      });
      }
    });
    // $('.deleteEnvironment').confirmation({
    //   onCancel : function(){
    //   console.log("ok");
    //   }
    // });
}
