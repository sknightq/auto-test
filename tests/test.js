module.exports = {
  'Test HLS in chrome': function(browser) {
    browser
      .url('http://127.0.0.1:8080')
      .pause(6000)
      .waitForElementVisible('body')
      .waitForFirstXHR(
        'user/([0-9]*)/details',
        1000,
        function browserTrigger() {
          browser.click('.update')
        },
        function assertValues(xhr) {
          browser.assert.equal(xhr.status, 'success')
          browser.assert.equal(xhr.method, 'POST')
          browser.assert.equal(xhr.requestData, '200')
          browser.assert.equal(xhr.httpResponseCode, '200')
          browser.assert.equal(xhr.responseData, '')
        }
      )
      .click('button[title="Play Video"]')
      .pause(6000)

      .end()
  }
}
