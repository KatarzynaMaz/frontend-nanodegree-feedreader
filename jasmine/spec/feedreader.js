 /* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* A test that loops through each feed in the allFeeds objects
        *and ensures it has URL defined and that the URL is not empty.
        */
        it('url defined', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined;
                expect(feed.url.length).not.toBe(0);
            }
        });

        it('name defined',function(){
            for(let feed of allFeeds){
            expect(feed.name).toBeDefined;
            expect(feed.name).not.toBe(0);
            }
        });
    });
    //second test suite 'The menu'
    describe('The menu', function(){
         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        //defining variable body
        const body = document.querySelector('body'); 

        it('is hidden', function(){
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        
         it('toogles on and off', function(){
            //defining variables menu
            const menu = document.querySelector('.menu-icon-link');
             menu.click();
             expect(body.classList.contains('menu-hidden')).toBe(false);
             menu.click();
             expect(body.classList.contains('menu')).toBe(false);
         });
    }); 
   
    describe('Initial Entries', function(){
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
        */
        //done() function will let Jasmine know that the beforeEach function has
        //finished and so Jasmine can proceed with the test
        beforeEach(function(done){
            loadFeed(0,done);
        });
            it('completes work', function(){
                //selecting entry elements inside feed
                const feedEntries = document.querySelectorAll ('.feed .entry');
                expect(feedEntries.length>0).toBe(true); 

        });
    });
    describe('New Feed Selection', function(){
        let feed;
        //storing the first feed's content in an empty array
        firstFeed = [];
        //we need to load 2 different feeds and check that the feed content changes
        //we will use done() function to handle async within beforeEach
        //since done() can only be called once, we call it in the final
        //async function to let Jasmine know when to continue
        beforeEach(function(done){
            //calling the first feed
            loadFeed(0, function(){
            //this is a callback function that runs after loadFeed finishes loading the 0th feed
            //storing feed element inside the feed variable after loadFeed is done loading 0th feed
            const feed = document.querySelector('.feed');
            //converting the first feed's children elements into an array list
            //then looping over each entry and pushing it to
            //firstFeed array
            Array.from(feed.children).forEach(function(entry){
                firstFeed.push(entry);
            });
            //calling the new feed
            loadFeed(1,done);               
            });           
        });

        it('content changes', function(){
            //reassigning feed to the newly loaded feed 1, so the results are different
            const feed = document.querySelector('.feed');
            //converting the new feed's children into an array and looping
            //over each entry
            Array.from(feed.children).forEach(function(entry,index){
                //using index parameter we will check the first feed against the new feed
                expect(entry.innerText === firstFeed[index]).toBe(false);
            });
           // console.log(feed.children[0].innerText);
        });
    });
});
