import React from "react";
import { Card } from './Utils/Card';
import { Box } from './Utils/Box';
import { Text } from './Utils/Text';
import { Flex } from './Utils/Flex';
import { Status } from './Elements/ColorStatus'

export interface ColorProps {
  hex?: string
}

export const Color: React.FC<ColorProps> = ({hex = "000000"}: ColorProps) => {

  let CardTopStyles = {
    width: '100%',
    background: "#" + hex,
    height: '200px',
    padding: 10
  }

  let CardBottomStyles = {
    width: '100%',
    background: 'white',
    height: '200px',
    padding: 10
  }

  return <Card type="outlined" css={{width: '317px'}}>
    <Box css={CardTopStyles}>
      <Flex direction="column" justify="between">
        <Text variant="h5" css={{color: 'white'}}>{'# ' + hex}</Text>
        <Box>
          <Box css={{marginBottom: '8px'}}>
            <Flex direction="row" justify="between">
              <Text variant="subtitle1" css={{color: '#000000'}}>{"00 00 00"}</Text>
              <Text variant="subtitle1" css={{color: '#ffffff'}}>{"FF FF FF"}</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="row" justify="between">
              <Status passed={true}/>
              <Status passed={false}/>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
    <Box css={CardBottomStyles}></Box>
  </Card>
}

