
import styled from "styled-components";
import { VariantType } from "./Button";

const COLORS = { 
    primary:            '#0099FF',
    danger:             '#F84735',
    white:              '#FFF',
    text:               '#274060',
    text_bg_disabled:   '#508AC9',
};

const ALPHA = {
    transparent:        'transparent',
    alpha_level_25:     '41',        //25%
    alpha_level_56:     '8F'         //56%
}

const BOX_SHADOW =  '0 3px 6px rgba(0,0,0,.2)';

const THEME ={
    danger: {
        bg: COLORS.danger,
        color: '#FFF',
        onHover: `
            box-shadow: ${BOX_SHADOW}
        `,
        disabled : {
            color: `${COLORS.danger}`,
            bg: `${COLORS.danger}${ALPHA.alpha_level_25}`,
            border_color: `${ALPHA.transparent}`,
        }
    },
    primary: {
        bg:COLORS.primary,
        color: `${COLORS.white}`,
        onHover: ` 
        box-shadow: ${BOX_SHADOW};
        `,
        disabled : {
            bg: `${COLORS.primary}${ALPHA.alpha_level_56}`,
            border_color: `${ALPHA.transparent}`,
            color: `${COLORS.white}`,

        }
    },
    text: {
        bg:ALPHA.transparent,
        color: COLORS.text,
        onHover: ` 
            border-color: ${COLORS.text};
        `,
        disabled : {
            color: `${COLORS.text}`,
            bg: `${COLORS.text_bg_disabled}`,
            border_color: `${ALPHA.transparent}`,
        }
    },
}



export const Wrapper = styled.button<{variant: VariantType}>`
    padding:  4px 8px;
    margin: 4px;
    border: 1px solid ${p=>THEME[p.variant].bg};
    color: ${p=>THEME[p.variant].color};
    background-color: ${p=>THEME[p.variant].bg};

    &:hover,
    &:focus {
        ${ p => THEME[p.variant].onHover};
    }

    &:disabled {
        background-color: ${p => THEME[p.variant].disabled.bg};
        color: ${p => THEME[p.variant].disabled.color};
        pointer-events: none;
        border-color: ${p => THEME[p.variant].disabled.border_color}
    }
`;

export const Label = styled.label`
   div {
        display: flex;
        align-items: center;
        justify-content: center;
        
      
        
   }
`