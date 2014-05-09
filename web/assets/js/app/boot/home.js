define([
    'app/component/ui/note_list',
    'app/component/data/note_list',
    'app/component/ui/new_note',
    'app/component/data/new_note'
], function (uiNoteList, dataNoteList, uiNewNote, dataNewNote) {

    var initialize = function () {
        dataNoteList.attachTo(document);
        dataNewNote.attachTo(document);

        uiNoteList.attachTo('#js-note-list');
        uiNewNote.attachTo('#js-new-note-box');
    };

    return initialize;
});
