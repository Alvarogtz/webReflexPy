import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import range from "/utils/helpers/range.js"
import "focus-visible/dist/focus-visible"
import { Box, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react"
import NextHead from "next/head"



export default function Component() {
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Box>
  <VStack sx={{"bg": "#212529", "position": "sticky", "borderBottom": "0.025em solid #D3D3D3", "paddingX": ["2em"], "paddingY": "1em", "zIndex": "999", "top": "0", "width": "100%"}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Prueba de primera imagen`} src={`favicon.ico`} sx={{"width": ["4em"], "height": ["4em"]}}/>
  <Text>
  {`Mi primera web con Reflex !!`}
</Text>
  <Spacer/>
</HStack>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Mi primera Web con Reflex!!`}
</title>
  <meta content={`Web creada 100% con Reflex y Python.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
