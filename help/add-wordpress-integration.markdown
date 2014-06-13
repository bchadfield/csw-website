---
layout: help
help_category: "Integrations"
title: "Add Wordpress integration"
question: "How do I connect my account to a Wordpress blog"
permalink: "integrations/add-workspace-integration.html"
---

Only admins are able to set up a Wordpress integration.

To add a Wordpress integration:

1.  Go to Settings and click the Integrations tab at the top of the
    page.
2.  Click the \'Add Wordpress\' button. This will load the New Wordpress
    Integration page.
3.  Enter a description. This will help you differentiate this Wordpress
    integration from any others you create.
4.  Enter the URL for your Wordpress site. This can be either a
    self-hosted or Wordpress-hosted blog. If your blog is located at
    subdomain or sub-directory of your main website then enter the
    subdomain or sub-directory. The URL you have entered will be checked
    to ensure it is a valid Wordpress blog.
5.  Click \'Save integration\'.

####  Common problems

Hopefully when you clicked \'Save integration\' the Wordpress
integration was successful. There are a few problems that could have
caused you to get an error. This section will cover some of the common
problems.

We export using Wordpress\' XML-RPC API, which is facilitated by the
xmlrpc.php file in your blog file structure. The XML-RPC API is the
default API for Wordpress and requires no further setup or plugins on
your blog. The \'no further setup\' statement assumes several things,
which if not true could cause problems.

1.  You are self-hosting and using Wordpress version 3.4 or older. The
    XML-RPC option is enabled by default for version 3.5 and above. If
    you\'re using a previous version then enable by going to Settings
    &gt; Writing &gt; Remote Publishing and checking the relevant
    checkbox.
2.  You are self-hosting and have removed the xmlrpc.php file or
    restricted its access. Contact the person responsible for managing
    your blog.
3.  You are self-hosting and your web host has restricted access to the
    XML-RPC API. Contact your web host.

