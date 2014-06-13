---
layout: help
help_category: "Preview templates"
title: "Create preview templates"
question: "How do I setup my own designs to preview content with"
permalink: "preview-templates/create-preview-templates.html"
---

Preview templates allow team members to viww content as it will appear
when live.

You can add, edit and delete preview templates at any time.

* Preview templates that have been assigned to content items will be
  updated when the template is edited and saved in Settings.
* Preview templates that are deleted in Settings will no longer be
  available to content items that were assigned that template.

###  Creating templates

Only admins are able to create preview templates.

To create a preview template, go to Settings and click on the Preview
template tab.

Click the \'Add template\' button. This will bring up the New Preview
Template page.

Step-by-step instructions have been provided on the right of the screen.

####  1. Name your template

This name will help identify the template in the workspace.

####  2. Add HTML and CSS

There are two ways to add HTML and CSS. The first and easiest way to add
HTML and CSS is to use an existing webpage that has the same layout and
design as the template you want to create. Enter the webpage\'s URL in
the URL text field and click the blue \'Get layout\' button. The HTML
and CSS for the page will then be retrieved, added to the template form
and altered so to display correctly in your workspace.

The second way is to manually enter the HTML and CSS into the respective
text areas. Only the HTML is required; the CSS is optional.

####  3. Add template tags

Template tags are used to dynamically place the content being previewed
in the template. Tags start and end with two curly brackets. The only
required template tag is `{{ body }}`.

Tags should be placed in the HTML where you want the content attribute
to appear in the preview.

Preview templates also support custom template tags, which can match
content type attributes. For example the default blog content type has
the Author attribute. The template tag for this attribute is `{{ author }}`.
Besides `{{ body }}` the only other default template tag is `{{ title }}`
which will add the content name or title attribute if it exists.

####  4. Save your template

Make sure you save your work by clicking the \'Save template\' button.

You can test your preview template with different content once it is
saved.

###  Testing

After saving your template you can test it with content to make sure
it\'s setup correctly.

To test your template:

1.  Click the \'Test\' button. This will open the test page for your
    preview template.
2.  Select the content you want to test your template with.

The preview template will now be populated with the chosen content.

