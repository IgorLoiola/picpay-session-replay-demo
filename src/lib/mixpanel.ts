import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "";

let initialized = false;

export function initMixpanel() {
  if (initialized || !MIXPANEL_TOKEN) return;
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: true,
    track_pageview: false,
    persistence: "localStorage",
    record_sessions_percent: 100,
    record_mask_text_selector: "",
  });
  mixpanel.identify("demo-user-picpay");
  mixpanel.people.set({
    $name: "Demo User",
    $email: "demo@picpay.com",
    plan: "free",
  });
  initialized = true;
}

export function trackScreenViewed(screenName: string, businessContext: string) {
  if (!MIXPANEL_TOKEN) return;
  mixpanel.track("Screen Viewed", {
    screen_name: screenName,
    business_context: businessContext,
  });
}

export function trackButtonClicked(
  buttonName: string,
  screenName: string,
  businessContext: string,
  extraProps?: Record<string, unknown>
) {
  if (!MIXPANEL_TOKEN) return;
  mixpanel.track("Button Clicked", {
    button_name: buttonName,
    screen_name: screenName,
    business_context: businessContext,
    ...extraProps,
  });
}

export function resetMixpanel() {
  if (!MIXPANEL_TOKEN) return;
  mixpanel.reset();
  initialized = false;
}

export function trackCardOrdered(props: Record<string, unknown>) {
  if (!MIXPANEL_TOKEN) return;
  mixpanel.track("Card Ordered", {
    business_context: "CARTOES",
    ...props,
  });
}
