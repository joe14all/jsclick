// components/DynamicSection/DynamicSection.js
import { GridContainer, GridItem } from '../DataGrid/DataGrid';
import { List } from '../List/List';

export const DynamicSection = ({ data }) => {
  if (!data) return null;

  return (
    <GridContainer>
      {data.map((section, index) => {
        if (section.type === 'keyValue') {
          return (
            <GridItem key={index} label={section.label}>
              {section.value}
            </GridItem>
          );
        }
        
        if (section.type === 'list') {
          return (
            <GridItem key={index} label={section.label}>
              <List items={section.items} bulletColor={section.bulletColor} />
            </GridItem>
          );
        }

        return null;
      })}
    </GridContainer>
  );
};