Meteor.publish('my-contacts', function publishFunction(){
  return Contacts.find({submittedBy: this.userId}, {sort: {name: 1}});
});
