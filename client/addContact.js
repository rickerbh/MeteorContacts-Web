Template.addContact.events = {
  'click input.add_contact': function (event) {
    event.preventDefault();
    var new_contact_name = document.getElementById("new_contact_name").value;
    var new_contact_email = document.getElementById("new_contact_email").value;
    var new_contact_phone = document.getElementById("new_contact_phone").value;
    Meteor.call("addContactServer", new_contact_name, new_contact_email, new_contact_phone, function(error , contactID){
              console.log('added contact with Id .. ' + contactID);
            });
    document.getElementById("new_contact_name").value = "";
    document.getElementById("new_contact_email").value = "";
    document.getElementById("new_contact_phone").value = "";
  }
};