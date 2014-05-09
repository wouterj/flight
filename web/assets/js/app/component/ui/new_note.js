define(['flight/lib/component'], function (defineComponent) {

    return defineComponent(newNoteBox);

    function newNoteBox() {
        this.defaultAttrs({
            'openSelector': '#js-new-note',
            'createSelector': '#js-create-note',
            'titleSelector': '#js-note-title',
            'contentSelector': '#js-note-content'
        });

        this.renderNewNoteBox = function (e) {
            this.$node.show();
        };

        this.createNote = function (e) {
            this.trigger(document, 'ui.note_save_requested', {
                'title': this.select('titleSelector').val(),
                'content': this.select('contentSelector').val()
            });

            this.$node.hide();
        };

        this.after('initialize', function () {
            this.on($(this.attr.openSelector), 'click', this.renderNewNoteBox);
            this.on('click', {
                'createSelector': this.createNote
            });
        });
    }
});
