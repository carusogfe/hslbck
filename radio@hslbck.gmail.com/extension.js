/*
    Copyright (C) 2014-2017 hslbck <hslbck@gmail.com>
    This file is distributed under the same license as the gnome-shell-extension-radio package.
*/

const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Extension = ExtensionUtils.getCurrentExtension();
const RadioMenu = Extension.imports.radioMenu;

var radioMenu;

// init with translation support
function init() {
    ExtensionUtils.initTranslations();
}

// build and add the extension
function enable() {
    radioMenu = new RadioMenu.RadioMenuButton();
    Main.panel.addToStatusArea('radioMenu', radioMenu);
    radioMenu._enableSearchProvider();
    radioMenu._enableMediaKeys();
}

//  stop playing and destroy extension content
function disable() {
    // stop playing before destruction
    // affects lock screen
    radioMenu._stop();
    radioMenu._disconnectMediaKeys();
    radioMenu._disableSearchProvider();
    radioMenu.destroy();
}
