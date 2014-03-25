if (Meteor.isClient) {
    Template.admin.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    })
    Template.adminLink.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    })
}

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'contacts'
  });

  this.route('admin', {
    path: '/admin'
  });

  this.route('addContact', {
    path: '/addContact'
  });
});
