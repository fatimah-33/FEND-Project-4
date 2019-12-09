/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all have URL defined and not empty',
            function () {
                for (let i = 0; i < allFeeds.length; i++) {
                    expect(allFeeds[i].url).toBeDefined();
                    expect(allFeeds[i].url).not.toEqual(0);
                }
            });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all have name defined and not empty',
            function () {
                for (let j = 0; j < allFeeds.length; j++) {
                    expect(allFeeds[j].name).toBeDefined();
                    expect(allFeeds[j].name).not.toEqual(0);
                }
            });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        let menuIcon = document.querySelector('.menu-icon-link');
        let bodyClass = document.querySelector('.menu-hidden');
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('the menu is hidden by default', function () {
            expect(bodyClass).toHaveClass('menu-hidden');
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('the menu change on click', function () {
            /*when on click of menuIcon open the left slide */
            menuIcon.click();
            expect(bodyClass).not.toHaveClass('menu-hidden');
            /*when on click of menuIcon again close the left slide */
            menuIcon.click();
            expect(bodyClass).toHaveClass('menu-hidden');

        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /*varible that hold all feeds */
        let articalEntry = document.querySelector('.entry');
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('there are at leaste one feed loaded', function () {
            expect(articalEntry).not.toEqual(0);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        /*varible to store the first index of feed and the second */
        var first, second;
        /*get the DOM to test its elements, take the first feed & second feed then compare them if they are equal to each other */
        let articles = document.getElementsByTagName('article');
        beforeEach(function (done) {
            loadFeed(0, done);
            first = articles[0];
            loadFeed(1, done);
            second = articles[1];
        });
        /*check the feeds expection using toEqual == */
        it('the new feed is changed from the previous one', function () {
            expect(first).not.toEqual(second);
        });
    });
}());
