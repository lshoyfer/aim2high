import Buttons from "./Buttons";

export default function BookPage() {
    return (
        <>
            <h2>Booking</h2>
            <p>
                To book, fill out <span>this form</span> and contact <span>aim2highconsulting@gmail.com</span> with what kind 
                of service you&apos;re interested in.
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