import { Column, Content, ContentText } from 'pdfmake/interfaces';

export const fixAlignedText = ({
  absolutePosition,
  ...textContent
}: ContentText & Pick<Column, 'width'> & Record<string, any>): Content => ({
  absolutePosition: { x: 0, y: 0 },
  columns: [
    {
      ...textContent,
      relativePosition: textContent.relativePosition ?? absolutePosition,
    },
  ],
});
