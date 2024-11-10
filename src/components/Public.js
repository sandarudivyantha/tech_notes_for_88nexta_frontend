import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">88 NEXTA</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Foo City, 88 NEXTA provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    88 NEXTA<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(+94) 555-5555</a>
                </address>
                <br />
                <p>Owner: Sandaru Divyantha</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    );
    return content;
};
export default Public;
