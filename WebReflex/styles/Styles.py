import reflex as rx
from .Fonts import *
from .Colors import *

STYLESHEETS = [
    "https://unpkg.com/nes.css@latest/css/nes.min.css",
    "https://fonts.googleapis.com/icon?family=Press+Start+2P&display=swap"
]

BASESTYLE = {
    "font_family" : Font.DEFAULT.value,
    "color" : TextColor.TERTIARY.value,
    "background" : Color.PRIMARY.value
}

class Size(Enum):
    SMALL = "0.5em",
    BIG = "2em",
    VERY_BIG = "4em",
    DEFAULT = "1em"