export default function ContactPage() {
    return (
        <main>
            <section id="contact">
                <h2>Get in touch</h2>
                <form id="contact-form" action="#" method="post" autoComplete="off">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5}></textarea>

                    <button type="submit">Send</button>
                </form>
            </section>
        </main>
    );
}