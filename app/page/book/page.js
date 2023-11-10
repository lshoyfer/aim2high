import Buttons from "./Buttons";

export default function BookPage() {
    return (
        <>
            <h2>Booking</h2>
            <p>
                {/* To book, fill out <span><a href="https://www.google.com/forms/about/" style={{textDecoration: "underline", display: "inline"}}>this form</a></span> and */}
                To book, fill out the form below with what kind 
                of service you&apos;re interested in and
                contact <span>aim2highconsulting@gmail.com</span>
            </p>
            <p>
                On an average business day you should expect a response within the hour.
                We&apos;re a small business, so please be patient. Thank you.
            </p>
            <p>
                We will never charge you before a lesson. All payments are to be done only after a lesson.
            </p>
            <Buttons />
        </>
    ) 
}