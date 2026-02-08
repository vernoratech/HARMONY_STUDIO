import PolicyLayout from "../components/layout/PolicyLayout";

const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="March 2026">
      <p>
        Harmony Studio uses cookies to improve website functionality and user
        experience.
      </p>

      <h3>What Are Cookies?</h3>
      <p>
        Cookies are small data files stored on your device to help websites
        operate efficiently.
      </p>

      <h3>Cookies We Use</h3>
      <ul>
        <li>Essential cookies for site functionality</li>
        <li>Analytics cookies to understand visitor behavior</li>
        <li>Preference cookies to remember user settings</li>
      </ul>

      <h3>Managing Cookies</h3>
      <p>
        You can control or disable cookies through your browser settings.
        Disabling cookies may affect some features of the site.
      </p>
    </PolicyLayout>
  );
};

export default CookiePolicy;
