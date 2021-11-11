import React, { useEffect, useState } from "react";
import { hex as hexContrast} from 'wcag-contrast';
import { Card } from './Utils/Card';
import { Box } from './Utils/Box';
import { Text } from './Utils/Text';
import { Flex } from './Utils/Flex';
import { Status } from './Elements/ColorStatus'
import { ColorInfo } from "./Elements/ColorInfo";

export interface ColorProps {
  hex?: string
}

export const Color: React.FC<ColorProps> = ({hex = "000000"}: ColorProps) => {
  const [lightContrast, setLightContrast] = useState(0);
  const [darkContrast, setDarkContrast] = useState(0);

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

  useEffect(() => {
    setLightContrast(hexContrast("#fff", `#${hex}`))
    setDarkContrast(hexContrast("#000", `#${hex}`))
  }, [hex])

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
              <Status passed={darkContrast > 4.5 ? true : false}/>
              <Status passed={lightContrast > 4.5 ? true : false}/>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
    <Box css={CardBottomStyles}>
      <Flex justify="between" direction="column">
        <ColorInfo type="HEX" value={hex}/>
        <ColorInfo type="RGB" value={hex}/>
        <ColorInfo type="CMYK" value={hex}/>
        <ColorInfo type="Pantone" value={hex}/>
      </Flex>
    </Box>
  </Card>
}

