import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

export default function Component1() {
    return (
        <Parallax
            pages={3}
            scrolling={false}
            horizontal
            ref={(ref) => (this.parallax = ref)}
        >
            <ParallaxLayer offset={0} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(1)}>
                    Layers can contain anything
                </span>
            </ParallaxLayer>
        </Parallax>
    );
}
