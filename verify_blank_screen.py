from playwright.sync_api import sync_playwright

def verify_and_capture_logs():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        console_logs = []
        page.on("console", lambda msg: console_logs.append(msg.text))

        try:
            page.goto("http://localhost:3001")
            page.wait_for_selector("#root", state="attached")

            # Wait a bit for potential JS errors
            page.wait_for_timeout(2000)

            print("Console Logs:")
            for log in console_logs:
                print(log)

            # Screenshot
            page.screenshot(path="debug_screenshot.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_and_capture_logs()
