import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { THREE, Renderer } from 'expo-three';

// Make sure THREE reference is set.
global.THREE = global.THREE || THREE;

export default function GameScreen() {
    return (
        <SafeAreaView>
            <GLView
                style={{ flex: 1 }}
                onContextCreate={(gl: ExpoWebGLRenderingContext) => {
                    // Create a WebGLRenderer without a DOM element
                    const renderer = new Renderer({ gl });
                    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
                }}
            />
        </SafeAreaView>
    );
}