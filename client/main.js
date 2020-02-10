var socket = io();

$('document').ready(function() {
    //var user = prompt('Please enter your name: ');
    var chatBoolean = true;

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
            //$('<p>', { class: 'time' }).text('Posted  by: ' +  user + ' at: ' + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})),
            $('<p>', { class: 'time' }).text('Posted at: ' + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})),
            $('<p>', { class: 'message past-message' }).text(msg),
            $('<div>', { class: 'clear' })
        ]);
        $('#history').scrollTop($('#history')[0].scrollHeight);
    });

    $('#header-text-task').click(function() {
        if (chatBoolean) {
            $('#chat-wrapper').hide("slow");
            $('#task-wrapper').show("slow");
            $('#header-text-chat').css('color', 'black');
            $('#header-text-task').css('color', '#d3d3d3');
            chatBoolean = false;
        }
    });

    $('#header-text-chat').click(function() {
        if (!chatBoolean) {
            $('#chat-wrapper').show("slow");
            $('#task-wrapper').hide("slow");
            $('#header-text-chat').css('color', '#d3d3d3');
            $('#header-text-task').css('color', 'black');
            chatBoolean = true;
        }
    });
});