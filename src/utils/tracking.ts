/**
 * Conversion Tracking & Attribution Utilities
 *
 * Events tracked (via CustomEvent dispatch only — no third-party scripts):
 * - page_view: Page views with attribution
 * - call_click: Phone number clicks
 * - whatsapp_click: WhatsApp button clicks
 * - form_submit: Quote form submissions
 * - angebot_click: /angebot page CTA clicks
 *
 * Features:
 * - UTM parameter persistence in localStorage
 * - Custom event dispatch (ts_conversion) for any self-hosted analytics
 */

import { COMPANY } from '@/config/company';

// ============================================
// UTM Constants
// ============================================

// UTM parameters for GBP website link
export const GBP_UTM = '?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing';

// UTM for internal CTAs
export const ANGEBOT_UTM = '?utm_source=website&utm_medium=cta&utm_campaign=local_seo_duisburg';

// UTM storage key
const UTM_STORAGE_KEY = 'ts_utm_params';
const UTM_EXPIRY_DAYS = 30;

// ============================================
// UTM Persistence
// ============================================

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string; // Google Ads click ID
  fbclid?: string; // Facebook click ID
  landing_page?: string;
  referrer?: string;
  timestamp?: number;
}

/**
 * Capture and store UTM parameters from URL on page load
 */
export function captureUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utmParams: UTMParams = {};

  // Capture UTM and ad click IDs
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) {
      (utmParams as any)[key] = value;
    }
  });

  // Only store if we have any UTM params
  if (Object.keys(utmParams).length > 0) {
    utmParams.landing_page = window.location.pathname;
    utmParams.referrer = document.referrer || 'direct';
    utmParams.timestamp = Date.now();

    try {
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmParams));
    } catch (e) {
      console.warn('Could not store UTM params:', e);
    }
  }

  return utmParams;
}

/**
 * Get stored UTM parameters (if not expired)
 */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    if (!stored) return {};

    const params: UTMParams = JSON.parse(stored);

    // Check expiry
    if (params.timestamp) {
      const expiryMs = UTM_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
      if (Date.now() - params.timestamp > expiryMs) {
        localStorage.removeItem(UTM_STORAGE_KEY);
        return {};
      }
    }

    return params;
  } catch (e) {
    return {};
  }
}

/**
 * Get UTM params for form submission
 */
export function getFormUTMData(): Record<string, string> {
  const params = getStoredUTMParams();
  const result: Record<string, string> = {};

  if (params.utm_source) result.utm_source = params.utm_source;
  if (params.utm_medium) result.utm_medium = params.utm_medium;
  if (params.utm_campaign) result.utm_campaign = params.utm_campaign;
  if (params.gclid) result.gclid = params.gclid;
  if (params.landing_page) result.landing_page = params.landing_page;
  if (params.referrer) result.referrer = params.referrer;

  return result;
}

// ============================================
// Conversion Tracking (no third-party scripts)
// ============================================

/**
 * Track conversion event via custom DOM event.
 * Any self-hosted analytics listener can subscribe to 'ts_conversion'.
 */
export function trackConversion(eventName: string, eventData?: Record<string, string | number>) {
  // Console log for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Tracking] ${eventName}`, eventData);
  }

  // Custom event for any analytics tool
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('ts_conversion', {
      detail: { event: eventName, data: eventData, timestamp: Date.now() }
    }));
  }
}

/**
 * Track page view
 */
export function trackPageView(pagePath?: string) {
  const path = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/');

  trackConversion('page_view', {
    page_path: path,
    page_title: typeof document !== 'undefined' ? document.title : '',
  });
}

/**
 * Track phone call click
 */
export function trackCallClick(phoneNumber: string, source: string) {
  trackConversion('call_click', {
    phone_number: phoneNumber,
    click_source: source,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(source: string) {
  trackConversion('whatsapp_click', {
    click_source: source,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string, source: string, formData?: Record<string, string>) {
  const utmData = getFormUTMData();

  trackConversion('form_submit', {
    form_name: formName,
    form_source: source,
    ...utmData,
  });
}

/**
 * Track Angebot CTA click
 */
export function trackAngebotClick(source: string) {
  trackConversion('angebot_click', {
    click_source: source,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

// ============================================
// Form Data Builder
// ============================================

export interface FormSubmissionData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  service_type?: string;
  page: string;
  language: string;
  // Attribution
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
  landing_page?: string;
  referrer?: string;
}

/**
 * Build complete form data with attribution
 */
export function buildFormData(formFields: {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  serviceType?: string;
}, page: string, language: string = 'de'): FormSubmissionData {
  const utmData = getFormUTMData();

  return {
    name: formFields.name,
    phone: formFields.phone,
    email: formFields.email,
    message: formFields.message,
    service_type: formFields.serviceType,
    page,
    language,
    ...utmData,
  };
}

// ============================================
// Initialize on Load
// ============================================

/**
 * Initialize tracking on app load
 * Call this in your main App component
 */
export function initTracking() {
  if (typeof window === 'undefined') return;

  // Capture UTM params on first load
  captureUTMParams();

  // Track initial page view
  trackPageView();
}
