var socket = io();

$('document').ready(function() {
    $('form').on('submit', function(e) {
        var text = $('#message').val();
        socket.emit('message', text);
        $('#message').val('');
        e.preventDefault();
        return false;
    });

    socket.on('message', function(msg) {
        let time = new Date();

        if (!msg) {
            return;
        }

        $('#history').append([
            $('<p>', { class: 'time' }).text('Posted at ' + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})),
            $('<p>', { class: 'message past-message' }).text(msg),
            $('<div>', { class: 'clear' })
        ]);
        $('#history').scrollTop($('#history')[0].scrollHeight);


    });


});