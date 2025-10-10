import React, { useRef, useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

type MenuAnimation = {
  play: () => void;
  reverse: () => void;
  eventCallback: (event: string, callback: () => void) => void;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, children, ...rest }, ref) => (
  <a href={to} ref={ref} {...rest}>
    {children}
  </a>
));
Link.displayName = "Link";

const useLocation = () => {
  if (typeof window === "undefined") {
    return { pathname: "/" };
  }
  return { pathname: window.location.pathname };
};

const Headermain: React.FC = () => {
  const menuAnimation = useRef<MenuAnimation | null>(null);
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const getLinkClass = (path: string): string =>
    location.pathname === path ? "active" : "";

  const isAuthenticated = false;

  const overlayRoot = useMemo(() => {
    if (typeof document === "undefined") return null;
    const el = document.createElement("div");
    el.id = "overlay-root";
    return el;
  }, []);

  useEffect(() => {
    if (!overlayRoot || typeof document === "undefined") {
      return undefined;
    }

    document.body.appendChild(overlayRoot);
    return () => {
      if (overlayRoot.parentNode) {
        overlayRoot.parentNode.removeChild(overlayRoot);
      }
      document.body.classList.remove("menu-open");
      document.body.classList.remove("ovhidden");
    };
  }, [overlayRoot]);

  const handleToggle = (): void => {
    if (typeof document === "undefined") {
      setActive((prev) => !prev);
      return;
    }

    if (isActive) {
      document.body.classList.remove("ovhidden");
      document.body.classList.remove("menu-open");
      if (menuAnimation.current) {
        menuAnimation.current.reverse();
        menuAnimation.current.eventCallback("onReverseComplete", () => setActive(false));
      } else {
        setActive(false);
      }
    } else {
      document.body.classList.add("ovhidden");
      document.body.classList.add("menu-open");
      if (menuAnimation.current) {
        menuAnimation.current.play();
        menuAnimation.current.eventCallback("onComplete", () => setActive(true));
      } else {
        setActive(true);
      }
    }
  };

  const handleSignOut = (): void => {
    if (typeof document !== "undefined") {
      document.body.classList.remove("ovhidden");
      document.body.classList.remove("menu-open");
    }
    setActive(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const root = menuRef.current;
    if (!root) return undefined;

    const fitOverlayToViewport = (el: HTMLElement) => {
      const vv = window.visualViewport;
      if (!vv) return;
      el.style.position = "fixed";
      el.style.left = vv.offsetLeft + "px";
      el.style.top = vv.offsetTop + "px";
      el.style.width = vv.width + "px";
      el.style.height = vv.height + "px";
    };

    fitOverlayToViewport(root);
    const handler = () => fitOverlayToViewport(root);

    window.visualViewport?.addEventListener("resize", handler, { passive: true });
    window.visualViewport?.addEventListener("scroll", handler, { passive: true });

    return () => {
      window.visualViewport?.removeEventListener("resize", handler);
      window.visualViewport?.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <>
      <button type="button" onClick={handleToggle} className="header-menu-toggle">
        Menu
      </button>
      {overlayRoot &&
        createPortal(
          <div
            ref={menuRef}
            className={`nav-bar-menu ${isActive ? "opened" : ""}`}
            role="dialog"
            aria-modal="true"
          >
            <div className="svg-wrapper">
              <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path className="span-open" d="M0 2S175 1 500 1s500 1 500 1V0H0Z" fill="#0c0c0c" />
              </svg>
            </div>
            <div className="menu-wrapper">
              <div className="menu-container">
                <ul className="menu">
                  <li className="menu-item">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      HOME
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      onClick={handleToggle}
                      to="/works"
                      className={`my-3 sign-out-link ${getLinkClass("/works")}`}
                    >
                      SHOWCASE
                    </Link>
                  </li>
                  <li className="menu-item">
                    {isAuthenticated ? (
                      <Link
                        onClick={handleToggle}
                        to="/dashboard"
                        className={`my-3 sign-out-link ${getLinkClass("/dashboard")}`}
                      >
                        DASHBOARD
                      </Link>
                    ) : (
                      <Link
                        onClick={handleToggle}
                        to="/login"
                        className={`my-3 sign-out-link ${getLinkClass("/login")}`}
                      >
                        LOGIN
                      </Link>
                    )}
                  </li>
                  <li className="menu-item">
                    {isAuthenticated ? (
                      <Link onClick={handleSignOut} to="/login" className="my-3 sign-out-link">
                        SIGN-OUT
                      </Link>
                    ) : (
                      <Link onClick={handleToggle} to="/register" className="my-3">
                        SIGN UP
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>,
          overlayRoot
        )}
    </>
  );
};

export default Headermain;
