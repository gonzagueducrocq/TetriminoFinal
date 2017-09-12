app.factory("userService", function() {
    return {
        user : {
            id: 4
        },

      isConnected : function() {
            return (this.user.id);
        }
    }
});
