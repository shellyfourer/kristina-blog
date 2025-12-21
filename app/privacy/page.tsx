export default function PrivacyPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-sm">
            <h1 className="text-2xl">Privacy Policy</h1>

            <p>
                This website is operated by Kristina Fourer, based in London, United Kingdom.
                Your privacy is important, and this page explains how personal data is handled.
            </p>

            <h2 className="text-lg">Information Collected</h2>
            <p>
                Personal data may be collected when you subscribe to the newsletter,
                contact the site, or interact with embedded third-party services.
                This may include your email address and basic usage data.
            </p>

            <p>
                Email addresses submitted for newsletter subscriptions are used solely
                to send updates and are not shared or sold.
            </p>

            <h2 className="text-lg">Analytics</h2>
            <p>
                This website uses analytics to understand how visitors use the site.
                Analytics data is collected in an aggregated and anonymised form and does
                not personally identify individual users.
            </p>

            <h2 className="text-lg">Third-Party Services</h2>
            <p>
                Links or embeds from services such as YouTube, Instagram, Substack, or other
                platforms may collect data according to their own privacy policies.
            </p>

            <h2 className="text-lg">Your Rights</h2>
            <p>
                Under UK GDPR, you have the right to access, correct, or request deletion
                of your personal data. You may also withdraw consent at any time.
            </p>

            <h2 className="text-lg">Contact</h2>
            <p>
                If you have questions about this policy or your data, please use the
                contact page on this website.
            </p>

            <p className="text-xs text-muted">
                Last updated: January {new Date().getFullYear()}
            </p>
        </main>
    );
}