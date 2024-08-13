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
        var noticeTypes = ['default', 'warning', 'info', 'success']; // Define available types

        function onChangeType(newType) {
            props.setAttributes({ type: newType });
        }
        // Other onChange functions remain unchanged

        return el('div', { className: 'notice-block-editor' },
            el('select', {
                value: attributes.type,
                onChange: function(event) { onChangeType(event.target.value); },
                children: noticeTypes.map(function(type) {
                    return el('option', { value: type }, type);
                })
            }),
            // Other input elements remain unchanged
        );
    },
    save: function(props) {
        var attributes = props.attributes;

        return el('div', { className: 'notice-block ' + (attributes.type || '') },
            el('h4', null, attributes.title || 'No Title'),
            el('span', { className: 'notice-type' }, attributes.type.toUpperCase()), // Display notice type
            el('p', null, 'Date: ' + (attributes.date || 'No Date')),
            el('p', null, attributes.content || 'No Content')
        );
    }
});
