## Spotify Jukebox

your glitch link e.g. http://a3-archduketim.glitch.me

Spotify Jukebox is a web interface to the spotify API to allow multiple users
to control the song queue, like a jukebox in a diner.

This application is useful to people who like using spotify with large groups,
but don't like how only one person controls the music. 

By using the spotify web search API, I can easily get access to the entire catalog
of songs that spotify provides and display them easily for the user.

In its current implementation, the application only creates the queue, but does
not currently access the spotify web-player api, so does not play any music. 

I used the bootstrap 4 framework because I am familiar with it and it is very simple to use. I modified the table CSS to make it look better on a dark background. I've also colored the title text to match the spotify color scheme.

To login to spotify, use the username and email address I sent in the class slack channel.

The five middleware packages I used are 
 - Body-Parser
   - Parses post request data to be easily accessed in node
 - Passport
   - authenticates sessions and spotify api
 - Session
   - Stores session info on the client to be saved across visits to the webpage
 - Express-Static
   - Automatically serves static files in the 'public' directory
 - Serve-Favicon
   - Auto serves the favicon icon

## Technical Achievements
- **Tech Achievement 1**: I used OAuth authentication via the Spotify Strategy
- **Tech Achievement 2**: Status codes to represent different types of error, such as 404 for song not found and 403 for unauthorized access. 

### Design/Evaluation Achievements
- **Design Achievement 1**: Designed my application mobile-first so that it works better for the target audience
- **Design Achievement 2**: Included the spotify favicon to add branding to my app
- **Design Achievement 3**: Added font awesome icons to make delete button easy to recognize (i.e trashcan icon)
