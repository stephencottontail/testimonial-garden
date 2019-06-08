<?php
/**
 * Plugin Name: Testimonial Garden
 * Description: A testimonial block inspired by the CSS Zen Garden
 * Author: Stephen Dickinson <stephencottontail@me.com>
 * Version: 1.0.0
 */

add_action( 'init', function() {
    wp_register_script( 'sc-testimonial-garden', plugins_url( 'build/index.js', __FILE__ ), array() );

    register_block_type( 'sc/testimonial-garden', array(
        'editor_script' => 'sc-testimonial-garden'
    ) );
} );
