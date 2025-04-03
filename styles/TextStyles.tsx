import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'

interface TextBoldProps {
    children: ReactElement | string;
    size?: 24 | 20 | 18 | 16 | 14;
    color?: string;
}

interface TitleProps {
    children: ReactElement | string;
    size?: 48 | 32 | 24;
    color?: string;
}

export const TextBold = ({children, size, color}: TextBoldProps) => {

    return (
        <Text style={{
            fontFamily: "DMSans-Bold",
            fontSize: size ? size : 16,
            color: color ? color : "black",
            letterSpacing: -0.5,
        }}>{children}</Text>
    )
}

export const TextMedium = ({children, size, color}: TextBoldProps) => {
    
    return (
        <Text style={{
            fontFamily: "DMSans-Medium",
            fontSize: size ? size : 16,
            color: color ? color : "black",
        }}>{children}</Text>
    )
}

export const Title = ({children, size, color}: TitleProps) => {
        
    return (
        <Text style={{
            fontFamily: "DMSans-Bold",
            fontSize: size ? size : 24,
            color: color ? color : "black",
            letterSpacing: -0.25,
        }}>{children}</Text>
    )
}

export const TextLink = ({children, size, color}: TextBoldProps) => {
        
    return (
        <Text style={{
            fontFamily: "DMSans-Medium",
            fontSize: size ? size : 16,
            color: color ? color : "black",
            textDecorationLine: "underline",
            letterSpacing: -0.25,
        }}>{children}</Text>
    )
} 



