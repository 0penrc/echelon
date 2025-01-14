// Fuckerfox defaults
pref("general.config.obscure_value", 0);
pref("general.config.filename", "config.js");
// Sandbox needs to be disabled in release and Beta versions
pref("general.config.sandbox_enabled", false);
// End Fuckerfox defaults

// FUCK DARK MODE
pref("ui.systemUsesDarkMode", 0);
pref("browser.theme.dark-private-windows", false);

// Enable CSS
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Enable :has()
pref("layout.css.has-selector.enabled", true);

// Make private windows good again
pref("browser.theme.dark-private-windows", false);
pref("browser.privateWindowSeparation.enabled", false);

// Enable native theming
pref("browser.display.windows.non_native_menus", 0);
pref("widget.non-native-theme.enabled", false);

// Angle graphics engine + caption button mask is notoriously buggy
// This makes Firefox use the DirectX backend instead:
pref("gfx.webrender.software", true);

// Old smooth scroll
pref("general.smoothScroll.currentVelocityWeighting", .25);
pref("general.smoothScroll.mouseWheel.durationMaxMS", 400);
pref("general.smoothScroll.mouseWheel.durationMinMS", 200);
pref("general.smoothScroll.stopDecelerationWeighting", .4);

// Echelon defaults
pref("Echelon.Appearance.Blue", false);
pref("Echelon.Appearance.Style", 0);
pref("Echelon.Appearance.NewLogo", false);
pref("Echelon.Appearance.Australis.EnableFog", true);
pref("Echelon.Appearance.Australis.Windows10", false);
pref("Echelon.Appearance.DevTools", true);

pref("Echelon.Option.HideUnifiedExtensions", false);

pref("Echelon.Behavior.ViewImage", true);

pref("Echelon.FirefoxButton.CustomStyle", false);
pref("Echelon.FirefoxButton.CustomName", "");
pref("Echelon.FirefoxButton.CustomBGColor", "#000000");

pref("Echelon.parameter.isFirstRunFinished", false);