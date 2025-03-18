<?php
/**
 * Plugin Name:         Code Idea
 * Plugin URI:          https://yourdomain/wherever-you-keep-the-app-readme-file
 * Description:         Some great app that I made and it's so great it'll make your life great!
 * Version:             1.0.0
 * Author:              Steve Whitmore
 * Author URI:          https://stevewhitmore.gitlab.io
 *
 * Be sure to rename the folder this file is in and this file to match what your plugin will be called. The names must be the same so WordPress knows where to look.
 */

//function load_vuescripts() {
//    wp_enqueue_style( 'vue_wp_styles', plugin_dir_url( __FILE__ ) . 'dist/assets/index-De4xWpJ4.css' );
//    wp_register_script( 'vue_wp_compiled', plugin_dir_url( __FILE__ ) . 'dist/js/index-PLsK5eQf.js', true );
////    wp_register_script( 'vue_wp_dependencies', plugin_dir_url( __FILE__ ) . 'dist/js/chunk-vendors.1be0eeb0.js', true );
//}

function load_vuescripts() {
    wp_enqueue_style( 'vue_wp_styles', plugin_dir_url( __FILE__ ) . 'dist/my-vue-app.css' );

    wp_enqueue_script( 'vue_wp_compiled', plugin_dir_url( __FILE__ ) . 'dist/my-vue-app.umd.cjs', [], null, true );
}

add_action( 'wp_enqueue_scripts', 'load_vuescripts' );

function attach_vue() {
    wp_enqueue_script( 'vue_wp_compiled' );
    wp_enqueue_script( 'vue_wp_dependencies' );

    return "<div id='app'></div>";
}

add_shortcode( 'vue_wp', 'attach_vue' );

// Add the shortcode [vue_wp] to any page or post.
// The shorcode can be whatever. [vue_wp] is just an example.
?>