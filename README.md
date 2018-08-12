## FEND Feed Reader Testing Project

# Project Overview

A project for Front End Web Development Nanodegree. In this project we were given a web-based application "Feed Reader" that reads RSS feeds. We needed to write several (descrived below) test suites. When complete - all tests should pass. Jasmine Testing Framework was used.


# To start testing 

To start testing either clone or download the repository to your local computer and then open index.html file in your browser.

# How to test?

When you open index.html file in your browser, the tests will appear at the bottom of the page. Tests in color green have passed, tests in red have failed.

# Required tests

1. A test to make sure that `allFeeds` variable has been defined and is not empty.
2. A test that loops through each feed in the `allFeeds` object and ensures it has url defined and that the url is not       empty.
3. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is       not empty.
4. A test that ensures the menu element is hidden by default. 
5. A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations:    does the menu display when clicked and does it hide when clicked again.
6. A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry`    element within the `.feed` container.
7. A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

# Credits

Matthew Cranford Project Walkthrough [Blog](https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/)
Ryan Boris Walkthrough [video](https://www.youtube.com/watch?v=7kOBXPbDmyw&feature=youtu.be)
Slack and Knowledge discussions

# Contributing

It is a personal project for the Udacity course. Contributions will not be accepted.