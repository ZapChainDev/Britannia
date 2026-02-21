/**
 * Mobile Responsiveness Unit Tests
 *
 * Tests that all components render correctly and contain
 * the expected responsive classes/structures for mobile.
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock next/link
jest.mock("next/link", () => {
  return ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

// Mock framer-motion
jest.mock("framer-motion", () => {
  const React = require("react");
  const motion = new Proxy(
    {},
    {
      get: (_target: unknown, prop: string) => {
        return React.forwardRef(
          (props: Record<string, unknown>, ref: unknown) => {
            const {
              initial: _i,
              animate: _a,
              exit: _e,
              transition: _t,
              whileInView: _wiv,
              whileHover: _wh,
              whileTap: _wt,
              viewport: _v,
              variants: _va,
              ...rest
            } = props;
            return React.createElement(prop, { ...rest, ref });
          },
        );
      },
    },
  );
  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});

// Import components
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import Footer from "../app/components/Footer";

// ─── Header Tests ───────────────────────────────────────────────────
describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the logo image", () => {
    const logos = screen.getAllByAltText("Britannia Defender Group");
    expect(logos.length).toBeGreaterThanOrEqual(1);
  });

  it("renders navigation links", () => {
    const homeLinks = screen.getAllByText("HOME");
    expect(homeLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("renders a hamburger button for mobile", () => {
    const hamburger = screen.getByLabelText("Toggle menu");
    expect(hamburger).toBeInTheDocument();
  });

  it("shows mobile menu when hamburger is clicked", () => {
    const hamburger = screen.getByLabelText("Toggle menu");
    fireEvent.click(hamburger);

    // Mobile menu should show all 4 navigation links
    const contactLinks = screen.getAllByText("CONTACT");
    expect(contactLinks.length).toBeGreaterThanOrEqual(2); // One in desktop nav, one in mobile menu
  });

  it("closes mobile menu when a link is clicked", () => {
    const hamburger = screen.getByLabelText("Toggle menu");
    fireEvent.click(hamburger);

    // Click a mobile menu link
    const mobileLinks = screen.getAllByText("HOME");
    // Click the last one (mobile menu)
    fireEvent.click(mobileLinks[mobileLinks.length - 1]);

    // Menu should close — only desktop CONTACT links remain
    // The mobile dropdown div should no longer be present
    const certLinks = screen.getAllByText("CERTIFICATION");
    expect(certLinks.length).toBe(1); // Only desktop nav
  });

  it("has desktop nav hidden on mobile via className", () => {
    const { container } = render(<Header />);
    const desktopNav = container.querySelector(".hidden.md\\:grid");
    expect(desktopNav).toBeInTheDocument();
  });

  it("has mobile nav visible on mobile via className", () => {
    const { container } = render(<Header />);
    const mobileNav = container.querySelector(".flex.md\\:hidden");
    expect(mobileNav).toBeInTheDocument();
  });

  it("has header-fixed class for mobile positioning", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header.header-fixed");
    expect(header).toBeInTheDocument();
  });

  it("hides ornate corners on mobile", () => {
    const { container } = render(<Header />);
    const hiddenCorners = container.querySelectorAll(".hidden.md\\:block");
    expect(hiddenCorners.length).toBe(2); // Left + right corner
  });
});

// ─── Hero Tests ─────────────────────────────────────────────────────
describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it("renders the main heading", () => {
    expect(screen.getByText(/RESTORING ICONS/)).toBeInTheDocument();
    expect(screen.getByText(/BRITISH ENGINEERING/)).toBeInTheDocument();
  });

  it("renders the VIEW INVENTORY button", () => {
    expect(screen.getByText("VIEW INVENTORY")).toBeInTheDocument();
  });

  it("has responsive padding classes", () => {
    const { container } = render(<Hero />);
    const contentDiv = container.querySelector(
      ".px-4.sm\\:px-6.pt-28.sm\\:pt-40",
    );
    expect(contentDiv).toBeInTheDocument();
  });

  it("renders the video element", () => {
    const { container } = render(<Hero />);
    const video = container.querySelector("video");
    expect(video).toBeInTheDocument();
  });

  it("button has btn-medieval class", () => {
    const button = screen.getByText("VIEW INVENTORY");
    expect(button.className).toContain("btn-medieval");
  });
});

// ─── Footer Tests ───────────────────────────────────────────────────
describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders company name", () => {
    expect(screen.getByText("BRITANNIA DEFENDER GROUP")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    expect(screen.getByText("INVENTORY")).toBeInTheDocument();
    expect(screen.getByText("PHILOSOPHY")).toBeInTheDocument();
  });

  it("has responsive padding", () => {
    const { container } = render(<Footer />);
    const wrapper = container.querySelector(
      ".py-12.sm\\:py-20.px-4.sm\\:px-12",
    );
    expect(wrapper).toBeInTheDocument();
  });

  it("has desktop social icons hidden on mobile", () => {
    const { container } = render(<Footer />);
    const desktopSocial = container.querySelector(".hidden.sm\\:flex.absolute");
    expect(desktopSocial).toBeInTheDocument();
  });

  it("has mobile social icons visible on mobile", () => {
    const { container } = render(<Footer />);
    const mobileSocial = container.querySelector(".flex.sm\\:hidden");
    expect(mobileSocial).toBeInTheDocument();
  });

  it("has flex-wrap on nav links for mobile", () => {
    const { container } = render(<Footer />);
    const navLinks = container.querySelector(".flex-wrap");
    expect(navLinks).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    expect(
      screen.getByText(/BRITANNIA DEFENDER GROUP LTD/),
    ).toBeInTheDocument();
  });

  it("renders footer policy links", () => {
    expect(screen.getByText("PRIVACY POLICY")).toBeInTheDocument();
    expect(screen.getByText("TERMS OF SERVICE")).toBeInTheDocument();
  });
});
