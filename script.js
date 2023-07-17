$(document).ready(function() {
    // object to store lines
    var lines = {};

    $('.app').each(function(index) {
        $(this).on('click', function() {
            // if line already exists for this app, remove it
            if (lines[index]) {
                lines[index].remove();
                delete lines[index];
                $(this).css("border", "");
            } else {
                // otherwise, create new leader line
                lines[index] = new LeaderLine(
                    // start line at clicked app
                    this,
                    // end line at fiqon
                    $('.fiqon')[0],
                    // optional: you can customize the line appearance here
                    {
                        color: '#12e066',
                        size: 2,
                        startSocket: 'top',
                        endSocket: 'top',
                        startPlug: 'behind',
                        endPlug: 'arrow2',
                        dash: { animation: true },
                    }
                );
                $(this).css("border", "3px solid #12e066");
            }
        });
    });
});