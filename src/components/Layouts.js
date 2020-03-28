import styled from 'styled-components';

/**
 * Flex container 
 * 
 * Customization
 *  - Direction of the content w/ 'direction'
 *      - values: row[-reverse], column[-reverse]
 */
const Flex = styled.div`
    display: flex;
    flex-direction: ${p => p.direction};
`;

export { Flex };