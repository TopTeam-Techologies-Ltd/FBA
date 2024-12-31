
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li><a href="/about" className="hover:underline">About Us</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                    <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;


