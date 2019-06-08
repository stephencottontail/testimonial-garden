<?php
/**
 * Plugin Name: Testimonial Garden
 * Description: A testimonial block inspired by the CSS Zen Garden
 * Author: Stephen Dickinson <stephencottontail@me.com>
 * Version: 1.0.0
 */

add_action( 'init', function() {
    wp_register_script( 'sc-testimonial-garden', plugins_url( 'build/index.js', __FILE__ ), array( 'wp-blocks', 'wp-element' ) );
    wp_register_style( 'sc-testimonial-block', plugins_url( 'build/block.css', __FILE__ ) );
    wp_register_style( 'sc-testimonial-editor', plugins_url( 'build/editor.css', __FILE__ ) );

    register_block_type( 'sc/testimonial-garden', array(
        'editor_script' => 'sc-testimonial-garden',
        'editor_style'  => 'sc-testimonial-editor',
        'style'         => 'sc-testimonial-block'
    ) );
} );
