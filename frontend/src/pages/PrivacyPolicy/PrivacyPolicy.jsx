import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacypolicy">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: November 2025</p>
      <p>
        Tomato Food Delivery values your privacy and is committed to protecting
        your personal information. This Privacy Policy explains how we collect,
        use, share, and safeguard your data when you use our website and
        services.
      </p>{" "}
      <br />
      <h2>Information We Collect</h2>
      <ul>
        <li>
          Personal details like name, address, phone number, and email when you
          register or place orders.
        </li>
        <li>Login details and payment information for processing orders.</li>
        <li>
          Order history and preferences for customer experience improvement.
        </li>
        <li>
          Device info, IP addresses, browser type, and usage data through
          cookies and analytics tools.
        </li>
      </ul>
      <br />
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To process orders and deliver food quickly and efficiently.</li>
        <li>
          To communicate order updates, offers, and answer support queries.
        </li>
        <li>To personalize your experience on our platform.</li>
        <li>To analyze and improve our website and services.</li>
        <li>To meet legal obligations and regulatory requirements.</li>
      </ul>
      <br />
      <h2>Sharing and Disclosure</h2>
      <ul>
        <li>We do not sell your personal information.</li>
        <li>
          We may share your details with trusted third parties (payment
          processors, delivery partners) as needed to fulfill your order.
        </li>
        <li>
          We may disclose information when required to comply with law or
          protect our rights.
        </li>
      </ul>
      <br />
      <h2>Cookies</h2>
      <p>
        Our website uses cookies to enhance user experience and collect
        analytics data. You may choose to disable cookies in your browser
        settings, but some site features may not function properly.
      </p>
      <br />
      <h2>Data Security</h2>
      <ul>
        <li>
          We use reasonable security measures to protect your personal
          information against unauthorized access, alteration, or disclosure.
        </li>
        <li>Access is restricted to authorized personnel only.</li>
      </ul>
      <br />
      <h2>Your Rights</h2>
      <ul>
        <li>
          You may update or correct your information any time by contacting us.
        </li>
        <li>
          You may request deletion of your personal information, subject to
          legal requirements.
        </li>
      </ul>
      <br />
      <h2>Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and where appropriate, notified to you.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
