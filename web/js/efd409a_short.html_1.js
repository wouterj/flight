/**
 * @fileoverview Compiled template for file
 *
 * Resources/views/Note/short.html.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('short_note');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
short_note = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(short_note, twig.Template);

/**
 * @inheritDoc
 */
short_note.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
short_note.prototype.render_ = function(sb, context, blocks) {
    // line 2
    sb.append("\n<article>\n<h1>");
    // line 4
    sb.append(twig.filter.escape(this.env_, ("title" in context ? context["title"] : null), "html", null, true));
    sb.append("<\/h1>\n<\/article>\n");
};

/**
 * @inheritDoc
 */
short_note.prototype.getTemplateName = function() {
    return "short_note";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
short_note.prototype.isTraitable = function() {
    return false;
};
