/* ===================================================================
 * ScrollLock Utility - iOS-safe scroll locking
 * Prevents background scrolling when mobile menu is open
 *
 * ------------------------------------------------------------------- */

(function(window) {
    "use strict";

    var savedY = 0;

    /**
     * Lock scroll - prevents background scrolling
     * Uses a simpler overflow:hidden approach for better compatibility
     */
    function lockScroll() {
        // Don't lock if already locked
        if (document.documentElement.classList.contains('globalnav--noscroll')) {
            return;
        }

        // Save current scroll position
        savedY = window.scrollY || window.pageYOffset || 0;

        // Add lock classes - using simpler approach
        document.documentElement.classList.add('globalnav--noscroll');
        document.body.classList.add('globalnav--noscroll');
        
        // For iOS, still use the fixed position approach
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            document.body.classList.add('__lock-fixed');
            document.body.style.setProperty('--lock-top', -savedY + 'px');
        }
    }

    /**
     * Unlock scroll - restores normal scrolling
     * Removes all lock classes and restores scroll position
     */
    function unlockScroll() {
        // Always remove lock classes
        document.documentElement.classList.remove('globalnav--noscroll');
        document.body.classList.remove('globalnav--noscroll', '__lock-fixed');
        
        // Remove the CSS custom property
        document.body.style.removeProperty('--lock-top');
        
        // Force remove any inline styles that might be blocking scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        
        // Use requestAnimationFrame to ensure DOM updates before scroll restoration
        requestAnimationFrame(function() {
            // Restore scroll position if we have one saved
            if (savedY > 0) {
                window.scrollTo(0, savedY);
            }
            
            // Reset savedY
            savedY = 0;
        });
    }

    /**
     * Force unlock - emergency unlock function
     * Removes all possible lock states
     */
    function forceUnlock() {
        // Remove all possible lock classes
        document.documentElement.classList.remove('globalnav--noscroll');
        document.body.classList.remove('globalnav--noscroll', '__lock-fixed', 'globalnav-overlay-open');
        
        // Remove CSS properties
        document.body.style.removeProperty('--lock-top');
        
        // Reset any inline styles that might be interfering
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Reset savedY
        savedY = 0;
        
        // Force scroll restoration
        window.scrollTo(0, 0);
    }

    /**
     * Debug function to check current scroll lock state
     */
    function debugScrollLock() {
        return {
            htmlHasClass: document.documentElement.classList.contains('globalnav--noscroll'),
            bodyHasClass: document.body.classList.contains('globalnav--noscroll'),
            bodyHasFixed: document.body.classList.contains('__lock-fixed'),
            bodyHasOverlay: document.body.classList.contains('globalnav-overlay-open'),
            menuIsOpen: document.body.classList.contains('menu-is-open'),
            savedScrollY: savedY,
            currentScrollY: window.scrollY,
            bodyPosition: window.getComputedStyle(document.body).position,
            bodyTop: window.getComputedStyle(document.body).top,
            lockTopProperty: document.body.style.getPropertyValue('--lock-top')
        };
    }

    // Export functions to global scope
    window.scrollLock = {
        lock: lockScroll,
        unlock: unlockScroll,
        forceUnlock: forceUnlock,
        debug: debugScrollLock
    };

    // Safety mechanism: unlock scroll on page unload/refresh
    window.addEventListener('beforeunload', function() {
        forceUnlock();
    });

    // Safety mechanism: unlock scroll if window loses focus for too long
    var focusTimeout;
    window.addEventListener('blur', function() {
        focusTimeout = setTimeout(function() {
            if (document.documentElement.classList.contains('globalnav--noscroll')) {
                forceUnlock();
            }
        }, 5000); // 5 seconds
    });

    window.addEventListener('focus', function() {
        clearTimeout(focusTimeout);
    });

})(window);
