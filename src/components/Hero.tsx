import Button from "./Button"

function Hero() {
    return (
        <div className="flex flex-col items-center gap-5 py-10 px-14">
            <h1 className="text-3xl font-bold">My E Commerce Store</h1>
            <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus sed odio velit veniam culpa reprehenderit tempora obcaecati dolores ipsam illum magnam, repellendus voluptatum cumque impedit voluptatibus ratione ut? Expedita, ullam?
            </p>
            <Button name="Shop Now" />
        </div>
    )
}

export default Hero