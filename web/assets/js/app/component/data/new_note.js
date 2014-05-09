define(['flight/lib/component'], function (defineComponent) {

    return defineComponent(newNote);

    function newNote() {
        this.renderNewNoteBox = function (e) {
            this.$node.show();
        };

        this.saveNote = function (e, data) {
            jQuery.ajax({
                'type': 'POST',
                'dataType': 'json',
                'url': '/sf/flight/web/app_dev.php/notes',
                'data': {
                    'note': {
                        'title': data.title,
                        'content': data.content
                    }
                },
                'success': function () {
                    console.log(arguments);
                }
            });
        };

        this.after('initialize', function () {
            this.on('ui.note_save_requested', this.saveNote);
        });
    }
});
