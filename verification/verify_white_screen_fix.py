from playwright.sync_api import sync_playwright, expect

def verify_fix():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Capture console logs
        page.on("console", lambda msg: print(f"Console: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"Page Error: {exc}"))

        try:
            # Navigate to the app
            page.goto("http://localhost:3000")

            # Wait for any content
            page.wait_for_load_state("networkidle")

            # Take a debug screenshot regardless of success
            page.screenshot(path="verification/debug_fix_verification.png")
            print("Debug screenshot taken at verification/debug_fix_verification.png")

            # Try to find the text - updated to match actual content
            expect(page.get_by_text("Connection & Renewal")).to_be_visible()

            print("Verification successful!")

        except Exception as e:
            print(f"Verification failed: {e}")
            raise e

        finally:
            browser.close()

if __name__ == "__main__":
    verify_fix()
