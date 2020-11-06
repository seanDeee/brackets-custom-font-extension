define(function (require, exports, module) {
    "use strict";

    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
        CommandManager = brackets.getModule("command/CommandManager"),
        Menus = brackets.getModule("command/Menus"),
        Commands = brackets.getModule("command/Commands"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        FileUtils = brackets.getModule("file/FileUtils"),
        Dialogs = brackets.getModule("widgets/Dialogs"),
        PreferencesManager = brackets.getModule("preferences/PreferencesManager");

    //Functions for each Custom Font
    function customFont1() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: 'SourceCodePro-Medium' ,ＭＳ ゴシック !important;}");
    }

    function customFont2() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Arial !important;}");
    }

    function customFont3() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Arial Black !important;}");
    }

    function customFont4() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Bell MT !important;}");
    }

    function customFont5() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Calibri !important;}");
    }

    function customFont6() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: cursive !important;}");
    }

    function customFont7() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: 'Didot', serif  !important;}");
    }

    function customFont8() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Helvetica, sans-serif !important;}");
    }

    function customFont9() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Impact, fantasy !important;}");
    }

    function customFont10() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: 'Lucida Console', Courier !important;}");
    }

    function customFont11() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: monospace !important;}");
    }
    
    function customFont12() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: MS Sans Serif Regular !important;}");
    }
    
    function customFont13() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Segeo UI, sans-serif !important;}");
    }
    
    function customFont14() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: 'Times New Roman', Times !important;}");
    }
    
    function customFont15() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Terminal, sans-serif !important;}");
    }

    function customFont16() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Trebuchet MS, sans-serif !important;}");
    }

    function customFont17() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Verdana, sans-serif !important;}");
    }

    //modal function in Custom Menu
    function aboutModal() {
        var displayAbout = "<img style=\"float: left; margin:11px 5px 0px 0px; padding:0;\" src=\"styles/images/brackets_icon.svg\" alt=\"logo\" width=\"30\" height=\"30\">";
        displayAbout += "<h3 style=\"margin-bottom:-5px;\">Font Select</h3></span>\n<small>version: 1.0.0</small><br><br>\n";
        displayAbout += "<center><span style=\"letter-spacing: 1px;\">A Simple Font Select for Brackets<br>\n";
        displayAbout += "<span style=\"letter-spacing: 1px;\">You can Select a Custom font in the Fonts Menu</center><br>\n";
        displayAbout += "<p>&#1023; Author: SeanDee Dela Torre</p> <p>&#1023; Github Profile: <a href=\"https://github.com/seanDeee/\" >seanDeee</a></p><p>&#1023; GitHub Repository: <a href=\"https://github.com/seanDeee/brackets-custom-extension\" >https://github.com/seanDeee/brackets-custom-font-extension</a></p>";
        displayAbout += "&#1023; Contact: sjdt17@gmail.com<br><hr>";
        
        displayAbout += "<br>";
        
        displayAbout += "More Updates Coming Soon...<br>";
        // show modal dialog with "About Extension" information
        Dialogs.showModalDialog('a', "About Extension", displayAbout);
    }

    // Font Extension menu item
    var custom_f1 = "cstm1.fonts";
    CommandManager.register("Default ", custom_f1, customFont1);

    var custom_f2 = "cstm2.fonts";
    CommandManager.register("Arial", custom_f2, customFont2);

    var custom_f3 = "cstm3.fonts";
    CommandManager.register("Arial Black", custom_f3, customFont3);

    var custom_f4 = "cstm4.fonts";
    CommandManager.register("Bell MT", custom_f4, customFont4);

    var custom_f5 = "cstm5.fonts";
    CommandManager.register("Calibri", custom_f5, customFont5);

    var custom_f6 = "cstm6.fonts";
    CommandManager.register("Cursive ", custom_f6, customFont6);

    var custom_f7 = "cstm7.fonts";
    CommandManager.register("Didot", custom_f7, customFont7);

    var custom_f8 = "cstm8.fonts";
    CommandManager.register("Helvetica", custom_f8, customFont8);

    var custom_f9 = "cstm9.fonts";
    CommandManager.register("Impact", custom_f9, customFont9);

    var custom_f10 = "cstm10.fonts";
    CommandManager.register("Lucida Console", custom_f10, customFont10);

    var custom_f11 = "cstm11.fonts";
    CommandManager.register("monospace", custom_f11, customFont11);
    
    var custom_f12 = "cstm12.fonts";
    CommandManager.register("MS Sans Serif Regular", custom_f12, customFont12);

    var custom_f13 = "cstm13.fonts";
    CommandManager.register("Segeo UI", custom_f13, customFont13);

    var custom_f14 = "cstm14.fonts";
    CommandManager.register("Times New Roman", custom_f14, customFont14);

    var custom_f15 = "cstm15.fonts";
    CommandManager.register("Terminal", custom_f15, customFont15);
    
    var custom_f16 = "cstm16.fonts";
    CommandManager.register("Trebuchet MS", custom_f16, customFont16);
    
    var custom_f17 = "cstm17.fonts";
    CommandManager.register("Verdana", custom_f17, customFont17);

    // extension main menu
    Menus.addMenu('Fonts', 'fonts.main');
    var menu = Menus.getMenu('fonts.main');

    // About Extension menu item
    var modal_about = "about.fonts";
    CommandManager.register("About Extension", modal_about, aboutModal);

    //Menu List In Alphabetical Ordered
    menu.addMenuItem(custom_f1);
    menu.addMenuItem(custom_f2);
    menu.addMenuItem(custom_f3);
    menu.addMenuItem(custom_f4);
    menu.addMenuItem(custom_f5);
    menu.addMenuItem(custom_f6);
    menu.addMenuItem(custom_f7);
    menu.addMenuItem(custom_f8);
    menu.addMenuItem(custom_f9);
    menu.addMenuItem(custom_f10);
    menu.addMenuItem(custom_f11);
    menu.addMenuItem(custom_f12);
    menu.addMenuItem(custom_f13);
    menu.addMenuItem(custom_f14);
    menu.addMenuItem(custom_f15);
    menu.addMenuItem(custom_f16);
    menu.addMenuItem(custom_f17);
    
    menu.addMenuDivider();
    menu.addMenuItem(modal_about);
});
