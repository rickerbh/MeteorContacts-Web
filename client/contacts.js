Meteor.subscribe('my-contacts');

Template.contacts.items = function(){
    return Contacts.find();
};

Template.contacts.events = {
  'click .delete-contact' : function (event) {
    event.preventDefault();
    if( Meteor.userId() ){
      console.log('deleting contact '+ this._id);
      Meteor.call("deleteContactServer", this._id);
    }
  }
};
