# Description
For automatically test in front-end
# Dependencies
- nodejs
- nightwatch
- selenium
- java sdk

# Configuration  
## Linux or MacOSX
  - Change the **webdriver.chrome.driver** to **node_modules/chromedriver/lib/chromedriver/chromedriver** in **nightwatch.config**  

## Window
  -  Must include the file **nightwatch.js** in order to excute command
   - Change the **webdriver.chrome.driver** to **node_modules/chromedriver/lib/chromedriver/chromedriver.exe** in **nightwatch.config**  
  
  ### There is an *.exe* extension at the end of line in Window

# Running Test  
## Linux or MacOSX  
`./node_modules/.bin/nightwatch ./tests/test.js`  

## Window
`node nightwatch.js ./tests/test.js`  

# Todo List
- [x] Chrome chromedriver config
- [ ] Firefox geckodriver config
- [ ] Microsoft WebDriver config
- [ ] SafariDriver config

# Reference
- http://nightwatchjs.org/gettingstarted#configuration
- https://developer.apple.com/documentation/webkit/about_webdriver_for_safari