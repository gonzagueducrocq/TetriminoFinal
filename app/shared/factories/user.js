app.factory("userService", function() {
    return {
        this.user = {
            id: 4
        };

        this.isConnected = function() {
            return (this.user.id);
        };
    }
});
