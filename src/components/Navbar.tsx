function Navbar() {
    return(
        <div className="flex justify-between items-center bg-primaryColor text-white py-3 px-8">
            <h1 className="text-2xl font-bold">Logo</h1>
            <ul className="flex gap-7">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar