from playwright.sync_api import sync_playwright

def verify_page_load():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            # Wait for some content to load to confirm it's not blank
            page.wait_for_selector("body")

            # Take a screenshot
            page.screenshot(path="verification/page_load.png")
            print("Screenshot taken successfully")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_page_load()
