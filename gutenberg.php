<?php
/**
 * Plugin Name: Custom Gutenberg
 * Plugin URI: https://www.your-site.com/
 * Description: Creating a Custom WordPress Gutenberg Block.
 * Version: 0.1
 * Author: Jenish Kotiya
 * Author URI: https://www.your-site.com/
 **/

// Load assets for wp-admin when the editor is active
function gutenberg_notices_block() {
    wp_enqueue_script(
        'gutenberg-notices-block-editor',
        plugins_url('notices.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components')
    );

    wp_enqueue_style(
        'gutenberg-notices-block-editor',
        plugins_url('notices.css', __FILE__),
        array()
    );
}
add_action('enqueue_block_editor_assets', 'gutenberg_notices_block');

// Load assets for the frontend
function gutenberg_notices_block_frontend() {
    wp_enqueue_style(
        'gutenberg-notices-block-frontend',
        plugins_url('notices.css', __FILE__),
        array()
    );
}
add_action('wp_enqueue_scripts', 'gutenberg_notices_block_frontend');


function enqueue_block_editor_assets() {
    wp_enqueue_style('wp-editor');
    wp_enqueue_script('wp-editor');
}
add_action('enqueue_block_editor_assets', 'enqueue_block_editor_assets');
