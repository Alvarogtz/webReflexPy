import reflex as rx
from WebReflex.styles.Styles import Size, Color

def navbar() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.image(
                src="favicon.ico",
                alt="Prueba de primera imagen",
                width=Size.VERY_BIG.value,
                height=Size.VERY_BIG.value
            ),
            rx.text("Mi primera web con Reflex !!"),
            rx.spacer(),
            width = "100%"
        ),
        bg=Color.PRIMARY.value,
        position="sticky",
        border_bottom=f"0.025em solid {Color.SECONDARY.value}",
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0",
        width = "100%"
    )