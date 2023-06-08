# Inspirational Homepage using React Redux Toolkit

Finished website (Deployed)

https://superb-dango-1d77e8.netlify.app

APIs: 
- OpenWeatherMap
- Geopify
- API Ninja (quote)
- Unsplash

React:
- useEffect
- useState


React Redux:
- Provider
- useDispatch
- useSelector


Redux Toolkit:
- configureStore
- createSlice
- createAsyncThunk


There is this browser extension that I love, it is called Momentum. I thought, what if I want to build something like this? What is involved in order for this to run as a web app instead of an extension?

Here is what the extension looks like, and the next image is what my web app looks like:

Momentum:

![Momentum](https://github.com/jogit82/inspirational-homepage-react-reduxtoolkit/blob/main/Screenshot%202023-05-23%20at%2011.38.34%20PM.png?raw=true)

My Inspirational Homepage:

![Myapp](https://github.com/jogit82/inspirational-homepage-react-reduxtoolkit/blob/main/Daily-planner-demo.gif?raw=true)

## Project Structure (Folders)

1. app
   - store.js - configureStore()
2. features
   1. backgroundImage
      - BackgroundImage.js
        - displays background image
        - dispatches getBackgroundImage()
        - import getBackgroundImage from backgroundImageSlice
      - backgroundImageSlice.js
        - createSlice()
        - contains switchToNextBackgroundImage, switchToPreviousBackgroundImage, getBackgroundImage (Thunk) logic
   2. error
      - Error.js
        - displays error message
        - dispatches retryHandler
        - dispatches clearErrorMessage
      - errorSlice.js
        - contains retryHandler, clearErrorMessage logic
   3. journal
      - Journal.js
        - dispatches addJournalEntry
      - journalSlice.js
        - contains addJournalEntry, removeEntry, toggleEntryDone logic
   4. quote
      - Quote.js
        - dispatches getQuote
      - quoteslice.js
        - contains getQuote logic (Thunk)
   5. weather
      - weather.js
        - dispatches getWeather
      - weatherSlice.js
        - contains getCoords (Thunk), getWeather (Thunk)
3. components
   1. BackgroundImagePreviousImage.js
      - dispatches switchToPreviousBackgroundImage
      - displays button
   2. BackgroundImageNextImage.js
      - dispatches switchToNextBackgroundImage
      - displays button
   3. JournalEntries.js
      - displays a list of journals
   4. JournalEntry.js
      - displays journal
      - dispatches removeEntry(id)
      - dispatches toggleEntryDone(id)
      - use third party library called react-dom-confetti
4. api
   1. openWeatherMap
      - fetches weather data (weatherMetadata, temperature) from openWeatherMap https://api.openweathermap.org
   2. quotes
      - fetches a quote data (quote, author) from quotes https://api.api-ninjas.com/v1/quotes
   3. unsplash
      - fetches image data (image url) from unsplash https://api.unsplash.com/
   4. geopify
      - using user's IP to determine lat/lon, lat/lon are used to fetch local weather for user, getWeather(coords) (Thunk)
