import styled from 'styled-components';

/**
 * Simple Button
 * 
 * Customization
 *  - Border color (HOVER) w/ 'borderColorHover'
 *      - values: any color or color code (hexadecimal/rgb/rgba)
 */
const SimpleButton = styled.div`
    padding: 2px;
    margin: 5px;
    box-shadow: 0 0 3px black;
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid transparent;
    transition: 
        border .5s, 
        box-shadow .8s,
        background .35s;
    border-radius: 5px;
    text-align: center;
    user-select: none;

    &:hover {
        border: 1px solid ${p => p.borderColorHover || 'blue'};
        box-shadow: 0 0 6px black;
    }

    &:active {
        background: rgba(0, 0, 0, .05);
    }
`;

export { SimpleButton };