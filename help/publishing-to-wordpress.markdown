---
layout: help
help_category: "Integrations"
title: "Publishing to Wordpress"
question: "What are my options for publishing content directly to Wordpress"
permalink: "integrations/publishing-to-wordpress.html"
---

You can use content types to customise the content you are exporting to
Wordpress. Currently the content type attributes we support for export
are:

* *Title:* Add a \'Title\' attribute to your content type. The export
  will default to the content name if you haven\'t set this attribute.
  Adding a title allows you to specify a different publishing headline
  and URL slug to the content name used in the workspace.
* *Category:* Add a \'Category\' attribute to your content type. The
  export will default to the content\'s category name if you haven\'t
  set this attribute. This allows you to specify a different publishing
  category to the one used in the workspace. The category must exist on
  your blog before exporting or the content will be exported as
  \'Uncategorized\'.
* *Author:* Add an \'Author\' attribute to your content type. This is
  included in the default Blog content type. The export will default to
  the username used to authenticate the export. The \'Author\' attribute
  needs to be set to the display name of the blog user and the user must
  have author or admin privileges.

Only admins or editors can publish content to Wordpress.

Only content that is in the Ready or Live stages can be exported.

To export content to Wordpress:

1.  Open the content you want to export.
2.  Click the \'Export\' button at the top of the content box. This will
    display a drop down menu of your exporting options. This will
    include the description(s) of the Wordpress integration(s) you have
    previously added.
3.  Select the Wordpress integration you want to export to.
4.  Enter the username and password you use to log in to the
    administration area of your Wordpress blog. For security reasons we
    don\'t store your username or password and require you to enter it
    for each export.
5.  If you want to schedule your content to be published at a future
    date then check the \'Set future publishing date for your content\'
    checkbox. This will allow you to set your chosen publishing time and
    date. Ensure that the timezone of your blog is correct and you are
    entering the correct future publishing date.
6.  Click the \'Export\' button.
7.  The content will be exported to Wordpress.

If you scheduled a publish date the content in Wordpress will be in
draft until the publish time. If you did not enter a scheduled
publishing date, the content will be live on your Wordpress blog.

Move the content to the Live stage to let everyone associated with the
content in CS Workflow know it has been published.

