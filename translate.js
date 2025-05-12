// Google Translate initialization
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'hi',
        includedLanguages: 'en,hi',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// Function to change language
function translateLanguage(lang) {
    var $frame = $('.goog-te-menu-frame:first');
    if (!$frame.size()) {
        alert("Error: Could not find Google translate frame.");
        return false;
    }
    $frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
    return false;
}

// Function to handle language change
function changeLanguage(lang) {
    if (lang === 'en') {
        translateLanguage('English');
    } else if (lang === 'hi') {
        translateLanguage('Hindi');
    }
}

// Load Google Translate
function loadGoogleTranslate() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add Google Translate div
    var div = document.createElement('div');
    div.id = 'google_translate_element';
    div.style.display = 'none';
    document.body.appendChild(div);

    // Load Google Translate
    loadGoogleTranslate();

    // Add jQuery if not present
    if (typeof jQuery === 'undefined') {
        var jq = document.createElement('script');
        jq.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        document.head.appendChild(jq);
        jq.onload = function() {
            // Initialize translation after jQuery loads
            setTimeout(function() {
                changeLanguage('hi');
            }, 1000);
        };
    } else {
        // Initialize translation directly
        setTimeout(function() {
            changeLanguage('hi');
        }, 1000);
    }
}); 