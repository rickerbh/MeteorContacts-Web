Meteor.startup(function () {
  // bootstrap the admin user if they exist -- You'll be replacing the id later
  // if (Meteor.users.findOne("pJXGk7TfwefiTsc5L")) {
  //   Roles.addUsersToRoles("pJXGk7TfwefiTsc5L", ['admin']);
  // }    
});

Meteor.methods({
  addContactServer : function(name, email, phone){
    var contactID = Contacts.insert({
          "name" : name,
          "email" : email,
          "phone" : phone,
          "createdAt" : new Date(),
          "submittedBy" : Meteor.userId()
      });
    return contactID;
  },
  deleteContactServer : function(id){
    Contacts.remove({"_id": id, "submittedBy": Meteor.userId()});
  }
});
