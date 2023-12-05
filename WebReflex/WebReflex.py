import reflex as rx
import WebReflex.styles.Styles as styles
from WebReflex.views.navbar import navbar

def index() -> rx.Component:
    return rx.box(
        navbar()
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
