import React, { useEffect, useState } from "react";
import { Text } from '../Utils/Text';
import { Box } from '../Utils/Box';

type ColorType = {
  /**
  * The color type
  */
  type?: 'HEX' | 'RGB' | 'CMYK' | 'Pantone',
}

export interface ColorInfoProps extends ColorType {
  /**
   * The color value
   */
  value: string
}

export const ColorInfo: React.FC<ColorInfoProps> = ({ type, value }: ColorInfoProps) => {
  const [colorValue, setColorValue] = useState('');

  const changeColorValue: Function = (colorType: ColorType, colorValue: string): string => {  
    let newColorValue: string = colorValue;
    let colorValueArray: string[] | number [] = ['00', '00', '00']

    colorValueArray[0] = colorValue.slice(0, 2)
    colorValueArray[1] = colorValue.slice(2, 4)
    colorValueArray[2] = colorValue.slice(4, 6)

    switch(colorType) {
      case 'HEX': return newColorValue
      case 'RGB':
        return newColorValue = colorValueArray.map((value: string | number) => parseInt(value.toString(), 16)).join("-");
      case 'CMYK':
        let c = 1 - (Number(colorValueArray[0]) / 255)
        let m = 1 - (Number(colorValueArray[1]) / 255)
        let y = 1 - (Number(colorValueArray[2]) / 255)
        let k = Math.min(c, Math.min(m, y));

        c = isNaN(c) ? 0 : c;
        m = isNaN(m) ? 0 : m;
        y = isNaN(y) ? 0 : y;
        k = isNaN(k) ? 0 : k;

        c = (c - k) / (1 - k);
        m = (m - k) / (1 - k);
        y = (y - k) / (1 - k);

        c = Math.round(c * 10000 / 100);
        m = Math.round(m * 10000 / 100);
        y = Math.round(y * 10000 / 100);
        k = Math.round(k * 10000 / 100);
        
        return `${c}-${m}-${y}-${k}` 
      case 'Pantone':
        return newColorValue;
      case 'default': 
        return newColorValue
    }
  }

  useEffect(() => {
    setColorValue(changeColorValue(type, value))
  }, [type, value])

  return <Box>
    <Text variant="body2" css={{color: '#8C8D8F'}}>{type}</Text>
    <Text variant="body2" css={{marginTop: '4px'}}>{colorValue}</Text>
  </Box>
}