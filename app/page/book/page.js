import styles from "./book.module.css";

export default function BookPage() {
    return (
        <>
            <h2>Booking</h2>
            <p>
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
            <a href="https://www.google.com/forms/about/" id={styles["form-button"]} className="dramatic-link-button">Form</a>
        </>
    ) 
}