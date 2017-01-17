#math.floor(it)
##by Nick Crawford, Claire Dolin, Farai Gandiya, and Isha Mehrotra

## Winner of two prizes at Uncommon Hacks 2017: [https://devpost.com/software/math-floor-it](https://devpost.com/software/math-floor-it)

## View demo [HERE](https://nickcrawford.github.io/uncommonhacks2017/).
Try entering two locations in Chicago such as the two airports: MDW and ORD.

##Inspiration
As a group of four enterprising college students who (mostly) met over the weekend, we all acknowledged the dread that comes with the daily commute. With that in mind, we asked ourselves, "how much would it cost to miss every single red light and drive 20mph over the speed limit?" While the obvious answer is "a lot", we decided to quantify it.

##What It Does
Math.floor(it) is a web page that explores the benefits and drawbacks of speeding and missing red lights in the city of Chicago. Taking in two addresses, it will point out which cameras you passed, their respective fines and the time savings as a result of reckless driving. 

##How We Built It
Data on the location of the speed cameras and red light cameras was sourced from [The City of Chicago's Data Portal] (https://data.cityofchicago.org/) which was then exported as a CSV file. For the front end design, we made use of SaSS, jQuery, Google Fonts as well as SVG's and animations. On the back end, we made use of the Google Map API to display the map, provide search functionality, plot the waypoint with camera's that lie along the waypoint's edge as well as aid in calculating fines, and time savings given our reckless driving.

Throughout the project, we encountered few problems. One problem was understanding the aynchronous nature of JavaScript which gave us problems when importing the JSON data. The Google Maps API also had a few issues with the `isLocationOnEdge()` function which had a few issues detecting if cameras where along the waypoint in addition to the friction that comes with understanding a new API, such as the need to have the right authorization to use an API token in various places (live site vs. localhost server).

##Accomplishments
The greatest accomplishment in making Math.floor(it) would be the way we worked well together and our ability to learn quickly and be flexible. Whether it was understanding what each of us where doing, working with and around the Google Maps API in addition to throwing in various quirks, we are proud of the work we have done given our time constraints and the rather unfamiliar territory.

##What we learned
During this hackathon, we learned a great deal about working with asynchronicity in JavaScript, sourcing and manipulating data, merging various unrelated branches of development and the intricacies of the Google Maps API. In regards to the Google Maps API, not only in terms of requesting certain information, but also in building on top of what the API gave us and filling in the gaps where it fell short (calculating the time of a certain waypoint given our lunatic driving for instance). Also, speeding's expensive yo. 

##What's next for math.floor(it)
While we got an MVP running, the first thing we would like to do is clean up the code...a lot since it's in one big `<script>` block as of now featuring lots of redundant code and tight coupling. We also plan on investigating the erratic behaviour of `isLocationOnEdge()` and might use `containsLocation()` which needs a polygon rather than a polyline. We might look into supporting other major cities, variable routing to pick which cameras to hit or miss and possibly reworking the user interface.

