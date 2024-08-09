var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;
var DatePicker = wp.components.DatePicker;

registerBlockType('gutenberg-notice-block/notices', {
    title: 'Notices',
    icon: 'warning',
    category: 'common',
    attributes: {
        type: { type: 'string', default: 'default' },
        title: { type: 'string' },
        content: { type: 'array', source: 'children', selector: 'p' },
        date: { type: 'string' }  // New date attribute
    },
    edit: function(props) {
        var attributes = props.attributes;

        function onChangeType(newType) {
            props.setAttributes({ type: newType });
        }

        function onChangeTitle(newTitle) {
            props.setAttributes({ title: newTitle });
        }
        function onChangeDate(newTitle) {
            props.setAttributes({ Date: newTitle });
        }


        return el('div', { className: 'notice-block-editor' },
            el('div', { className: 'custom-gutenberg' }, 'Custom Gutenberg'), // Added custom div
            el('input', {
                type: 'text',
                value: attributes.title,
                placeholder: 'Title',
                onChange: function(event) { onChangeTitle(event.target.value); }
            }),
            el('input', {
                type: 'date',
                value: attributes.title,
                onChange: function(event) { onChangeDate(event.target.value); }
            }),

        );
    },
    save: function(props) {
        var attributes = props.attributes;

        return el('div', { className: 'notice-block ' + attributes.type },
            el('h4', null, attributes.title),
            el('p', null, 'Date: ' + attributes.date) // Display the selected date
        );
    }
});
