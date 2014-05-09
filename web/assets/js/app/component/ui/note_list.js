define(['flight/lib/component'], function (defineComponent) {

    return defineComponent(list);

    function list() {
        this.renderNotes = function (ev, data) {
            var notes = '';
            data.notes.forEach(function (note) {
                notes += '<li>' + Twig.render(short_note, note) + '</li>';
            });

            this.$node.append(notes);
        };

        this.after('initialize', function () {
            this.on(document, 'data.note_list_served', this.renderNotes);

            this.trigger('ui.note_list_requested');
        });
    }
});
