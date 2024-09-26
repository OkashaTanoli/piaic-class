function Button({ name }: { name: string }) {
    return (
        <button className="bg-primaryColor py-3 px-8 rounded-md text-white font-semibold">{name}</button>
    )
}

export default Button