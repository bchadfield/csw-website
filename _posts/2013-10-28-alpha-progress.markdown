---
layout: post
title:  "Alpha Progress"
date:   2013-12-03 20:00:00
author: "Ben Chadfield"
author_url: https://twitter.com/benchadfield
description: "Progress update four weeks into the alpha for CS Workflow, the content workflow tool to help you through your review and approval process."
---

Four weeks ago we opened up the alpha for CS Workflow. We're ready to start talking to people interested in joining the private beta. We're looking for people that work with content regularly (at least weekly) and are willing to use CS Workflow as part of their content workflow. Get in touch if that sounds like you.

During the alpha we've received great feedback, which has kept us very busy. There have been 51 changes made and 3 issues fixed. We're particularly happy about the low number of bugs found.

The changes have ranged from adding user avatars to completely overhauling how users are assigned to documents. Here are the significant changes we've made.

### Content autosave
We added autosave because it's an expected part of creating content. We also setup different states for the save button so you can be certain how safely you can navigate away from the content.

The content autosaves every 60 seconds if changes have been made. The save icon is orange if there are unsaved changes. It flashes white while the content is saving. A green save icon shows that the content is saved. Clicking the save icon will obviously save the content as well. A white save icon shows there are no unsaved changes since the content was loaded.

It might sound a bit confusing to read, but the icon states make sense when you're working with content.

### Workflow state changes
Four weeks ago we had a reject state in the workflow. This allowed an approver to reject content. On paper this looked good, but is redundant when completing a review with comments achieves the same thing.

We removed reject and added the ability to park content, which puts it on hold. This takes the content out of the workflow and it won't appear in anyone's list of things that need their attention. Content can be parked before it is approved.

Parked content can only be put back into draft, so it needs to go through the whole workflow before it can be published. This reduces the risk of publishing out-of-date content, by giving reviewers a chance to raise anything that may have changed since it was parked.

### Cascading user assignment
This has been our focus for the last 10 days. Originally users had to be added to each content item after it was created. It was an opt in model that added more work to creating content.

An idea came in through [Uservoice] to add assignments at category level. What came out of that is what we're calling cascading user assignment.

We're now using an opt out model. When someone accepts your invitation the default setting will be that they are assigned at the workspace level. These default assignments are added to all new content when it's created. You can then add or remove assignments to fit the needs of the content.

Support for setting assignments at the category level has been coded, but we'll wait to see how well the current method goes down before making it more complicated.

### Other changes you may have noticed

- Support for avatars through the [Gravatar] service
- Toggle changes between version mark up
- Show/hide HTML version of content when ready for publish
- Recall button for bringing submitted content back to draft
- Renamed documents to content
- Content and category tables are searchable and sortable
- Ability to perform some actions on multiple categories or content

### What's next
The priority at the moment is:

- [Support for importing content]; we'll start with supporting uploading docx files
- [Better review/approval notification emails] with the ability to perform some actions directly in the email
- [Meta-content and business rules for different content types]. For example subject lines for emails, page titles and meta-tags for webpages, and 140 character restriction for tweets.

If you have feedback you want to share then get in touch or submit ideas/issues at [Uservoice]. The more you tell us the better CS Workflow will be and the more you can focus on your content, not your workflow.

[Uservoice]: http://csworkflow.uservoice.com
[Gravatar]: http://gravatar.com
[Support for importing content]: https://csworkflow.uservoice.com/forums/223316-ideas-and-next-steps/suggestions/4508235-content-import-and-upload
[Better review/approval notification emails]: https://csworkflow.uservoice.com/forums/223316-ideas-and-next-steps/suggestions/4532994-better-review-notification-emails
[Meta-content and business rules for different content types]: https://csworkflow.uservoice.com/forums/223316-ideas-and-next-steps/suggestions/4561660-add-meta-content-and-business-rules-for-different-
