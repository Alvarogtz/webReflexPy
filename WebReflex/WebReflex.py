import reflex as rx
import WebReflex.styles.Styles as styles

def index() -> rx.Component:
    return rx.box(

    )

app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASESTYLE
)

app.add_page(
    index,
    title="Mi primera Web con Reflex!!",
    description="Web creada 100% con Reflex y Python."
)

app.compile()
