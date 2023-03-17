export default function ContentHeader(props) {
    return (
        <section className="ContentHeader d-flex  align-items-center mt-2">
            <h2 className="me-2">{props.title}</h2><small className="text-muted">{props.subtitle}</small>
        </section>
    )
}