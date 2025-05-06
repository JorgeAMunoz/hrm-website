 // Use 100% width for responsiveness
-                height="1200" //
+                height="100%" // Make form fill height

// You can also remove the min-height if you want the form to be truly responsive
-                className="rounded-lg border border-border shadow-sm min-h-[600px] md:min-h-[800px]" // Added min-height
+                className="rounded-lg border border-border shadow-sm" // Removed min-height

This will make the iframe fill the available height of its parent container. However, keep in mind that if the Google Form itself has a lot of content, it might still require scrolling within the iframe.

To further optimize, ensure that the parent container of the iframe allows it to expand to the full page height. This might involve adjusting the layout and styling of the `SchedulePage` component and its parent elements.

Let me know if you need any further adjustments or have other questions!