'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
  });

  Event.associate = models => {
    Event.belongsTo(models.User, {as: 'author'});

    Event.belongsToMany(models.User, {
      as: 'AttendingUsers',
      through: 'userEvents'
    });
  };

  // class method to get user info from a list of events
  // returns a promise.all of every event query
  Event.getAuthorsInfo = events => {
    return Promise.all(events.map(event => Event.getAuthorInfo(event)));
  };

  // class method that adds `author` attribute with appropriate user data
  // returns a promise that resolves with the updated event object
  // event should have prefetched users to prevent n+1 queries
  Event.getAuthorInfo = event => {
    const eventData = event.dataValues;

    // get author data
    return event.getAuthor().then(author => {
      eventData.author = {
        firstName: author.firstName,
        lastName: author.lastName,
        email: author.email
      };
      return eventData;
    });
  };

  return Event;
};