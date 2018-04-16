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

    //function customFont8() {
    //    ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Helvetica, sans-serif !important;}");
    // }

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
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: 'Times New Roman', Times !important;}");
    }

    // function customFont13() {
    //ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Trebuchet MS, sans-serif !important;}");
    //}

    function customFont14() {
        ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror{text-rendering: optimizeLegibility;font-family: Verdana, sans-serif !important;}");
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

    //var custom_f8 = "cstm8.fonts";
    // CommandManager.register("Helvetica", custom_f8, customFont8);

    var custom_f9 = "cstm9.fonts";
    CommandManager.register("Impact", custom_f9, customFont9);

    var custom_f10 = "cstm10.fonts";
    CommandManager.register("Lucida Console", custom_f10, customFont10);

    var custom_f11 = "cstm11.fonts";
    CommandManager.register("monospace", custom_f11, customFont11);

    var custom_f12 = "cstm12.fonts";
    CommandManager.register("Times New Roman", custom_f12, customFont12);

    // var custom_f13 = "cstm13.fonts";
    //CommandManager.register("Trebuchet MS", custom_f13, customFont11);

    var custom_f14 = "cstm14.fonts";
    CommandManager.register("Verdana", custom_f14, customFont14);

    // extension main menu
    Menus.addMenu('Fonts', 'fonts.main');
    var menu = Menus.getMenu('fonts.main');

    
    
    //Menu List In Alphabetical Ordered
    menu.addMenuItem(custom_f1);
    menu.addMenuItem(custom_f2);
    menu.addMenuItem(custom_f3);
    menu.addMenuItem(custom_f4);
    menu.addMenuItem(custom_f5);
    menu.addMenuItem(custom_f6);
    menu.addMenuItem(custom_f7);
    //menu.addMenuItem(custom_f8);
    menu.addMenuItem(custom_f9);
    menu.addMenuItem(custom_f10);
    menu.addMenuItem(custom_f11);
    menu.addMenuItem(custom_f12);
    //menu.addMenuItem(custom_f13);
    menu.addMenuItem(custom_f14);
});
