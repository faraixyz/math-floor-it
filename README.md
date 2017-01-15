#Math.floor(it)
##by Nick Crawford, Claire Dolin, Farai Gandiya, and Isha Mehrotra

##Inspitation
As a group of four enterprising college students who (mostly) met over the weekend, we all acknowledged the dread that comes with the daily commute. With that in mind, we thought "how much would it cost to ignore every single red light and drive 20mph over the speed limit". While the obvious answer is "a lot", we decided to quantify it.

##What It Does
Math.floor(it) is a web page that explores the price of reckless driving in the city of Chicago. Taking in two addresses, it will point out which traffic cameras you passed, their respective fines, and the time savings as a result of reckless driving. 

##How We Built It
Data on the location of the speed cameras and red light cameras was sourced from [The City of Chicago's Data Portal](https://data.cityofchicago.org/) which was then exported as a CSV file. For the front end design, we made use of SaSS, jQuery, Google Fonts as well as SVG's and animations. On the back end, we made use of the Google Map API to display the map, provide search functionality, plot the waypoints with cameras that lie along the waypoint's edge as well as aid in calculating fines, and time savings given our reckless driving. We collected a DirectionsRoute and converted the path overview (an array of LatLng objects) into a polyline. Then we compared the polyline to the arrays of camera locations to find cameras along our path. 

Throughout the project, we encountered few problems. One problem was understanding the aynchronous nature of JavaScript which gave us problems when importing the JSON data. The Google Maps API also had a few issues with the `isLocationOnEdge()` function. The function takes in an optional 'tolerance' parameter and we struggled to find a perfect balance between underreporting and overreporting nearby cameras. We had a few issues detecting the correct cameras, in addition to the friction that comes with understanding a new API, such as the need to have the right authorization to use an API token in various places (live site vs. localhost server).

##Accomplishments
Our greatest accomplishment in making Math.floor(it) was the way we worked well together and learned quickly. We successfully divided up the front end and back end work between team members. We also smoothly integrated data from the city of Chicago with Google's mapping functionality. We are really happy with the user experience for our page. Whether it was understanding what each of us where doing, working with and around the Google Maps API in addition to throwing in various quirks, we are proud of the work we have done given our time constraints and the rather unfamiliar territory.

##What we learned
During this hackathon, we learned a great deal about working with asynchronicity in JavaScript, sourcing and manipulating data, merging various unrelated branches of development and the intricasies of the Google Maps API. In regrds to the Google Maps API, not only in terms of requesting certain information, but also in building on top of what the API gave us and filling in the gaps where it fell short (calculating the time of a certain waypoint given our lunatic driving for instance). Also, speeding's expensive yo. 

##What's next for Math.floor(it)
While we got an MVP running, the first thing we would like to do is clean up the code...a lot since it's in one big `<script>` block as of now featuring lots of redundant code and tight coupling. We also plan on investigating the erratic behaviour of `isLocationOnEdge()` and might use `containsLocation()` which needs a polygon rather than a polyline. We might look into supporting other major cities, variable routing to pick which cameras to hit or miss and possibly reworking the user interface. We could also use a more complicated algorithm for predicting time savings. Our calculations ignore traffic and assume that it is always possible to speed. For the fines, we could look into the likelihood of getting pulled over by a live police officer, since our current system only looks at existing speed cameras. We could also do a more detailed analysis of the risks involved in bad driving. It's dangerous as well as expensive!
