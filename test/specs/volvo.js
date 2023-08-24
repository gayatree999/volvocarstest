describe("volvo", () => {
  it("tests volvo", async () => {
    await browser.maximizeWindow()
    await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more")
    await expect(browser).toHaveUrl("https://www.volvocars.com/intl/v/car-safety/a-million-more")
    await browser.$("//*[@id=\"onetrust-accept-btn-handler\"]").click()
    await browser.$("//*[@id=\"section-label-0\"]/em").click()
    await browser.$("//*[@id=\"site-nav-cars-menu-section-tab-1\"]/p[1]").click()
    await browser.$("//*[@id=\"site-nav-cars-menu-section-tab-0\"]/p[1]").click()
    await browser.$("//*[@id=\"site-nav-cars-menu-section-tab-1\"]/p[2]").click()
    await browser.$("//*[@id=\"site-nav-cars-menu-section-tab-2\"]/p[2]").click()
    await browser.$("//*[@id=\"section-label-1\"]/em").click()
    await browser.$("//*[@id=\"section-label-2\"]/em").click()
    await browser.$("//*[@id=\"section-label-3\"]/em").click()
    await browser.$("//*[@id=\"sitenav:topbar:topbarsection\"]/div/div/div[4]/button").click()
    await browser.$("//*[@id=\"Video-1\"]/section/div/button/div/button/svg/rect[1]").click()
    await browser.$("//*[@id=\"VideoTestimonials-1\"]/section/div/div[2]/div[1]/div[1]/div/button/svg/path").click()
    await browser.$("//*[@id=\"ProductListCarousel-1\"]/section/div[2]/div/div/div/div/div[2]/div[2]/button[2]/img").click()
    await browser.$("//*[@id=\"ProductListCarousel-1\"]/section/div[2]/div/div/div/div/div[2]/div[2]/button[2]/img").click()
    await browser.$("//*[@id=\"ProductListCarousel-1\"]/section/div[2]/div/div/div/div/div[2]/div[2]/button[2]/img").click()
    await browser.$("//*[@id=\"ProductListCarousel-1\"]/section/div[2]/div/div/div/div/div[2]/div[2]/button[2]/img").click()
    await browser.$("//*[@id=\"ProductListCarousel-1\"]/section/div[2]/div/div/div/div/div[2]/div[2]/button[2]/img").click()
  });
});
//# recorderSourceMap=BCBDCFBGBHBIBJBKBLBMBNBOBPBQBRBSBTBUBVB
