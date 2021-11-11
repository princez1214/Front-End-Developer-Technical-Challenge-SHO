import React from "react";
import { styled } from "../../stitches.config";
import { Text } from '../Utils/Text';

export const StyledStatus = styled('div', {
	width: '50px',
	height: '24px',
	background: '#C36F7B',
	border: '1px solid #FFFFFF',
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white',

	variants: {
		passed: {
			true: {
				background: '#578F83',
			},
			false: {
				background: '#C36F7B',
			}
		}
	}
})
  
  export interface StatusProps {
    /**
     * Color contrast is passed or not for WCGA2.0
     */
    passed?: boolean
  }
  
  export const Status: React.FC<StatusProps> = ({ passed }: StatusProps) => (
		<StyledStatus passed={passed}>
			{
				passed ?
				<Text variant="body2">PASS</Text> :
				<Text variant="body2">FAIL</Text>
			}
		</StyledStatus>
	)