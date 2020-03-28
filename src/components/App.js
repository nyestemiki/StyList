import React from 'react';
import { SimpleButton } from './Buttons';
import { Flex } from './Layouts';

// Test Class for the UI Elements
export default () => <>
    <SimpleButton borderColorHover="red">Simple Button</SimpleButton>
    <SimpleButton>Simple Button</SimpleButton>
    <SimpleButton>Simple Button</SimpleButton>
    <Flex>
        <SimpleButton>Simple Button</SimpleButton>
        <SimpleButton>Simple Button</SimpleButton>
        <SimpleButton>Simple Button</SimpleButton>
        <SimpleButton>Simple Button</SimpleButton>
        <SimpleButton>Simple Button</SimpleButton>
    </Flex>
    <Flex direction="column">
        <SimpleButton>Simple Button</SimpleButton>
        <SimpleButton>Simple Button</SimpleButton>
        <SimpleButton>Simple Button</SimpleButton>
        <SimpleButton>Simple Button</SimpleButton>
    </Flex>
</>;