var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;

registerBlockType('gutenberg-notice-block/notices', {
    title: 'Notices',
    icon: 'sort',
    category: 'common',
    attributes: {
        type: { type: 'string', default: 'default' },
        title: { type: 'string', default: '' },
        content: { type: 'string', source: 'html', selector: 'p', default: '' },
        date: { type: 'string', default: '' }
    },
    edit: function(props) {
        var attributes = props.attributes;

        function onChangeType(newType) {
            props.setAttributes({ type: newType });
        }
        function onChangeTitle(newTitle) {
            props.setAttributes({ title: newTitle });
        }
        function onChangeDate(newDate) {
            props.setAttributes({ date: newDate });
        }
        function onChangeContent(newContent) {
            props.setAttributes({ content: newContent });
        }

        return el('div', { className: 'notice-block-editor' },
            el('input', {
                type: 'text',
                value: attributes.title,
                placeholder: 'Title',
                onChange: function(event) { onChangeTitle(event.target.value); }
            }),
            el('input', {
                type: 'date',
                value: attributes.date,
                onChange: function(event) { onChangeDate(event.target.value); }
            }),
            el('textarea', {
                value: attributes.content,
                placeholder: 'Content',
                onChange: function(event) { onChangeContent(event.target.value); }
            })
        );
    },
    save: function(props) {
        var attributes = props.attributes;

        return el('div', { className: 'notice-block ' + (attributes.type || '') },
            el('h4', null, attributes.title || 'No Title'),
            el('p', null, 'Date: ' + (attributes.date || 'No Date')),
            el('p', null, attributes.content || 'No Content')
        );
    }
});
