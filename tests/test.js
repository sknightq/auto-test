module.exports = {
  'Test HLS in Chrome': browser => {
    browser
      .url('http://127.0.0.1:8080')
      .listenXHR()
      .waitForFirstXHR(
        /([^.]+|.*\.m3u8)$/,
        1000,
        // trigger brower
        () => {
          browser.click('button[title="Play Video"]')
        },
        // assetValues
        xhr => {
          browser.assert.equal(xhr.status, 'success')
          browser.assert.equal(xhr.method, 'GET')
          browser.assert.equal(xhr.httpResponseCode, '200')
          browser.assert.notEqual(xhr.responseData.length, 0)
        }
      )
      .getXHR(
        /([^.]+|.*\.ts)$/,
        1000,
        xhrs => {
          // NOTE: getXHR 只能看发起的请求
          // 判断视频流切片是否发起
          browser.assert.notEqual(xhrs.find(x => x.method==='GET').url, '')
        }
      )
      .end()
  }
}
