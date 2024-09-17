


const THEME = {
  BaseRow: `
      font-size: 14px;
    `,
  HeaderRow: `
      background-color: none;
     
    `,
  Row: `
      &:nth-of-type(odd) {
        background-color: #f3f4f6;
      }
  
      &:nth-of-type(even) {
        background-color: #f9fafb;
      }
    `,

  BaseCell: `
    // text-align: center;
    margin: 2px;
    padding: 11px;
  `,

  Table: `
    --data-table-library_grid-template-columns:  20% 20% 20% 20% minmax(150px, 1fr);
     scrollbar-color:#2E9AFF #F9FAFB;
     scrollbar-width: thin;
     max-height: 300px
  `,
  HeaderCell: `
    text-align: center;
    color: #9ca3af;


  `,
  Footer: `
    // text-align: center;
    color: #9ca3af;
    margin-top: 19px;
    padding: 11px;

  `
};


export default THEME