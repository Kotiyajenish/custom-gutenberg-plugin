var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;

registerBlockType('gutenberg-notice-block/notices', {
    title: 'Notices',        // Block name visible to the user within the editor
    icon: 'warning',         // Toolbar icon displayed beneath the name of the block
    category: 'common',      // The category under which the block will appear in the Add block menu
    attributes: {            // The data this block will be storing
        type: { type: 'string', default: 'default' },  // Notice box type for loading the appropriate CSS class. Default class is 'default'.
        title: { type: 'string' },                     // Title of Notice box in h4 tag
        content: { type: 'array', source: 'children', selector: 'p' }  // Notice box content in p tag
    },
    edit: function(props) {
        var attributes = props.attributes;

        function onChangeType(newType) {
            props.setAttributes({ type: newType });
        }

        function onChangeTitle(newTitle) {
            props.setAttributes({ title: newTitle });
        }

        return el('div', { className: 'notice-block-editor' },
            el('input', {
                type: 'text',
                value: attributes.title,
                placeholder: 'Title',
                onChange: function(event) { onChangeTitle(event.target.value); }
            }),
        );
    },
    save: function(props) {
        var attributes = props.attributes;

        return el('div', { className: 'notice-block ' + attributes.type },
            el('h4', null, attributes.title),
        );
    }
});
