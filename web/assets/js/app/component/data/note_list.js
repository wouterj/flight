define(['flight/lib/component'], function (defineComponent) {

    return defineComponent(list);

    function list() {
        this.getNotes = function () {
            var that = this;

            jQuery.getJSON('/sf/flight/web/app_dev.php/notes', function (data) {
                that.trigger('data.note_list_served', {
                    notes: data
                });
            });
        };

        this.after('initialize', function () {
            this.on('ui.note_list_requested', this.getNotes);
        });
    }
});
