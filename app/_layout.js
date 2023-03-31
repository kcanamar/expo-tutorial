import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'

// Makes the native splash screen visible until hideAsync is called
SplashScreen.preventAutoHideAsync()

export default function Layout() {

    // import custom fonts using useFonts 
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    // Similar to useEffect
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // only show the home page once the fonts have been loaded
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null

    return <Stack onLayout={onLayoutRootView}/>;
}