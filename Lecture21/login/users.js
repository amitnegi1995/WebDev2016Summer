/**
 * Created by championswimmer on 07/08/16.
 */

const users = [
    {username: "test", password: "5f4dcc3b5aa765d61d8327deb882cf99"}
];

module.exports  = {
    findOne: function(username) {
        for (user of users) {
            if (user.username == username) {
                return user;
            }
        }
    }
};